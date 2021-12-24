import {PhoneNumber} from 'libphonenumber-js/mobile';
import jwt_decode from 'jwt-decode';

import {AccessToken, RawToken} from '../models/auth.interfaces';

export function toTimer(timeDelta: number): string {
  if (timeDelta > 0) {
    const minutes: number = Math.floor(timeDelta / 60);
    const seconds: number = timeDelta - minutes * 60;

    return `${minutes.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    })}:${seconds.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    })}`;
  } else {
    return '00:00';
  }
}

export function formatPhoneNumber(phoneNumber: PhoneNumber): string {
  return phoneNumber.formatInternational().split(' ').slice(1).join(' ');
}

export function decodeAccessToken(token: string): AccessToken {
  const accessToken: RawToken = jwt_decode(token);
  const iat = new Date(accessToken.iat * 1000);
  const exp = new Date(accessToken.exp * 1000);
  // const user=accessToken.

  return {...accessToken, iat, exp};
}
