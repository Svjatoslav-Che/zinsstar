import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessagesEntity } from '../../../data/model/messages.entity';

@Injectable()
export class MessagesService {
  public constructor(
    @InjectRepository(MessagesEntity)
    private messageRepo: Repository<MessagesEntity>,
  ) {}
}
