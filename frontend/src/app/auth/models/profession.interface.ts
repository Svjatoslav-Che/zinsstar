export enum Jobs {
  employee = 'Angestellter',
  worker = 'Arbeiter',
  trainee = 'Auszubildender',
  official = 'Beamter',
  freelancer = 'Freiberufler',
  managing_partner = 'Geschäftsführender Gesellschafter',
  housewife = 'Hausfrau',
  houseman = 'Hausmann',
  executive = 'Leitender Angestellter',
  unemployed = 'Ohne Beschäftigung',
  pensioner = 'Pensionär',
  retiree = 'Rentner',
  pupil = 'Schüler',
  other = 'Sonstige Privatpersonen',
  self_employed = 'Sonstiger Selbstständiger',
  student = 'Student',
}

export interface Profession {
  code: Jobs;
  title: string;
}

export const PROFESSIONS: Profession[] = [
  {code: Jobs.employee, title: 'Angestellter'},
  {code: Jobs.worker, title: 'Arbeiter'},
  {code: Jobs.trainee, title: 'Auszubildender'},
  {code: Jobs.official, title: 'Beamter'},
  {code: Jobs.freelancer, title: 'Freiberufler'},
  {code: Jobs.managing_partner, title: 'Geschäftsführender Gesellschafter'},
  {code: Jobs.housewife, title: 'Hausfrau'},
  {code: Jobs.houseman, title: 'Hausmann'},
  {code: Jobs.executive, title: 'Leitender Angestellter'},
  {code: Jobs.unemployed, title: 'Ohne Beschäftigung'},
  {code: Jobs.pensioner, title: 'Pensionär'},
  {code: Jobs.retiree, title: 'Rentner'},
  {code: Jobs.pupil, title: 'Schüler'},
  {code: Jobs.other, title: 'Sonstige Privatpersonen'},
  {code: Jobs.self_employed, title: 'Sonstiger Selbstständiger'},
  {code: Jobs.student, title: 'Student'}
];
