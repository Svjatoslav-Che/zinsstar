import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { from, Observable } from "rxjs";
import { IPaginationOptions, paginate, Pagination } from "nestjs-typeorm-paginate";
import { BanksEntity } from "../../../data/model/bank.entity";
import { CreateBankDTO } from "../dto/create-bank.dto";
import { Search } from "../../offers/model/search.interface";
import { CountryEntity } from "../../../data/model/country.entity";

@Injectable()
export class BanksService {
  public constructor(
    @InjectRepository(BanksEntity) private readonly repo: Repository<BanksEntity>,
    @InjectRepository(CountryEntity) private readonly countryRepository: Repository<CountryEntity>,
  ) {}

  public update(bank): Promise<any> {
    return this.repo.update(bank.id, bank);
  }

  async findOne(id: number) {
    try {
      return await this.repo.findOneOrFail({ id });
    } catch (e) {
      throw new NotFoundException('record not found');
    }
  }

  async exist(uid: string) {
    return await this.repo.findOne({ uid });
  }

  public findAll() {
    return this.repo.find({
      relations: ['country', 'offers'],
    });
  }

  async create(data: CreateBankDTO) {
    const { country_code } = data;
    const bank = new BanksEntity({ ...data })
    bank.country = await this.countryRepository.findOne({ where: { country_code } });

    return bank.save();
    // return this.repo.insert(new BanksEntity({...data, countryId: id }));
  }

  async delete(id: number) {
    return { message: 'Not Implemented yet' };
  }

  public paginate(pOptions: Search): Observable<Pagination<BanksEntity>> {
    const {
      limit, page, route, bank, sort,
    } = pOptions;

    // @ts-ignore
    const options: IPaginationOptions = { limit, page, route };

    return from(paginate<BanksEntity>(this.repo, options));
  }

  public async findByUid(uid: string): Promise<BanksEntity | undefined> {
    const bank: BanksEntity | undefined = await this.repo.findOne({ uid });
    if (!bank) throw new NotFoundException();

    return bank;
  }
}
