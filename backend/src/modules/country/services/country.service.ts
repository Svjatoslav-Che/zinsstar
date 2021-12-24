import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from '../models/country.class';
import { Repository } from 'typeorm';
import { CountryEntity } from '../../../data/model/country.entity';
import { CountryCode } from '../models/country.code.enum';

@Injectable()
export class CountryService {
  private readonly logger = new Logger('CountryService');

  public constructor(
    @InjectRepository(CountryEntity)
    private readonly countryRepo: Repository<CountryEntity>,
  ) {}

  async findOne(id: number) {
    const country = await this.countryRepo.findOne({ id });
    if (!country) throw new NotFoundException();
    return country;
  }

  async findByCode(code: CountryCode) {
    const country = await this.countryRepo.findOne({ country_code: code });
    if (!country)
      throw new NotFoundException(`Country with code ${code} Not found`);
    return country;
  }

  async findAll() {
    return await this.countryRepo.find();
  }

  async createCountry(country: CountryEntity) {
    return await country.save();
  }

  async create(data: Country) {
    const model = new CountryEntity();
    model.name = data.name;
    model.rating_date = data.rating_date;
    model.credit_rating = data.credit_rating;
    model.country_code = data.country_code;
    model.description = data.description;
    model.tax_description = data.tax_description;
    model.guarantee_amount = data.guarantee_amount;
    const saved = await model.save();
    if (saved) return saved;
    else {
      return { message: 'Something went wrong ' };
    }
  }

  async update(data: Partial<Country>) {}

  async delete(id: number) {
    return this.countryRepo.delete(id);
  }

  async findOneByCode(code: CountryCode) {
    const country = await this.countryRepo.findOne({ country_code: code });
    if (!country) throw new NotFoundException();
    return country;
  }

  private async CreateIternally(country: CountryEntity) {
    this.logger.debug('CreateIternally');
    try {
      const saved = await country.save();
      this.logger.debug(JSON.stringify(saved));
    } catch (e) {
      this.logger.error(e);
    }
  }
}

// export class UpdateBank {
//   country_code: CountryCode;
//   withholding_tax: string;
//   tax_process: string;
// }

