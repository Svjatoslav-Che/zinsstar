export enum AcademicPositionEnum {
  None = 'None',
  empty = 'Bitte auswählen ...',
  Dr = 'Dr',
  DrDr = 'DrDr',
  DrMed = 'DrMed',
  Prof = 'Prof',
  ProfDr = 'ProfDr',
  ProfDrDr = 'ProfDrDr',
  ProfDrMed = 'ProfDrMed'
}

export interface AcademicTitle {
  code: AcademicPositionEnum;
  title: string;
}

export const ACADEMIC_TITLES: AcademicTitle[] = [
  {code: AcademicPositionEnum.None, title: 'Keiner'},
  {code: AcademicPositionEnum.empty, title: 'Bitte auswählen ...'},
  {code: AcademicPositionEnum.Dr, title: 'Dr.'},
  {code: AcademicPositionEnum.DrDr, title: 'Dr. Dr.'},
  {code: AcademicPositionEnum.DrMed, title: 'Dr. med.'},
  {code: AcademicPositionEnum.Prof, title: 'Prof.'},
  {code: AcademicPositionEnum.ProfDr, title: 'Prof. Dr.'},
  {code: AcademicPositionEnum.ProfDrDr, title: 'Prof. Dr. Dr.'},
  {code: AcademicPositionEnum.ProfDrMed, title: 'Prof. Dr. med.'},
];
