export enum MaritalStatusEnum {
  separated = 'getrennt lebend',
  single = 'ledig',
  married = 'verheiratet',
  widowed = 'verwitwet',
  divorced = 'geschieden'
}

export interface MaritalStatus {
  code: MaritalStatusEnum;
  title: string;
}

export const SOCIAL_STATUS: MaritalStatus[] = [
  {code: MaritalStatusEnum.separated, title: 'getrennt lebend'},
  {code: MaritalStatusEnum.single, title: 'ledig'},
  {code: MaritalStatusEnum.married, title: 'verheiratet'},
  {code: MaritalStatusEnum.widowed, title: 'verwitwet'},
  {code: MaritalStatusEnum.divorced, title: 'geschieden'}
];