// export const updateCounteis: UpdateBank[] = [
//   {
//     country_code: CountryCode.BGR,
//     withholding_tax: 'In Bulgarien wird eine Quellensteuer in Hцhe von 10 % einbehalten, sofern Sie keine Ansдssigkeitsbescheinigung zur Verfьgung stellen. In diesem Fall betrдgt die Quellensteuer 5 %, die jedoch voll auf die Kapitalertragsteuer in Deutschland anrechenbar ist, sofern sie nicht im Ausland erstattungsfдhig ist',
//     tax_process: 'Alle deutschen Privatanleger unterliegen mit Ihren Zinsertrдgen in Deutschland der Kapitalertragsteuer sowie dem Solidaritдtszuschlag und ggf. der Kirchensteuer. Zinsertrдge mьssen daher in der privaten Steuererklдrung angeben werden. In Bulgarien wird auf alle Zinszahlungen eine Quellensteuer von 10 % einbehalten, sofern Kunden keine Ansдssigkeitsbescheinigung bis spдtestens sechs Wochen vor der Zinszahlung zur Verfьgung stellen. Ansonsten betrдgt die Quellensteuer 5 %, welche im Rahmen einer Steuererklдrung voll anrechenbar ist, wenn sie im Ausland nicht erstattungsfдhig ist. Die Zinszahlung und der Einbehalt der Quellensteuer erfolgen einmalig bei Fдlligkeit zum Ende der Laufzeit.'
//   },
//   {
//     country_code: CountryCode.PRT,
//     withholding_tax: 'Normalerweise wird in Portugal eine Quellensteuer in Hцhe von 28 % erhoben. Diese kann jedoch durch Vorlage eines unterschriebenen Nachweises (Formular „Ansдssigkeitsbescheinigung“) sowie des Steuerformulars "21-RFI" auf 15 % reduziert werden, vorausgesetzt, dass sie der Banco BAI Europa bis spдtestens vier Wochen vor jeder Zinszahlung zur Verfьgung gestellt werden. Diese dьrfen von Ihrem Finanzamt maximal 12 Monate vor der Zinszahlung (Fдlligkeit) ausgestellt worden sein.',
//     tax_process: 'Da auf die Zinsertrдge von Privatanlegern in Deutschland sowohl Kapitalertragsteuer als auch Solidaritдtszuschlag (plus ggf. Kirchensteuer) anfallen, mьssen alle Ertrдge – auch die aus dem Ausland – in der privaten Steuererklдrung angegeben werden. <br />\r\nIn Portugal wird des weiteren eine Quellensteuer in Hцhe von 28 % einbehalten, die jedoch bei rechtzeitiger Vorlage eines unterschriebenen Nachweises (Formular „Ansдssigkeitsbescheinigung“) sowie des Steuerformulars "21-RFI" auf 15 % reduziert wird und im Rahmen einer Steuererklдrung voll anrechenbar ist, wenn sie im Ausland nicht erstattungsfдhig ist. Diese dьrfen von Ihrem Finanzamt maximal 12 Monate vor der Zinszahlung (Fдlligkeit) ausgestellt worden sein.<br />\r\nFalls Sie mehrere Tages-oder Festgeldkonten bei der Bank haben, mьssen Sie die Unterlagen mehrmals einreichen - fьr jede von Ihnen abgeschlossene Tages-oder Festgeldanlage separat.'
//   },
//   {
//     country_code: CountryCode.MLT,
//     withholding_tax: 'In Malta fдllt keine Quellensteuer an.',
//     tax_process: 'Als Privatanleger unterliegen Sie mit Ihren Zinsertrдgen der Besteuerung im Land Ihrer Steueransдssigkeit. Die Zinsertrдge mьssen Sie in Ihrer Steuererklдrung angeben. <br />\r\nIn Malta wird fьr Personen mit dauerhaftem Wohnsitz im Ausland keine Quellensteuer auf Zinsertrдge erhoben.'
//   },
//   {
//     country_code: CountryCode.CZE,
//     withholding_tax: 'Grundsдtzlich wird eine Quellensteuer in Hцhe von 15 % erhoben, welche jedoch auf 0 % reduziert werden kann. Fьr die Reduzierung der Quellensteuer muss eine Ansдssigkeitsbescheinigung bis spдtestens vier Wochen vor der ersten Zinszahlung (Zinskapitalisierung) und bei mehrjдhrigen Fest-oder Tagesgeldkonten zusдtzlich vor der Fдlligkeit vorliegen.',
//     tax_process: 'In Deutschland unterliegt jeder Privatanleger mit dessen erwirtschafteten Zinsertrдgen der Kapitalertragssteuer sowie dem Solidaritдtszuschlag und ggf. auch der Kirchensteuer. Deshalb ist es notwendig, alle Zinsertrдge, egal ob diese im In- oder Ausland angefallen, in der privaten Einkommenssteuererklдrung anzugeben.<br />\r\nIn der Tschechischen Republik fдllt bei Abgabe einer Ansдssigkeitsbescheinigung keine Quellensteuer an; sollte eine derartige Bescheinigung nicht vorliegen, betrдgt die Quellensteuer in Tschechien 15 %.'
//   },
//   {
//     country_code: CountryCode.ITA,
//     withholding_tax: 'In Italien fдllt keine Quellensteuer an.',
//     tax_process: 'Deutsche Privatanleger unterliegen mit Ihren Zinsertrдgen in Deutschland der Kapitalertragsteuer sowie dem Solidaritдtszuschlag und ggf. der Kirchensteuer. Aus diesem Grund mьssen alle Zinsertrдge, egal ob diese im In- oder Ausland angefallen sind, in der privaten Steuererklдrung angeben werden. In Italien fдllt anders als bei anderen EU-Staaten '
//   },
//   {
//     country_code: CountryCode.LTU,
//     withholding_tax: 'In Litauen wird eine Quellensteuer in Hцhe von 15 % erhoben. Diese kann auf 10 % reduziert werden, welche voll anrechenbar auf die Kapitalertragsteuer in Deutschland, sofern sie nicht im Ausland erstattungsfдhig, sind.',
//     tax_process: 'Grundsдtzlich wird eine Quellensteuer in Hцhe von 15 % erhoben, welche jedoch auf 10 % reduziert werden kann. Fьr die Reduzierung der Quellensteuer mьssen eine Ansдssigkeitsbescheinigung sowie ein weiteres Steuerformular bis spдtestens vier Wochen vor dem Zinszahlungstermin (Fдlligkeit) vorliegen. '
//   },
//   {
//     country_code: CountryCode.FRA,
//     withholding_tax: 'In Frankreich wird keine Quellensteuer erhoben, das heiЯt, die Banque BCP S.A.S. behдlt auch keine Steuern fьr Sie ein. Zinseinkьnfte mьssen in der Steuererklдrung angegeben werden. Alle hierfьr erforderlichen Unterlagen werden Ihnen zeitnah nach der Fдlligkeit des Fest-oder Tagesgeldes in Ihrem elektronischen Postfach zur Verfьgung gestellt.',
//     tax_process: 'Als Privatanleger wird fьr Ihre Zinsertrдge eine Kapitalertragsteuer fдllig. Aus diesem Grund mьssen alle Zinsertrдge in der Steuererklдrung aufgefьhrt werden. Alle hierfьr erforderlichen Unterlagen werden Ihnen zeitnah nach der Fдlligkeit des Fest-oder Tagesgeldes in Ihrem elektronischen Postfach zur Verfьgung gestellt. In Frankreich wird keine Quellensteuer erhoben, das heiЯt, die Banque BCP S.A.S. behдlt auch keine Steuern fьr Sie ein.<br />\r\n<br />\r\nEs muss eine Kopie oder Scan eines gьltigen Ausweisdokuments mit aktuellem Adressnachweis vorliegen.'
//   },
//   {
//     country_code: CountryCode.SWE,
//     withholding_tax: 'In Schweden fдllt keine Quellensteuer an.',
//     tax_process: 'Die Zinsertrдge von deutschen Privatanlegern sind kapitalertragssteuerpflichtig und unterliegen zudem dem Solidaritдtszuschlag(+ ggf.Kirchensteuer).Deshalb mьssen Sie diese Ertrдge in Ihrer privaten Steuererklдrung angeben.< br />\r\nIn Schweden wird fьr Personen mit dauerhaftem Wohnsitz im Ausland keine Quellensteuer auf Zinsertrдge erhoben.'
//   },
//   {
//     country_code: CountryCode.EST,
//     withholding_tax: 'In Estland fдllt keine Quellensteuer an.',
//     tax_process: 'Als Privatanleger unterliegen Sie mit Ihren Zinsertrдgen der Besteuerung im Land Ihrer Steueransдssigkeit. Die Zinsertrдge mьssen Sie in Ihrer Steuererklдrung angeben. <br />\r\nIn Estland wird fьr Personen mit dauerhaftem Wohnsitz im Ausland keine Quellensteuer auf Zinsertrдge erhoben.'
//   },
//   {
//     country_code: CountryCode.DEU,
//     withholding_tax: 'Abgeltungssteuer und ggf. Kirchensteuer',
//     tax_process: 'Als Privatanleger unterliegen Sie mit Ihren Zinsertrдgen der Besteuerung im Land Ihrer Steueransдssigkeit. Die Zinsertrдge mьssen Sie in Ihrer Steuererklдrung angeben. Alle erforderlichen Unterlagen werden Ihnen rechtzeitig zur Verfьgung gestellt. '
//   },
//   {
//     country_code: CountryCode.BEL,
//     withholding_tax: 'Belgien hat eine Standard-Quellensteuer von 30%, aber aufgrund der Doppelbesteuerungsabkommen zwischen Belgien und Deutschland wird diese Quellensteuer mit den wдhrend des Erцffnungsverfahrens vorgelegten Unterlagen auf 0% reduziert. ',
//     tax_process: 'Belgien hat eine Standard-Quellensteuer von 30%, aber aufgrund der Doppelbesteuerungsabkommen zwischen Belgien und Deutschland wird diese Quellensteuer mit den wдhrend des Erцffnungsverfahrens vorgelegten Unterlagen auf 0% reduziert. Daher mьssen Sie keine zusдtzlichen Dokumente einreichen.'
//   },
//   {
//     country_code: CountryCode.HRV,
//     withholding_tax: 'Normalerweise wird in Kroatien eine Quellensteuer in Hцhe von 12 % erhoben. Diese kann jedoch durch Vorlage einer Ansдssigkeitsbescheinigung auf 0 % reduziert werden, vorausgesetzt, dass sie der Bank bis spдtestens zwei Wochen vor jeder Zinszahlung zur Verfьgung gestellt wird.',
//     tax_process: 'Da auf die Zinsertrдge von deutschen Sparern sowohl Kapitalertragsteuer als auch Solidaritдtszuschlag (plus ggf. Kirchensteuer) anfallen, mьssen alle Ertrдge aus dem In- und Ausland in der privaten Steuererklдrung aufgefьhrt werden.<br />\r\nKroatien erhebt auЯerdem eine Quellensteuer in Hцhe von 12 %, die aber bei pьnktlicher Vorlage einer Ansдssigkeitsbescheinigung entfдllt. Um die Bearbeitung durch die deutschen und im Anschluss kroatischen Steuerbehцrden zugewдhrleisten, reichen Sie bitte die jeweiligen Unterlagen erst im Zeitraum zwischen drei und sechs Monaten vor dem Zinszahlungstermin (Fдlligkeit) bei Ihrem Finanzamt ein.'
//   },
//   {
//     country_code: CountryCode.IRL,
//     withholding_tax: 'In Irland wird keine Quellensteuer erhoben, sofern das Formular “Erklдrung ьber die Nicht-Ansдssigkeit” bis spдtestens 5 Wochen vor Zinszahlung unterschrieben im Original vorliegt.',
//     tax_process: 'In Irland wird fьr alle Zinsertrдge auf Einlagen eine Quellensteuer („Deposit Interest Retention Tax“ (DIRT)) einbehalten. Diese Steuer entfдllt allerdings, wenn fristgerecht ein vollstдndig ausgefьlltes Formular zur Erklдrung, dass Sie nicht in Irland ansдssig sind („Non-resident declaration“), eingereicht wird. <br />\r\nIn der Bundesrepublik Deutschland unterliegen Sie als Privatanleger mit all Ihren Zinsertrдgen, grundsдtzlich der Kapitalertragsteuer sowie dem Solidaritдtszuschlag und ggf. der Kirchensteuer. Zinsertrдge mьssen jeweils in der persцnlichen Einkommensteuererklдrung angegeben werden.'
//   },
//   {
//     country_code: CountryCode.ESP,
//     withholding_tax: 'In Spanien wird eine Quellensteuer in Hцhe von 19 % auf Ihre Zinsertrдge einbehalten, sofern Sie das spanische Steuerformular („Declaraciуn de Residencia Fiscal“) nicht zur Verfьgung stellen. Dann reduziert sich die Quellensteuer auf 0 %.  ',
//     tax_process: 'Da Sie als deutscher Privatanleger mit Ihren Zinsertrдgen der Kapitalertragssteuer sowie dem Solidaritдtszuschlag und ggf. der Kirchensteuer unterliegen, sind Sie verpflichtet, alle Zinsertrдge aus dem In- und Ausland in Ihrer Steuererklдrung aufzufьhren. Die dafьr benцtigten Unterlagen werden Ihnen natьrlich rechtzeitig zur Verfьgung gestellt.<br />\r\nSpanien erhebt eine Quellensteuer von 19 %, der Sie jedoch entgehen, indem Sie das spanische Steuerformular („Declaraciуn de Residencia Fiscal“) im Rahmen der Kontoerцffnung unterschreiben und als Scan oder im Original einreichen.'
//   }
// ];

