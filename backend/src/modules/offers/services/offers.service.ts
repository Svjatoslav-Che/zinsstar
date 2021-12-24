import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { from, Observable } from 'rxjs';
import { OffersEntity } from '../../../data/model/offer.entity';
import { Search } from '../model/search.interface';
import { OfferNotFound } from '../exceptions/offer-not-found.exception';
import { BanksService } from '../../banks/services/banks.service';

@Injectable()
export class OffersService {
  private readonly logger = new Logger('OffersService');

  public constructor(
    @InjectRepository(OffersEntity)
    private readonly offersRepo: Repository<OffersEntity>,
    private readonly bankService: BanksService,
  ) {
  }

  async findOne(id: number) {
    const offer = await this.offersRepo.findOne({ id });
    if (!offer) {
      throw new OfferNotFound();
    }
    return offer;
  }

  async findOneOid(oid: string) {
    const offer = await this.offersRepo.findOne({ oid });
    if (!offer) {
      throw new OfferNotFound();
    }
    return offer;
  }

  paginate(pOptions: Search): Observable<Pagination<OffersEntity>> {
    const {
      limit, page, route, bank,
    } = pOptions;
    // @ts-ignore
    const options: IPaginationOptions = { limit, page, route };
    return from(paginate<OffersEntity>(this.offersRepo, options));
  }

  async findByBank(code: string) {
    return await this.offersRepo.find({ where: { bank: code } });
  }

  public findAll(): Observable<OffersEntity[]> {
    return from(this.offersRepo.find());
  }

  async findBy() {
    return { message: 'Not Implemented yet' };
  }

  public async create(data: Partial<OffersEntity>): Promise<OffersEntity> {
    const bank = await this.bankService.findOne(data.bankId);
    const offerEntity = new OffersEntity(data);
    offerEntity.bank = bank;
    await offerEntity.save();

    return offerEntity;
  }

  public async update(offer: OffersEntity): Promise<OffersEntity> {
    await this.offersRepo.update(offer.id, offer);

    return this.offersRepo.findOne({ where: { id: offer.id } });
  }

  public delete(id: number): Promise<DeleteResult> {
    return this.offersRepo.delete(id);
  }
}
