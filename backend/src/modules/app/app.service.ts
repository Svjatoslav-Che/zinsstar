import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { config } from 'node-config-ts';
import { POPULATE } from './data';
import { DocumentsService } from '../documents/services/documents.service';
import { CountryService } from '../country/services/country.service';
import { BanksService } from '../banks/services/banks.service';
import { OffersService } from '../offers/services/offers.service';
import { CountryEntity } from '../../data/model/country.entity';
import { BanksEntity } from '../../data/model/bank.entity';
import { OffersEntity } from '../../data/model/offer.entity';
import { Currency } from '../country/models/currency.enum';

@Injectable()
export class AppService {
  private readonly logger = new Logger('DocumentsService');

  public constructor(
    private readonly docService: DocumentsService,
    private readonly countryService: CountryService,
    private readonly bankService: BanksService,
    private readonly OfferService: OffersService,
  ) { }

  async populateData() {
    await this.populateCountries();
    await this.populateBanks();
    await this.populateOffers();
  }

  async populateCountries() {
    for (const c of POPULATE) {
      try {
        const country: CountryEntity = new CountryEntity();
        country.country_code = c.country_code;
        country.credit_rating = c.credit_rating;
        country.description = c.description;
        country.guarantee_amount = c.guarantee_amount;
        country.guarantee_currency = c.guarantee_currency;
        country.name = c.name;
        country.tax_description = c.tax_description;
        country.rating_date = c.rating_date;
        if (c.banks.length > 0) {
          await country.save();
        }
      } catch (e) {
        this.logger.error(`Error creating country ${e}`);
      }
    }
  }

  async populateBanks() {
    POPULATE.forEach(async (c) => {
      try {
        if (c.banks.length > 0) {
          const country = await this.countryService.findByCode(c.country_code);
          const { banks } = c;
          banks.forEach(async (b) => {
            const bank: BanksEntity = new BanksEntity();
            bank.name = b.name;
            bank.logo = b.logo;
            bank.insurance_name = b.insurance_name;
            bank.insurance_description = b.insurance_description;
            bank.country_code = country.country_code;
            bank.country = country;
            bank.permalink = b.permalink;
            bank.uid = b.uid;
            bank.description = b.description;
            try {
              if (b.offers.length > 0) await bank.save();
            } catch (e) {
              this.logger.error(`Error ${e}`);
            }
          });
        }
      } catch (e) {
        this.logger.error(`Error ${e}`);
      }
    });
  }

  async fixBanks() {
    const banks = await this.bankService.findAll();
    banks.forEach(async (bank: BanksEntity) => {
      const _path = bank.logo.split('/');
      const logo = _path[_path.length - 1];
      bank.logo = logo;
      await bank.save();
    });
  }

  async populateOffers() {
    POPULATE.forEach(async (c) => {
      try {
        const country = await this.countryService.findByCode(c.country_code);
        if (country && c.banks.length > 0) {
          const { banks } = c;
          banks.forEach(async (bank) => {
            const bankInDB = await this.bankService.findByUid(bank.uid);
            if (bank.offers.length > 0) {
              const bankOffers = bank.offers;
              bankOffers.forEach(async (offer) => {
                const offerDB: OffersEntity = new OffersEntity();
                offerDB.oid = offer.oid;
                offerDB.currency = offer.currency;
                offerDB.duration = offer.duration;
                offerDB.max_deposit = offer.max_placement_amount;
                offerDB.is_foreign_currency = offer.is_in_foreign_currency;
                offerDB.is_overnight = offer.is_overnight;
                offerDB.bank = bankInDB;

                offerDB.interest_rate = offer.interest_rate;
                try {
                  await offerDB.save();
                } catch (e) {
                  this.logger.error(`${e}`);
                }
              });
            }
          });
        }
      } catch (e) {
        this.logger.error(`Error ${e}`);
      }
    });
  }

  async fixCurrency() {
    this.OfferService.findAll().subscribe(async (offers) => {
      offers.forEach(async (offer) => {
        offer.currency = Currency.EUR;
        await offer.save();
      });
    });
  }
}