// export const COUNTRIES2: CountryModel[] = [
//   {
//     id: "319709217",
//     country_code: CountryCode.SWE,
//     name: "Schweden",
//     description: "Schweden ist eine parlamentarische Demokratie mit monarchischem Oberhaupt und liegt in Nordeuropa. Das Land ist seit 1995 Mitglied der Europäischen Union, besitzt jedoch eine landeseigene Währung, die schwedische Krone (SEK). Schweden hat ein hohes Pro-Kopf-Einkommen und eine gesunde Wirtschaftspolitik, weswegen es von führenden Ratingagenturen mit der Bonitätsbewertung AAA ausgezeichnet wird.",
//     tax: 0,
//     tax_description: "In Schweden fällt keine Quellensteuer an.",
//     credit_rating: "AAA",
//     guarantee_amount: 1050000,
//     guarantee_currency: Currency.SEK,
//     rating_date: "2020-02-14"
//   },
//   {
//     id: "318978257",
//     country_code: CountryCode.BEL,
//     name: "Belgien",
//     description: "Das Königreich Belgien mit rund 11 Millionen Einwohnern ist ein Staat Westeuropas mit Brüssel als Hauptstadt. Seit 1957 ist das Land Gründungsmitglied der damals noch bestehenden Europäischen Wirtschaftsgemeinschaft, der heutigen Europäischen Union. Dank seiner Lage im Herzen Europas haben nicht nur mehrere europäische Institutionen wie die Kommission und das Europäische Parlament ihren Sitz in Brüssel, sondern Belgien ist auch einer der größten Exporteure von Waren weltweit.",
//     tax: 30,
//     tax_description: "In Belgien wird eine Quellensteuer in Höhe von 30 % einbehalten, sofern Sie der Bank nicht das Steuerformular („Quellensteuerbefreiung für gebietsfremde Sparer“) zur Verfügung stellen. Dann ist die Quellensteuer auf 0 % reduzierbar. Das Formular stellen wir Ihnen im Rahmen der Kontoeröffnung bereits mit Ihren Daten vorbefüllt im Onlinebanking zur Verfügung. Sie senden es dann unterschrieben und im Original an uns zurück.",
//     credit_rating: "AA",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2020-03-20"
//   },
//   {
//     id: "319709097",
//     country_code: CountryCode.NOR,
//     name: "Norwegen",
//     description: "Norwegen, mit rd. 5 Mio. Einwohnern, gehört dem Europäischen Wirtschaftsraum (EWR) an. Das Land ist eines der wohlhabensten weltweit, sogar noch vor den USA oder Deutschland und nach Island das Land mit dem höchsten Lebensstandard. Seinen Reichtum verdankt das kleine Land vor allem den reichen Ölvorkommen, die Ende der 60iger Jahre des letzten Jahrhunderts entdeckt wurden. Der Staat hat keine Schulden, sondern einen der größten Pensionsfonds der Welt. Als eines der wenigen Länder weltweit kann Norwegen das höchstmögliche Rating (AAA) bei allen drei großen Rating-Agenturen vorweisen.",
//     tax: 0,
//     tax_description: "In Norwegen fällt keine Quellensteuer an.",
//     credit_rating: "AAA",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2018-09-21"
//   },
//   {
//     id: "167069468",
//     country_code: CountryCode.CZE,
//     name: "Tschechische Republik",
//     description: "Die Tschechische Republik liegt in der Mitte Europas und ist bereits seit über einem Jahrzehnt (Mai 2004) Mitglied der Europäischen Union, wodurch der barrierefreie Zugang zum EU-Markt sichergestellt ist. Gemessen an ihrer Wirtschaftskraft sind beide Länder sehr hoch entwickelte Industriestaaten und zählen zu den zentralen Volkswirtschaften Mittel- und Osteuropas. Die Staatsverschuldung Tschechiens weist im Verhältnis zum Bruttoinlandsprodukt mit die niedrigsten Quoten in der gesamten EU auf und ist niedriger als die Staatsverschuldung Deutschlands. Die Tschechische Republik hat von den größten Ratingagenturen jeweils ein Investmentgrade-Rating mit stabilen Aussichten erhalten. Das tschechische Banksystem gilt als gesund und stabil.",
//     tax: 15,
//     tax_description: "Grundsätzlich wird eine Quellensteuer in Höhe von 15 % erhoben, welche jedoch auf 0 % reduziert werden kann. Für die Reduzierung der Quellensteuer muss eine Ansässigkeitsbescheinigung bis spätestens vier Wochen vor der ersten Zinszahlung (Zinskapitalisierung) und bei mehrjährigen Festgeldprodukten zusätzlich vor der Fälligkeit vorliegen.",
//     credit_rating: "AA-",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2020-05-01"
//   },
//   {
//     id: "262535503",
//     country_code: CountryCode.LVA,
//     name: "Lettland",
//     description: "Lettland, im Zentrum des Baltikums gelegen, ist eine seit 1991 unabhängige parlamentarische Demokratie, die seit 2004 Mitglied der Europäischen Union (EU) und seit 2014 Teil der Eurozone ist. Die lettische Wirtschaft zeichnet sich durch eine hohe Unternehmensfreundlichkeit aus, was sich auch an einer Vielzahl erfolgreicher Start-ups, insbesondere in der Hauptstadt Riga, bemerkbar macht. Das Wirtschaftswachstum Lettlands ist stabil und die Staatsverschuldung ist mit 37,9 % des BIP (Stand: 2016) im europäischen Vergleich sehr niedrig. Kulturell besticht Lettland durch starke nordeuropäische Einflüsse, hanseatische Architektur und seine berühmte Musikfolklore.",
//     tax: 20,
//     tax_description: "In Lettland wird für Zinszahlungen ab dem 1. Januar 2018 eine Quellensteuer in Höhe von 20 % erhoben, die jedoch reduziert werden kann. Für die Reduzierung der Quellensteuer auf 10 % muss der Bank eine Ansässigkeitsbescheinung bis spätestens vier Wochen vor Fälligkeit vorliegen. Diese ist dann voll auf die Kapitalertragsteuer in Deutschland anrechenbar.",
//     credit_rating: "A+",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2020-02-21"
//   },
//   {
//     id: "19831080",
//     country_code: CountryCode.ITA,
//     name: "Italien",
//     description: "Italien ist eine Republik in Südeuropa, gehört zu den größten Volkswirtschaften der Welt und zählt laut Index für menschliche Entwicklung zu den sehr hoch entwickelten Staaten. Italien ist Gründungsmitglied der EU und seit 2002 ist der Euro gesetzliches Zahlungsmittel. Für Italien ist Deutschland sowohl in punkto Export als auch Import der wichtigste Handelspartner.",
//     tax: 0,
//     tax_description: "In Italien fällt keine Quellensteuer an.",
//     credit_rating: "BBB",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2020-04-24"
//   },
//   {
//     id: "234919431",
//     country_code: CountryCode.EST,
//     name: "Estland",
//     description: "Estland, nördlichster Staat des Baltikums, ist eine seit 1991 unabhängige parlamentarische Demokratie, die seit 2004 Mitglied der Europäischen Union (EU) und seit 2011 in der Eurozone ist. Seit seiner Unabhängigkeit folgt Estland einem skandinavischen Vorbild, geprägt durch flache Hierarchien, moderne Kommunikationstechnologien und hohe Transparenz. Mit seinem starken IT Sektor ist Estland führend im Bereich e-Government. Das Wirtschaftswachstum Estlands ist stabil – die Staatsverschuldung zählt mit 9,65 % des BIP (Stand: 2016) zu den niedrigsten in der gesamten EU.",
//     tax: 0,
//     tax_description: "In Estland fällt keine Quellensteuer an.",
//     credit_rating: "AA-",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2020-02-28"
//   },
//   {
//     id: "319709115",
//     country_code: CountryCode.POL,
//     name: "Polen",
//     description: "Die Republik Polen liegt in Mitteleuropa und ist seit 2004 Mitglied der Europäischen Union. Die Landeswährung ist Zloty (PLN). Gemessen an Bruttoinlandsprodukt, Kaufkraft und Index für menschliche Entwicklung zählt Polen zur internationalen Topliga. Die Staatsverschuldung ist mit die niedrigste in der Europäischen Union und liegt deutlich unter dem Niveau Deutschlands. Polen wird derzeit von allen drei großen Rating-Agenturen mit Investment Grade Rating (A) bewertet. Das Banksystem in Polen gilt als modern: die fortschreitende Privatisierung, ausländische Investitionen und umfangreiche Reformen haben den heutigen polnischen Kapitalmarkt wesentlich gestaltet.",
//     tax: 19,
//     tax_description: "In Polen wird auf alle Zinszahlungen eine Quellensteuer von 19 % einbehalten, sofern Kunden nicht bis spätestens sechs Wochen vor Zinszahlung eine gültige Ansässigkeitsbescheinigung einreichen. Ansonsten beträgt die Quellensteuer 5 %, welche voll anrechenbar auf die Kapitalertragsteuer in Deutschland ist.",
//     credit_rating: "A-",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2020-04-10"
//   },
//   {
//     id: "3991127",
//     country_code: CountryCode.PRT,
//     name: "Portugal",
//     description: "Portugal liegt im Westen der Iberischen Halbinsel und zählt zu den meistbesuchten Ländern der Welt. Das südeuropäische Land ist seit 1986 EU-Mitglied, Gründungsmitglied der NATO und seit 2002 ist der Euro in Portugal gesetzliches Zahlungsmittel. Neben dem Tourismus ist der Dienstleistungssektor die stärkste Einnahmequelle. Portugal lebt vor allem vom Handel mit seinen EU-Partnern.",
//     tax: 28,
//     tax_description: "In Portugal wird eine Quellensteuer in Höhe von 28 % erhoben. Diese kann jedoch durch Vorlage einer Ansässigkeitsbescheinigung sowie des portugiesischen Steuerformulars „21-RFI“ auf 15 % reduziert werden, vorausgesetzt, dass die Dokumente bis spätestens vier Wochen vor jeder Zinszahlung zur Verfügung gestellt werden.",
//     credit_rating: "BBB",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2020-04-17"
//   },
//   {
//     id: "264560351",
//     country_code: CountryCode.LTU,
//     name: "Litauen",
//     description: "Litauen, südlichster und größter Staat des Baltikums, ist eine seit 1990 unabhängige semipräsidentielle Demokratie. Wie das übrige Baltikum orientiert sich Litauen seit der Unabhängigkeit politisch und wirtschaftlich stark an Europa und ist seit 2004 Mitglied der Europäischen Union (EU) sowie seit 2015 Teil der Eurozone. Das Wirtschaftswachstum Litauens ist stabil und die Staatsverschuldung ist mit 40,2 % des BIP (Stand: 2016) im europäischen Vergleich sehr niedrig. Kulturell besticht Litauen bedingt durch seine geographische Lage und lange Geschichte durch eine Vielzahl verschiedener Einflüsse.",
//     tax: 15,
//     tax_description: "In Litauen wird eine Quellensteuer in Höhe von 15 % erhoben, welche jedoch auf 10 % reduziert werden kann. Für die Reduzierung der Quellensteuer müssen eine Ansässigkeitsbescheinigung sowie ein weiteres Steuerformular bis spätestens vier Wochen vor dem Zinszahlungstermin (Fälligkeit) vorliegen.",
//     credit_rating: "A+",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2020-02-21"
//   },
//   {
//     id: "1063404",
//     country_code: CountryCode.BGR,
//     name: "Bulgarien",
//     description: "Die Republik Bulgarien liegt im Osten der Balkanhalbinsel und ist seit 2007 Mitglied der Europäischen Union. Das Land ist noch nicht der Euro-Zone angeschlossen, ist aber auf dem Weg dorthin. Die Landeswährung ist der Bulgarische Lew (BGN), der an den Euro gekoppelt ist. Bulgarien weist eine der niedrigsten Staatsverschuldungen aller EU-Mitgliedsstaaten auf.",
//     tax: 10,
//     tax_description: "In Bulgarien wird eine Quellensteuer in Höhe von 10 % einbehalten, sofern Sie keine Ansässigkeitsbescheinigung zur Verfügung stellen. In diesem Fall beträgt die Quellensteuer 5 %, die jedoch voll auf die Kapitalertragsteuer anrechenbar ist, sofern sie nicht im Ausland erstattungsfähig ist.",
//     credit_rating: "BBB",
//     guarantee_amount: 196000,
//     guarantee_currency: Currency.BGN,
//     rating_date: "2019-11-29"
//   },
//   {
//     id: "214139962",
//     country_code: CountryCode.AUT,
//     name: "Österreich",
//     description: "Die Republik Österreich ist ein demokratischer und föderaler Binnenstaat in Mitteleuropa, der seit 1995 zur EU gehört und Gründungsmitglied der OECD ist. Mit einem höheren Bruttoinlandsprodukt pro Kopf als Deutschland, ist Österreich eins der wohlhabendsten Länder der EU. Die österreichische Wirtschaft zeichnet sich vor allem durch den hohen Anteil erneuerbarer Energie an der Energienutzung aus, die insbesondere durch die Nutzung der Wasserkraft in den Alpen begründet wird.\r\n\r\nDas Land hat hohe Standards bezüglich Bankgeheimnis, Compliance und Investorenschutz und genießt ein Aa1/AA+ Finanzrating.  Der Bankplatz Österreich ist durch strenge gesetzliche Vorgaben geregelt, deren Einhaltung laufend durch die Aufsichtsbehörden geprüft wird.",
//     tax: 25,
//     tax_description: "In Österreich wird eine Quellensteuer in Höhe von 25 % erhoben, die jedoch bei rechtzeitiger Vorlage der „Erklärung natürlicher Personen für Zwecke innerstaatlicher Quellensteuerentlastung\" entfällt. Diese Erklärung stellen wir Ihnen mit Bestätigung der Anlage vorausgefüllt im Onlinebanking zur Verfügung. Das Dokument ist ab Unterschriftsetzung des Finanzamtes fünf Jahre - und somit auch für weitere Anlagen in diesem Zeitraum - gültig.",
//     credit_rating: "AA+",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2019-03-15"
//   },
//   {
//     id: "309952954",
//     country_code: CountryCode.MLT,
//     name: "Malta",
//     description: "Malta ist Mitglied der Europäischen Union und – seit 2008 – auch der Eurozone. Malta wird vom Internationalen Währungsfonds als moderne Volkswirtschaft und von der Weltbank als ein Land mit hohem Einkommen eingestuft. Das Weltwirtschaftsforum beschreibt Malta als besonders innovationsorientiert.\r\nDie Stärken der maltesischen Wirtschaft liegen in der strategischen Lage in der Mitte des Mittelmeers, im Dreieck zwischen Europa, Nordafrika und dem Nahen Osten, der offenen Marktwirtschaft, der mehrsprachigen Bevölkerung (88% der Malteser sprechen Englisch) und den gut entwickelten Finanz- sowie Informations- und Kommunikationstechnologiezentren.\r\n\r\nAnfang 2018 lag das Rating von Standard & Poor’s für Malta bei A- und Moody’s bei A3. Der öffentliche Schuldenstand Maltas ist mit 69,8% des BIP niedriger als der von Deutschland, Frankreich, dem Vereinigten Königreich und Österreich.",
//     tax: 0,
//     tax_description: "In Malta fällt keine Quellensteuer an.",
//     credit_rating: "A-",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2020-03-13"
//   },
//   {
//     id: "277501052",
//     country_code: CountryCode.NLD,
//     name: "Niederlande",
//     description: "<p>....</p>",
//     credit_rating: "AAA",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     tax: 0,
//     tax_description: "",
//     rating_date: "2018-11-16"
//   },
//   {
//     id: "119056336",
//     country_code: CountryCode.HRV,
//     name: "Kroatien",
//     description: "Die Republik Kroatien ist ein Staat in Mitteleuropa, seit dem 1. Juli 2013 Mitglied der Europäischen Union und hat die Landeswährung Kuna (HRK). Die kroatische Wirtschaft befindet sich seit Anfang 2015 wieder im Aufschwung und wurde durch die im Januar 2016 verabschiedeten Strukturreformen weiter gestärkt.\r\n\r\nDemnach sind die EU-Prognosen für die Wirtschaftsaussichten in Kroatien positiv, was nicht zuletzt auf deutliche Zuwächse im Handel mit Deutschland zurückzuführen ist.",
//     tax: 12,
//     tax_description: "Normalerweise wird in Kroatien eine Quellensteuer in Höhe von 12 % erhoben. Diese kann jedoch durch Vorlage einer Ansässigkeitsbescheinigung auf 0 % reduziert werden, vorausgesetzt, dass sie bis spätestens vier Wochen vor jeder Zinszahlung zur Verfügung gestellt wird.",
//     credit_rating: "BBB-",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2019-03-22"
//   },
//   {
//     id: "319709049",
//     country_code: CountryCode.LUX,
//     name: "Luxemburg",
//     credit_rating: "AAA",
//     tax_description: "",
//     description: "",
//     tax: 0,
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2019-03-15"
//   },
//   {
//     id: "319708952",
//     country_code: CountryCode.GRC,
//     name: "Griechenland",
//     description: "Griechenland ist ein Staat im Südosten Europas mit rund 11 Millionen Einwohnern. Das Land mit seinen vielen Inseln erstreckt sich über 131.000 km² und hat eine Bevölkerungsdichte von 85 Einwohnern pro km².Seit der Antike war Griechenland eine fortschrittliche Gesellschaft und gilt als die Wiege der Demokratiebewegung. Gleichzeitig ist sie aber auch eng mit der europäischen Schuldenkrise verbunden. Tatsächlich hat die Wirtschaft eine schwere Rezession durchlebt: Zwischen 2009 und 2015 sank das Bruttoinlandsprodukt um 25 Prozent. Griechenland hat jedoch Disziplin bei der Umsetzung des Umstrukturierungsprogramms bewiesen und Reformen durchgeführt, die bereits Anzeichen einer Erholung erkennen lassen. Im Jahr 2018 wuchs die griechische Wirtschaft mit einer geschätzten Rate von 2,0%. Wie im kürzlich veröffentlichten IWF-Bericht erwähnt, befindet sich Griechenland nun in einer Phase des Wirtschaftswachstums, die es zu den leistungsfähigsten Ländern der Eurozone macht. Griechenland wurde kürzlich von Moody's aufgerüstet.",
//     tax: 15,
//     tax_description: "In Griechenland wird eine nicht reduzierte Quellensteuer in Höhe von 15% einbehalten.",
//     credit_rating: "BB-",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2020-04-24"
//   },
//   {
//     id: "35740037",
//     country_code: CountryCode.DEU,
//     name: "Deutschland", tax: 0,
//     description: "Die Bundesrepublik Deutschland ist die mit großem Abstand stärkste Handelsnation der Mitgliedstaaten der Europäischen Union. Deutschland kann als eines der wenigen Länder weltweit das bestmögliche Rating AAA (höchste Bonität) bei allen drei großen Rating-Agenturen vorweisen.",
//     tax_description: "Für Privatkunden gilt: Abgeltungssteuer und ggf. Kirchensteuer. Ein Freistellungsauftrag kann beantragt werden, das Formular „Freistellungsauftrag“ stellen wir Ihnen im Rahmen der Kontoeröffnung zur Verfügung. Für Geschäftskunden gilt: Gewerblich tätige, in Deutschland ansässige (Sitz/Ort der Geschäftsleitung im Inland) Kapitalgesellschaft ohne Auslandsbetriebsstätten im Sitzstaat der Bank sind grundsätzlich in Deutschland steuerpflichtig. Sämtliche Erträge sind in der Steuererklärung anzugeben.",
//     credit_rating: "AAA",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2020-04-03"
//   },
//   {
//     id: "287343407",
//     country_code: CountryCode.CYP,
//     name: "Zypern",
//     description: "Die im östlichen Mittelmeer gelegene Insel Zypern ist seit 1974 politisch in einen zypriotischen Teil im Süden und in einen türkischen Teil im Norden unterteilt.\r\nBei dem zypriotischen Teil handelt es sich um eine unabhängige Präsidialrepublik, die seit 2004 Mitglied der Europäischen Union (EU) und seit 2008 Teil der Eurozone ist. Auch die Hauptstadt Nikosia ist von der Zweiteilung betroffen.\r\n\r\nDie wirtschaftliche Situation der Republik Zypern verbessert sich seit der Krise im Jahr 2013 kontinuierlich. So wächst die zypriotische Wirtschaft seit 2015 um durchschnittlich mehr als 2 % pro Jahr und die Staatsverschuldung wird 2017 relativ zum Bruttoinlandsprodukt erstmals seit 2008 abnehmen.\r\n\r\nKulturell ist Zypern historisch bedingt griechisch geprägt. Gleichberechtigte Amtssprache neben Griechisch ist Türkisch.",
//     tax: 0,
//     tax_description: "In Zypern fällt keine Quellensteuer an.",
//     credit_rating: "BBB-",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2020-03-06"
//   },
//   {
//     id: "576363502",
//     country_code: CountryCode.SPT,
//     name: "Portugal",
//     description: "Portugal liegt im Westen der Iberischen Halbinsel und zählt zu den meistbesuchten Ländern der Welt. Das südeuropäische Land ist seit 1986 EU-Mitglied, Gründungsmitglied der NATO und seit 2002 ist der Euro in Portugal gesetzliches Zahlungsmittel. Neben dem Tourismus ist der Dienstleistungssektor die stärkste Einnahmequelle. Portugal lebt vor allem vom Handel mit seinen EU-Partnern.",
//     tax: 19,
//     tax_description: "In Spanien wird auf alle Zinszahlungen eine Quellensteuer von 19 % einbehalten, sofern Kunden nicht bis spätestens vier Wochen vor Zinszahlung eine gültige Ansässigkeitsbescheinigung einreichen. Ansonsten beträgt die Quellensteuer 0 % für Kunden aus Deutschland, welche voll anrechenbar auf die Kapitalertragsteuer in Deutschland ist, bzw. 5 % für Kunden aus Österreich.",
//     credit_rating: "BBB",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2020-04-17"
//   },
//   {
//     id: "210825763",
//     country_code: CountryCode.FRA,
//     name: "Frankreich",
//     description: "Die Französische Republik ist ein demokratischer Zentralstaat in Westeuropa mit Überseeinseln und –gebieten auf verschiedenen Kontinenten.\r\nFrankreich ist die sechstgrößte Volkswirtschaft der Welt und neben Deutschland das wichtigste Industrieland Europas. Das Land gehört bereits seit 1999 zur Eurozone und die französische Bonität wird derzeit von führenden Ratingagenturen mit der Note “AA” bewertet, was einem Investmentgrade-Rating mit stabilen Aussichten entspricht.",
//     tax: 0,
//     tax_description: "In Frankreich wird für Personen mit dauerhaftem Wohnsitz im Ausland keine Quellensteuer auf Zinserträge erhoben.",
//     credit_rating: "AA",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2020-04-03"
//   },
//   {
//     id: "48025021",
//     country_code: CountryCode.IRL,
//     name: "Irland",
//     description: "Irland ist ein souveräner und unabhängiger Staat, der 26 Regionen auf der geographischen Insel Irland umspannt. Gemäß der letzten Volkszählung vom April 2011 beträgt die Gesamtbevölkerung Irlands etwas über 4,5 Millionen, der höchste Stand seit 1861.\r\nIrland wurde am 1. Januar 1973 Mitglied im Europäischen Wirtschaftsraum (EWR) und hat aktiv an der Entwicklung dessen mitgewirkt, was heute die Europäische Union (EU) ist. Seit 1999 ist die Währung Euro.\r\nIrlands anhaltende wirtschaftliche Erholung ist im Wesentlichen zurückzuführen auf gut ausgebildete und flexible Arbeitskräfte; Maßnahmen der Regierung zur makroökonomischen Stabilisierung und zur Anziehung ausländischer Direktinvestitionen; und auf die Mitgliedschaft in der Europäischen Union, die mittlerweile einen Markt für mehr als 500 Millionen Menschen umspannt.",
//     tax: 37,
//     tax_description: "In Irland wird keine Quellensteuer erhoben, sofern das Formular “Erklärung über die Nicht-Ansässigkeit” bis spätestens 5 Wochen vor Zinszahlung unterschrieben im Original vorliegt.",
//     credit_rating: "AA-",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2019-11-29"
//   },
//   {
//     id: "319709199",
//     country_code: CountryCode.ESP,
//     name: "Spanien",
//     description: "Das Königreich Spanien liegt im Südwesten von Europa auf der Iberischen Halbinsel und grenzt an Frankreich, Portugal, Andorra und Marokko. Das Land ist seit 1986 Mitglied der Europäischen Union und führte wie Deutschland 2002 den Euro als Zahlungsmittel ein.\r\n\r\nDa Spanien das zweitbeliebteste Urlaubsland weltweit ist, stellt der Tourismus den größten Teil der spanischen Wirtschaftskraft dar. Darauf folgt der Industriesektor und der landwirtschaftliche Sektor.\r\n\r\nDie spanische Wirtschaft befindet sich nach der Rezession 2011 wieder in einem stetig anhaltenden Aufschwung und gilt als eine der am schnellsten und nachhaltigsten wachsenden Volkswirtschaften innerhalb der Europäischen Union.",
//     tax: 19,
//     tax_description: "Der Quellensteuersatz von 19 % auf Zinserträge in Spanien beträgt für Kunden aus Deutschland 0 % und für Kunden aus Österreich 5 %, da Sie im Rahmen Ihrer ersten Kontoeröffnung bei jeder unserer Partnerbanken in Spanien bereits das spanische Steuerformular („Declaración de Residencia Fiscal\") zur Verfügung stellen müssen. Dieses Formular reicht zur Reduzierung der Quellensteuer aus und muss nur einmal pro Person und pro Partnerbank eingereicht werden.",
//     credit_rating: "A",
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: "2019-09-20"
//   }
// ]
// export const COUNTRIESx: CountryModel[] = [
//   {
//     id: '319709217',
//     country_code: CountryCode.SWE,
//     name: 'Schweden',
//     description: 'Schweden ist eine parlamentarische Demokratie mit monarchischem Oberhaupt und liegt in Nordeuropa. Das Land ist seit 1995 Mitglied der Europäischen Union, besitzt jedoch eine landeseigene Währung, die schwedische Krone (SEK). Schweden hat ein hohes Pro-Kopf-Einkommen und eine gesunde Wirtschaftspolitik, weswegen es von führenden Ratingagenturen mit der Bonitätsbewertung AAA ausgezeichnet wird.',
//     tax: 0,
//     tax_description: 'In Schweden fällt keine Quellensteuer an.',
//     credit_rating: 'AAA',
//     guarantee_amount: 1050000,
//     guarantee_currency: Currency.SEK,
//     rating_date: '2020-02-14'
//   },
//   {
//     id: '318978257',
//     country_code: CountryCode.BEL,
//     name: 'Belgien',
//     description: 'Das Königreich Belgien mit rund 11 Millionen Einwohnern ist ein Staat Westeuropas mit Brüssel als Hauptstadt. Seit 1957 ist das Land Gründungsmitglied der damals noch bestehenden Europäischen Wirtschaftsgemeinschaft, der heutigen Europäischen Union. Dank seiner Lage im Herzen Europas haben nicht nur mehrere europäische Institutionen wie die Kommission und das Europäische Parlament ihren Sitz in Brüssel, sondern Belgien ist auch einer der größten Exporteure von Waren weltweit.',
//     tax: 30,
//     tax_description: 'In Belgien wird eine Quellensteuer in Höhe von 30 % einbehalten, sofern Sie der Bank nicht das Steuerformular („Quellensteuerbefreiung für gebietsfremde Sparer“) zur Verfügung stellen. Dann ist die Quellensteuer auf 0 % reduzierbar. Das Formular stellen wir Ihnen im Rahmen der Kontoeröffnung bereits mit Ihren Daten vorbefüllt im Onlinebanking zur Verfügung. Sie senden es dann unterschrieben und im Original an uns zurück.',
//     credit_rating: 'AA',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2020-03-20'
//   },
//   {
//     id: '319709097',
//     country_code: CountryCode.NOR,
//     name: 'Norwegen',
//     description: 'Norwegen, mit rd. 5 Mio. Einwohnern, gehört dem Europäischen Wirtschaftsraum (EWR) an. Das Land ist eines der wohlhabensten weltweit, sogar noch vor den USA oder Deutschland und nach Island das Land mit dem höchsten Lebensstandard. Seinen Reichtum verdankt das kleine Land vor allem den reichen Ölvorkommen, die Ende der 60iger Jahre des letzten Jahrhunderts entdeckt wurden. Der Staat hat keine Schulden, sondern einen der größten Pensionsfonds der Welt. Als eines der wenigen Länder weltweit kann Norwegen das höchstmögliche Rating (AAA) bei allen drei großen Rating-Agenturen vorweisen.',
//     tax: 0,
//     tax_description: 'In Norwegen fällt keine Quellensteuer an.',
//     credit_rating: 'AAA',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2018-09-21'
//   },
//   {
//     id: '167069468',
//     country_code: CountryCode.CZE,
//     name: 'Tschechische Republik',
//     description: 'Die Tschechische Republik liegt in der Mitte Europas und ist bereits seit über einem Jahrzehnt (Mai 2004) Mitglied der Europäischen Union, wodurch der barrierefreie Zugang zum EU-Markt sichergestellt ist. Gemessen an ihrer Wirtschaftskraft sind beide Länder sehr hoch entwickelte Industriestaaten und zählen zu den zentralen Volkswirtschaften Mittel- und Osteuropas. Die Staatsverschuldung Tschechiens weist im Verhältnis zum Bruttoinlandsprodukt mit die niedrigsten Quoten in der gesamten EU auf und ist niedriger als die Staatsverschuldung Deutschlands. Die Tschechische Republik hat von den größten Ratingagenturen jeweils ein Investmentgrade-Rating mit stabilen Aussichten erhalten. Das tschechische Banksystem gilt als gesund und stabil.',
//     tax: 15,
//     tax_description: 'Grundsätzlich wird eine Quellensteuer in Höhe von 15 % erhoben, welche jedoch auf 0 % reduziert werden kann. Für die Reduzierung der Quellensteuer muss eine Ansässigkeitsbescheinigung bis spätestens vier Wochen vor der ersten Zinszahlung (Zinskapitalisierung) und bei mehrjährigen Festgeldprodukten zusätzlich vor der Fälligkeit vorliegen.',
//     credit_rating: 'AA-',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2020-05-01'
//   },
//   {
//     id: '19831080',
//     country_code: CountryCode.ITA,
//     name: 'Italien',
//     description: 'Italien ist eine Republik in Südeuropa, gehört zu den größten Volkswirtschaften der Welt und zählt laut Index für menschliche Entwicklung zu den sehr hoch entwickelten Staaten. Italien ist Gründungsmitglied der EU und seit 2002 ist der Euro gesetzliches Zahlungsmittel. Für Italien ist Deutschland sowohl in punkto Export als auch Import der wichtigste Handelspartner.',
//     tax: 0,
//     tax_description: 'In Italien fällt keine Quellensteuer an.',
//     credit_rating: 'BBB',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2020-04-24'
//   },
//   {
//     id: '234919431',
//     country_code: CountryCode.EST,
//     name: 'Estland',
//     description: 'Estland, nördlichster Staat des Baltikums, ist eine seit 1991 unabhängige parlamentarische Demokratie, die seit 2004 Mitglied der Europäischen Union (EU) und seit 2011 in der Eurozone ist. Seit seiner Unabhängigkeit folgt Estland einem skandinavischen Vorbild, geprägt durch flache Hierarchien, moderne Kommunikationstechnologien und hohe Transparenz. Mit seinem starken IT Sektor ist Estland führend im Bereich e-Government. Das Wirtschaftswachstum Estlands ist stabil – die Staatsverschuldung zählt mit 9,65 % des BIP (Stand: 2016) zu den niedrigsten in der gesamten EU.',
//     tax: 0,
//     tax_description: 'In Estland fällt keine Quellensteuer an.',
//     credit_rating: 'AA-',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2020-02-28'
//   },
//   {
//     id: '319709115',
//     country_code: CountryCode.POL,
//     name: 'Polen',
//     description: 'Die Republik Polen liegt in Mitteleuropa und ist seit 2004 Mitglied der Europäischen Union. Die Landeswährung ist Zloty (PLN). Gemessen an Bruttoinlandsprodukt, Kaufkraft und Index für menschliche Entwicklung zählt Polen zur internationalen Topliga. Die Staatsverschuldung ist mit die niedrigste in der Europäischen Union und liegt deutlich unter dem Niveau Deutschlands. Polen wird derzeit von allen drei großen Rating-Agenturen mit Investment Grade Rating (A) bewertet. Das Banksystem in Polen gilt als modern: die fortschreitende Privatisierung, ausländische Investitionen und umfangreiche Reformen haben den heutigen polnischen Kapitalmarkt wesentlich gestaltet.',
//     tax: 19,
//     tax_description: 'In Polen wird auf alle Zinszahlungen eine Quellensteuer von 19 % einbehalten, sofern Kunden nicht bis spätestens sechs Wochen vor Zinszahlung eine gültige Ansässigkeitsbescheinigung einreichen. Ansonsten beträgt die Quellensteuer 5 %, welche voll anrechenbar auf die Kapitalertragsteuer in Deutschland ist.',
//     credit_rating: 'A-',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2020-04-10'
//   },
//   {
//     id: '3991127',
//     country_code: CountryCode.PRT,
//     name: 'Portugal',
//     description: 'Portugal liegt im Westen der Iberischen Halbinsel und zählt zu den meistbesuchten Ländern der Welt. Das südeuropäische Land ist seit 1986 EU-Mitglied, Gründungsmitglied der NATO und seit 2002 ist der Euro in Portugal gesetzliches Zahlungsmittel. Neben dem Tourismus ist der Dienstleistungssektor die stärkste Einnahmequelle. Portugal lebt vor allem vom Handel mit seinen EU-Partnern.',
//     tax: 28,
//     tax_description: 'In Portugal wird eine Quellensteuer in Höhe von 28 % erhoben. Diese kann jedoch durch Vorlage einer Ansässigkeitsbescheinigung sowie des portugiesischen Steuerformulars „21-RFI“ auf 15 % reduziert werden, vorausgesetzt, dass die Dokumente bis spätestens vier Wochen vor jeder Zinszahlung zur Verfügung gestellt werden.\r\n\r\nAusnahme bei der Haitong Bank, S.A., Sucursal en España: Da es sich bei der Haitong Bank, S.A., Sucursal en España um die spanische Niederlassung der Haitong Bank S.A. handelt, gilt für diese Bank Folgendes: Der Quellensteuersatz von 19 % auf Zinserträge in Spanien beträgt für Kunden aus Deutschland 0 % und für Kunden aus Österreich 5 %, da Sie im Rahmen Ihrer ersten Kontoeröffnung bei jeder unserer Partnerbanken in Spanien bereits das spanische Steuerformular („Declaración de Residencia Fiscal") zur Verfügung stellen müssen. Dieses Formular reicht zur Reduzierung der Quellensteuer aus und muss nur einmal pro Person und pro Partnerbank eingereicht werden.',
//     credit_rating: 'BBB',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2020-04-17'
//   },
//   {
//     id: '264560351',
//     country_code: CountryCode.LTU,
//     name: 'Litauen',
//     description: 'Litauen, südlichster und größter Staat des Baltikums, ist eine seit 1990 unabhängige semipräsidentielle Demokratie. Wie das übrige Baltikum orientiert sich Litauen seit der Unabhängigkeit politisch und wirtschaftlich stark an Europa und ist seit 2004 Mitglied der Europäischen Union (EU) sowie seit 2015 Teil der Eurozone. Das Wirtschaftswachstum Litauens ist stabil und die Staatsverschuldung ist mit 40,2 % des BIP (Stand: 2016) im europäischen Vergleich sehr niedrig. Kulturell besticht Litauen bedingt durch seine geographische Lage und lange Geschichte durch eine Vielzahl verschiedener Einflüsse.',
//     tax: 15,
//     tax_description: 'In Litauen wird eine Quellensteuer in Höhe von 15 % erhoben, welche jedoch auf 10 % reduziert werden kann. Für die Reduzierung der Quellensteuer müssen eine Ansässigkeitsbescheinigung sowie ein weiteres Steuerformular bis spätestens vier Wochen vor dem Zinszahlungstermin (Fälligkeit) vorliegen.',
//     credit_rating: 'A+',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2020-02-21'
//   },
//   {
//     id: '1063404',
//     country_code: CountryCode.BGR,
//     name: 'Bulgarien',
//     description: 'Die Republik Bulgarien liegt im Osten der Balkanhalbinsel und ist seit 2007 Mitglied der Europäischen Union. Das Land ist noch nicht der Euro-Zone angeschlossen, ist aber auf dem Weg dorthin. Die Landeswährung ist der Bulgarische Lew (BGN), der an den Euro gekoppelt ist. Bulgarien weist eine der niedrigsten Staatsverschuldungen aller EU-Mitgliedsstaaten auf.',
//     tax: 10,
//     tax_description: 'In Bulgarien wird eine Quellensteuer in Höhe von 10 % einbehalten, sofern Sie keine Ansässigkeitsbescheinigung zur Verfügung stellen. In diesem Fall beträgt die Quellensteuer 5 %, die jedoch voll auf die Kapitalertragsteuer anrechenbar ist, sofern sie nicht im Ausland erstattungsfähig ist.',
//     credit_rating: 'BBB',
//     guarantee_amount: 196000,
//     guarantee_currency: Currency.BGN,
//     rating_date: '2019-11-29'
//   },
//   {
//     id: '262535503',
//     country_code: CountryCode.LVA,
//     name: 'Lettland',
//     description: 'Lettland, im Zentrum des Baltikums gelegen, ist eine seit 1991 unabhängige parlamentarische Demokratie, die seit 2004 Mitglied der Europäischen Union (EU) und seit 2014 Teil der Eurozone ist. Die lettische Wirtschaft zeichnet sich durch eine hohe Unternehmensfreundlichkeit aus, was sich auch an einer Vielzahl erfolgreicher Start-ups, insbesondere in der Hauptstadt Riga, bemerkbar macht. Das Wirtschaftswachstum Lettlands ist stabil und die Staatsverschuldung ist mit 37,9 % des BIP (Stand: 2016) im europäischen Vergleich sehr niedrig. Kulturell besticht Lettland durch starke nordeuropäische Einflüsse, hanseatische Architektur und seine berühmte Musikfolklore.',
//     tax: 20,

