export class Mask {
  code?: string;
  mask?: string;
  country?: string;
  prefix?: string;
  flag?: string;
}

export const CountryMaskList: Mask[] = [
  { code: 'AT', country: 'Austria', prefix: '+43', mask: ' 0000 000000', flag: 'at' },
  { code: 'DE', country: 'Germany', prefix: '+49', mask: ' 000 0000000', flag: 'de' },
  { code: 'CH', country: 'Switzerland', prefix: '+41', mask: ' 000 000 00 00', flag: 'ch' },
  { country: 'Polen', code: 'POL', flag: 'pl', prefix: '+48' },
  { country: 'United Kingdom', code: 'UK', flag: 'en', prefix: '+44' },
  { country: 'Netherlands', code: 'BES', flag: 'bes', prefix: '+31' },
  { country: 'Belgien', code: 'BEL', flag: 'bel', prefix: '+32' },
];
