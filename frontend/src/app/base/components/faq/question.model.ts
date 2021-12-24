export enum ListCategory {
  category1 = 'Geschäftsmodell und Service',
  category2 = 'Das ZinsUnion-Konto',
  category3 = 'Onlinebanking',
  category4 = `IT-Sicherheit und Datenschutz`,
  category5 = 'Allgemeine Produktinformationen',
  category6 = `Partnerbanken`,
  category7 = `Einlagensicherung`,
  category8 = `Steuern`,
  category9 = `Risiken`,
}

export class Question {
  title: string;
  content: string;
  category: ListCategory;
  expanded?: boolean = false;
}
