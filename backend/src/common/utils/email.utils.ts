import { config } from 'node-config-ts';
import * as crypto from 'crypto';
import { BLACK_LIST_EMAIL_LIST } from '../constants/black-list-email-list.constants';
import { Gender } from '../../modules/user/models/gender.enum';

const MIN_HASH_LENGTH: number = 0;
const MAX_HASH_LENGTH: number = 32;
const RANDOM_BYTES: number = 64;
const HEX: BufferEncoding = 'hex';
export class EmailUtils {
  public static isEmailBlackListed(email: string): boolean {
    const provider = email.split('@')[1];
    return BLACK_LIST_EMAIL_LIST.includes(provider);
  }

  public static nameFormatter(first: string, last: string, gender: Gender): string {
    return `Sehr geehrte${gender === Gender.female ? '' : 'r'} ${gender} ${first} ${last}`;
  }

  public static monthYear(duration: number): string {
    if (duration === 1) {
      return `${duration} Monat`;
    }
    if (duration < 12) {
      return `${duration} Monate`;
    }
    if (duration > 12) {
      return `${duration / 12} Jahre`;
    }
    if (duration === 12) {
      return `${duration / 12} Jahr`;
    }

    return '';
  }

  public static getContext(name?: string): any {
    return {
      name_: name,
      phone_template: config.mail.contact.phone.template,
      phone_href: config.mail.contact.phone.href,
      email_href: config.mail.contact.email.href,
      email_template: config.mail.contact.email.service,
      street: config.mail.contact.company.street,
      zip: config.mail.contact.company.zip,
      country: config.mail.contact.company.country,
      city: config.mail.contact.company.city,
      BASE_URL: config.mail.url,
    };
  }

  public static generateRandomHash(length = MAX_HASH_LENGTH): string {
    return crypto.randomBytes(RANDOM_BYTES).toString(HEX).substr(MIN_HASH_LENGTH, length);
  }

  public static cryptPassword(password): string {
    return crypto.createHmac('sha256', password).digest('hex');
  }

  public static numberThousandSeparator(num): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
