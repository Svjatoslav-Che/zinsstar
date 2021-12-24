import { NotFoundException } from '@nestjs/common';

export class OfferNotFound extends NotFoundException {
  public constructor(error?: string) {
    super('error.offer_not_found', error);
  }
}