//     tax_description: 'In Lettland wird für Zinszahlungen ab dem 1. Januar 2018 eine Quellensteuer in Höhe von 20 % erhoben, die jedoch reduziert werden kann. Für die Reduzierung der Quellensteuer auf 10 % muss der Bank eine Ansässigkeitsbescheinung bis spätestens vier Wochen vor Fälligkeit vorliegen. Diese ist dann voll auf die Kapitalertragsteuer in Deutschland anrechenbar.',
//     credit_rating: 'A+',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2020-02-21'
//   },
//   {
//     id: '214139962',
//     country_code: CountryCode.AUT,
//     name: 'Österreich',
//     description: 'Die Republik Österreich ist ein demokratischer und föderaler Binnenstaat in Mitteleuropa, der seit 1995 zur EU gehört und Gründungsmitglied der OECD ist. Mit einem höheren Bruttoinlandsprodukt pro Kopf als Deutschland, ist Österreich eins der wohlhabendsten Länder der EU. Die österreichische Wirtschaft zeichnet sich vor allem durch den hohen Anteil erneuerbarer Energie an der Energienutzung aus, die insbesondere durch die Nutzung der Wasserkraft in den Alpen begründet wird.\r\n\r\nDas Land hat hohe Standards bezüglich Bankgeheimnis, Compliance und Investorenschutz und genießt ein Aa1/AA+ Finanzrating.  Der Bankplatz Österreich ist durch strenge gesetzliche Vorgaben geregelt, deren Einhaltung laufend durch die Aufsichtsbehörden geprüft wird.',
//     tax: 25,

//     tax_description: 'In Österreich wird eine Quellensteuer in Höhe von 25 % erhoben, die jedoch bei rechtzeitiger Vorlage der „Erklärung natürlicher Personen für Zwecke innerstaatlicher Quellensteuerentlastung" entfällt. Diese Erklärung stellen wir Ihnen mit Bestätigung der Anlage vorausgefüllt im Onlinebanking zur Verfügung. Das Dokument ist ab Unterschriftsetzung des Finanzamtes fünf Jahre - und somit auch für weitere Anlagen in diesem Zeitraum - gültig.',
//     credit_rating: 'AA+',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2019-03-15'
//   },
//   {
//     id: '309952954',
//     country_code: CountryCode.MLT,
//     name: 'Malta',
//     description: 'Malta ist Mitglied der Europäischen Union und – seit 2008 – auch der Eurozone. Malta wird vom Internationalen Währungsfonds als moderne Volkswirtschaft und von der Weltbank als ein Land mit hohem Einkommen eingestuft. Das Weltwirtschaftsforum beschreibt Malta als besonders innovationsorientiert.\r\nDie Stärken der maltesischen Wirtschaft liegen in der strategischen Lage in der Mitte des Mittelmeers, im Dreieck zwischen Europa, Nordafrika und dem Nahen Osten, der offenen Marktwirtschaft, der mehrsprachigen Bevölkerung (88% der Malteser sprechen Englisch) und den gut entwickelten Finanz- sowie Informations- und Kommunikationstechnologiezentren.\r\n\r\nAnfang 2018 lag das Rating von Standard & Poor’s für Malta bei A- und Moody’s bei A3. Der öffentliche Schuldenstand Maltas ist mit 69,8% des BIP niedriger als der von Deutschland, Frankreich, dem Vereinigten Königreich und Österreich.',
//     tax: 0,
//     tax_description: 'In Malta fällt keine Quellensteuer an.',
//     credit_rating: 'A-',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2020-03-13'
//   },
//   {
//     id: '210825763',
//     country_code: CountryCode.FRA,
//     name: 'Frankreich',
//     description: 'Die Französische Republik ist ein demokratischer Zentralstaat in Westeuropa mit Überseeinseln und –gebieten auf verschiedenen Kontinenten.\r\nFrankreich ist die sechstgrößte Volkswirtschaft der Welt und neben Deutschland das wichtigste Industrieland Europas. Das Land gehört bereits seit 1999 zur Eurozone und die französische Bonität wird derzeit von führenden Ratingagenturen mit der Note “AA” bewertet, was einem Investmentgrade-Rating mit stabilen Aussichten entspricht.',
//     tax: 0,
//     tax_description: 'In Frankreich wird für Personen mit dauerhaftem Wohnsitz im Ausland keine Quellensteuer auf Zinserträge erhoben.',
//     credit_rating: 'AA',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2020-04-03'
//   },

//   {
//     id: '119056336',
//     country_code: CountryCode.HRV,
//     name: 'Kroatien',
//     description: 'Die Republik Kroatien ist ein Staat in Mitteleuropa, seit dem 1. Juli 2013 Mitglied der Europäischen Union und hat die Landeswährung Kuna (HRK). Die kroatische Wirtschaft befindet sich seit Anfang 2015 wieder im Aufschwung und wurde durch die im Januar 2016 verabschiedeten Strukturreformen weiter gestärkt.\r\n\r\nDemnach sind die EU-Prognosen für die Wirtschaftsaussichten in Kroatien positiv, was nicht zuletzt auf deutliche Zuwächse im Handel mit Deutschland zurückzuführen ist.',
//     tax: 12,
//     tax_description: 'Normalerweise wird in Kroatien eine Quellensteuer in Höhe von 12 % erhoben. Diese kann jedoch durch Vorlage einer Ansässigkeitsbescheinigung auf 0 % reduziert werden, vorausgesetzt, dass sie bis spätestens vier Wochen vor jeder Zinszahlung zur Verfügung gestellt wird.',
//     credit_rating: 'BBB-',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2019-03-22'
//   },

//   {
//     id: '319708952',
//     country_code: CountryCode.GRC,
//     name: 'Griechenland',
//     description: 'Griechenland ist ein Staat im Südosten Europas mit rund 11 Millionen Einwohnern. Das Land mit seinen vielen Inseln erstreckt sich über 131.000 km² und hat eine Bevölkerungsdichte von 85 Einwohnern pro km².Seit der Antike war Griechenland eine fortschrittliche Gesellschaft und gilt als die Wiege der Demokratiebewegung. Gleichzeitig ist sie aber auch eng mit der europäischen Schuldenkrise verbunden. Tatsächlich hat die Wirtschaft eine schwere Rezession durchlebt: Zwischen 2009 und 2015 sank das Bruttoinlandsprodukt um 25 Prozent. Griechenland hat jedoch Disziplin bei der Umsetzung des Umstrukturierungsprogramms bewiesen und Reformen durchgeführt, die bereits Anzeichen einer Erholung erkennen lassen. Im Jahr 2018 wuchs die griechische Wirtschaft mit einer geschätzten Rate von 2,0%. Wie im kürzlich veröffentlichten IWF-Bericht erwähnt, befindet sich Griechenland nun in einer Phase des Wirtschaftswachstums, die es zu den leistungsfähigsten Ländern der Eurozone macht. Griechenland wurde kürzlich von Moody\'s aufgerüstet.',
//     tax: 15,
//     tax_description: 'In Griechenland wird eine nicht reduzierte Quellensteuer in Höhe von 15% einbehalten.',
//     credit_rating: 'BB-',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2020-04-24'
//   },
//   {
//     id: '35740037',
//     country_code: CountryCode.DEU,
//     name: 'Deutschland',
//     tax: 0,
//     description: 'Die Bundesrepublik Deutschland ist die mit großem Abstand stärkste Handelsnation der Mitgliedstaaten der Europäischen Union. Deutschland kann als eines der wenigen Länder weltweit das bestmögliche Rating AAA (höchste Bonität) bei allen drei großen Rating-Agenturen vorweisen.',
//     tax_description: 'Für Privatkunden gilt: Abgeltungssteuer und ggf. Kirchensteuer. Ein Freistellungsauftrag kann beantragt werden, das Formular „Freistellungsauftrag“ stellen wir Ihnen im Rahmen der Kontoeröffnung zur Verfügung. Für Geschäftskunden gilt: Gewerblich tätige, in Deutschland ansässige (Sitz/Ort der Geschäftsleitung im Inland) Kapitalgesellschaft ohne Auslandsbetriebsstätten im Sitzstaat der Bank sind grundsätzlich in Deutschland steuerpflichtig. Sämtliche Erträge sind in der Steuererklärung anzugeben.',
//     credit_rating: 'AAA',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2020-04-03'
//   },
//   {
//     id: '287343407',
//     country_code: CountryCode.CYP,
//     name: 'Zypern',
//     description: 'Die im östlichen Mittelmeer gelegene Insel Zypern ist seit 1974 politisch in einen zypriotischen Teil im Süden und in einen türkischen Teil im Norden unterteilt.\r\nBei dem zypriotischen Teil handelt es sich um eine unabhängige Präsidialrepublik, die seit 2004 Mitglied der Europäischen Union (EU) und seit 2008 Teil der Eurozone ist. Auch die Hauptstadt Nikosia ist von der Zweiteilung betroffen.\r\n\r\nDie wirtschaftliche Situation der Republik Zypern verbessert sich seit der Krise im Jahr 2013 kontinuierlich. So wächst die zypriotische Wirtschaft seit 2015 um durchschnittlich mehr als 2 % pro Jahr und die Staatsverschuldung wird 2017 relativ zum Bruttoinlandsprodukt erstmals seit 2008 abnehmen.\r\n\r\nKulturell ist Zypern historisch bedingt griechisch geprägt. Gleichberechtigte Amtssprache neben Griechisch ist Türkisch.',
//     tax: 0,
//     tax_description: 'In Zypern fällt keine Quellensteuer an.',
//     credit_rating: 'BBB-',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2020-03-06'
//   },
//   {
//     id: '48025021',
//     country_code: CountryCode.IRL,
//     name: 'Irland',
//     description: 'Irland ist ein souveräner und unabhängiger Staat, der 26 Regionen auf der geographischen Insel Irland umspannt. Gemäß der letzten Volkszählung vom April 2011 beträgt die Gesamtbevölkerung Irlands etwas über 4,5 Millionen, der höchste Stand seit 1861.\r\nIrland wurde am 1. Januar 1973 Mitglied im Europäischen Wirtschaftsraum (EWR) und hat aktiv an der Entwicklung dessen mitgewirkt, was heute die Europäische Union (EU) ist. Seit 1999 ist die Währung Euro.\r\nIrlands anhaltende wirtschaftliche Erholung ist im Wesentlichen zurückzuführen auf gut ausgebildete und flexible Arbeitskräfte; Maßnahmen der Regierung zur makroökonomischen Stabilisierung und zur Anziehung ausländischer Direktinvestitionen; und auf die Mitgliedschaft in der Europäischen Union, die mittlerweile einen Markt für mehr als 500 Millionen Menschen umspannt.',
//     tax_description: 'In Irland wird keine Quellensteuer erhoben, sofern das Formular “Erklärung über die Nicht-Ansässigkeit” bis spätestens 5 Wochen vor Zinszahlung unterschrieben im Original vorliegt.',
//     credit_rating: 'AA-',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2019-11-29'
//   },
//   {
//     id: '319709199',
//     country_code: CountryCode.ESP,
//     name: 'Spanien',
//     description: 'Das Königreich Spanien liegt im Südwesten von Europa auf der Iberischen Halbinsel und grenzt an Frankreich, Portugal, Andorra und Marokko. Das Land ist seit 1986 Mitglied der Europäischen Union und führte wie Deutschland 2002 den Euro als Zahlungsmittel ein.\r\n\r\nDa Spanien das zweitbeliebteste Urlaubsland weltweit ist, stellt der Tourismus den größten Teil der spanischen Wirtschaftskraft dar. Darauf folgt der Industriesektor und der landwirtschaftliche Sektor.\r\n\r\nDie spanische Wirtschaft befindet sich nach der Rezession 2011 wieder in einem stetig anhaltenden Aufschwung und gilt als eine der am schnellsten und nachhaltigsten wachsenden Volkswirtschaften innerhalb der Europäischen Union.',

//     tax_description: 'Der Quellensteuersatz von 19 % auf Zinserträge in Spanien beträgt für Kunden aus Deutschland 0 % und für Kunden aus Österreich 5 %, da Sie im Rahmen Ihrer ersten Kontoeröffnung bei jeder unserer Partnerbanken in Spanien bereits das spanische Steuerformular („Declaración de Residencia Fiscal") zur Verfügung stellen müssen. Dieses Formular reicht zur Reduzierung der Quellensteuer aus und muss nur einmal pro Person und pro Partnerbank eingereicht werden.',
//     credit_rating: 'A',
//     guarantee_amount: 100000,
//     guarantee_currency: Currency.EUR,
//     rating_date: '2019-09-20'
//   }
// ];
