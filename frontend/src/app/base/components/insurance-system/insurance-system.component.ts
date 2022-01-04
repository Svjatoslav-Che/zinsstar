import {Component, OnInit} from '@angular/core';
import {environment as env} from 'src/environments/environment';
import {TaxInfo} from '../tax-information/tax-information.component';

@Component({
  selector: 'app-insurance-system',
  templateUrl: './insurance-system.component.html',
  styleUrls: ['./insurance-system.component.scss'],
})
export class InsuranceSystemComponent implements OnInit {
  countries: TaxInfo[] = [
    {
      country: 'Belgien',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Guarantee Fund for Financial Services </div> <div class="mb-2"><b>Website:</b><br /><a  href="https://garantiefonds.belgium.be/nl"  target="_blank"  rel="noopener" >https://garantiefonds.belgium.be/nl</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Federale Overheidsdienst Financiën, Administratie van de Thesaurie,Administratie Betalingen, Garantiefonds, Kunstlaan 30, 1040 Brussel,Belgium </div> <div class="mb-2"><b>E-Mail:</b><br /><a  href="mailto:garantiefonds.thesaurie@minfin.fed.be"  target="_blank"  rel="noopener" >garantiefonds.thesaurie@minfin.fed.be</a> </div> <div class="mb-2"><b>Telefon:</b><br />+ 32 257 478 40 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />3.960 Mrd. EUR (entspricht 1,31 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Bulgarien',
      content:
        '<div><div><p>  Einlagen inklusive Zinserträge sind bis zu einem Betrag von  196.000 BGN je Kunde und je Bank gesetzlich durch den bulgarischen  Einlagensicherungsfonds abgesichert. Im Falle einer Auszahlung  durch den Einlagensicherungsfonds erfolgt diese in bulgarischen  Leva (BGN). &nbsp;Insofern besteht ein  Währungs-/Wechselkursrisiko. Weitere Informationen zur  Einlagensicherung unter  <a href="http://dif.bg/en">http://dif.bg/en</a>.</p> </div><div></div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Bulgarian Deposit Insurance Fund </div> <div class="mb-2"><b>Website:</b><br /><a href="http://dif.bg/en" target="_blank" rel="noopener" >http://dif.bg/en</a> </div> <div class="mb-2"><b>Anschrift:</b><br />27 Vladayska Street, Sofia 1606, Bulgaria </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:contact@dif.bg" target="_blank" rel="noopener" >contact@dif.bg</a> </div> <div class="mb-2"><b>Telefon:</b><br />+359 2 953 -1217 / -1318 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />196.000 BGN je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />706.4 Mio. BGN (entspricht 1,17 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Deutschland',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Entschädigungseinrichtung deutscher Banken GmbH </div> <div class="mb-2">Zusätzlich je nach Bank variierende Deckung durch Mitgliedschaft imprivaten Einlagensicherungsfonds des Bundesverbands deutscher Bankene.V. </div> <div class="mb-2"><b>Website:</b><br /><a href="http://www.edb-banken.de/" target="_blank" rel="noopener" >http://www.edb-banken.de</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Burgstraße 28, 10178 Berlin, Germany </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:info@edb-banken.de" target="_blank" rel="noopener" >info@edb-banken.de</a> </div> <div class="mb-2"><b>Telefon:</b><br />+49 30 59 00 11 960 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />3.006 Mrd. EUR (entspricht 0,52 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Estland',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Guarantee Fund </div> <div class="mb-2"><b>Website:</b><br /><a href="http://www.tf.ee/eng" target="_blank" rel="noopener" >http://www.tf.ee/eng</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Kaarli pst 1/Roosikrantsi 2, 10119 Tallinn, Estonia </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:tf@tf.ee" target="_blank" rel="noopener" >tf@tf.ee</a> </div> <div class="mb-2"><b>Telefon:</b><br />+372 6110730 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />241.8 Mio. EUR (entspricht 1,70 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Frankreich',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Deposit Guarantee and Resolution Fund </div> <div class="mb-2"><b>Website:</b><br /><a  href="https://www.garantiedesdepots.fr/fr"  target="_blank"  rel="noopener" >https://www.garantiedesdepots.fr/fr</a> </div> <div class="mb-2"><b>Anschrift:</b><br />65, rue de la Victoire, 75009 Paris, France </div> <div class="mb-2"><b>E-Mail:</b><br /><a  href="mailto:contact@garantiedesdepots.fr"  target="_blank"  rel="noopener" >contact@garantiedesdepots.fr</a> </div> <div class="mb-2"><b>Telefon:</b><br />+33 0158 18 38 08 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />4,48 Mrd. EUR (entspricht 0,37 % der gedeckten Einlagen). </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Griechenland',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Hellenic Deposit and Investment Guarantee Fund </div> <div class="mb-2"><b>Website:</b><br /><a href="https://www.teke.gr/" target="_blank" rel="noopener" >https://www.teke.gr</a> </div> <div class="mb-2"><b>Anschrift:</b><br />6 Amerikis Str-2nd Floor, Athens 10671, Greece </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:info@hdigf.gr" target="_blank" rel="noopener" >info@hdigf.gr</a> </div> <div class="mb-2"><b>Telefon:</b><br />+302 103639 933 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />1.55 Mrd. EUR (entspricht 1,40 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Großbritannien',
      content:
        '<div><div>Trotz des Ausstiegs von Großbritanniens aus der EU sind Einlagen beibritischen Banken weiter als sicher anzusehen. Die britischeEinlagensicherung liegt derzeit jedoch unter der in der EU geltendengesetzlichen Grenze von 100.000 EUR pro Kunde und Bank – Einlagenwerden nach dem 31. Dezember 2020 bis zu einer Höhe von 85.000 GBP(ca. 98.350 EUR) pro Kunde und Bank durch das britische FinancialServices Compensation Scheme (FSCS) geschützt. </div><div></div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Financial Services Compensation Scheme </div> <div class="mb-2"><b>Website:</b><br /><a href="http://www.fscs.org.uk/" target="_blank" rel="noopener" >http://www.fscs.org.uk</a> </div> <div class="mb-2"><b>Anschrift:</b><br />PO Box 300, Mitcheldean, GL17 1DY, United Kingdom </div> <div class="mb-2"><b>E-Mail:</b><br /><a  href="mailto:enquiries@fscs.org.uk"  target="_blank"  rel="noopener" >enquiries@fscs.org.uk</a> </div> <div class="mb-2"><b>Telefon:</b><br />+44 20 7741 4100 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />85.000 £ je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />7.4 Mrd. GBP (entspricht 0,65 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2017 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Irland',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Deposit Guarantee Scheme </div> <div class="mb-2"><b>Website:</b><br /><a  href="https://www.depositguarantee.ie/"  target="_blank"  rel="noopener" >https://www.depositguarantee.ie</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Central Bank of Ireland, New Wapping Street, North Wall Quay, Dublin1, Ireland </div> <div class="mb-2"><b>E-Mail:</b><br /><a  href="mailto:info@depositguarantee.ie"  target="_blank"  rel="noopener" >info@depositguarantee.ie</a> </div> <div class="mb-2"><b>Telefon:</b><br />+353 1890 777 777 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />437 Mio. EUR (entspricht 0,40 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Italien',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Interbank Deposit Protection Fund </div> <div class="mb-2"><b>Website:</b><br /><a href="http://www.fitd.it/" target="_blank" rel="noopener" >http://www.fitd.it</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Via del Plebiscito, 102, 00186 Rome, Italy </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:infofitd@fitd.it" target="_blank" rel="noopener" >infofitd@fitd.it</a> </div> <div class="mb-2"><b>Telefon:</b><br />+39 06-699861 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />1.43 Mrd. EUR (entspricht 0,23 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Kroatien',
      content:
        '<div><div><p>  <span>Einlagen inklusive Zinserträge sind bis zu einem Betrag von\n100.000 EUR je Kunde und je Bank gesetzlich durch den\nkroatischen Einlagensicherungsfonds abgesichert. Im Falle einer\nAuszahlung durch den Einlagensicherungsfonds erfolgt diese in\nKroatische Kuna (HRK). Insofern besteht ein\nWährungs-/Wechselkursrisiko. Weitere Informationen zur\nEinlagensicherung finden Sie unter\nhttp://www.dab.hr/en/home.&nbsp;</span ></p> </div><div></div><div></div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />State Agency for Deposit Insurance and Bank Resolution </div> <div class="mb-2"><b>Website:</b><br /><a href="http://www.dab.hr/en/home" target="_blank" rel="noopener" >http://www.dab.hr/en/home</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Jurišićeva 1/II 10000 Zagreb, Croatia </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:dab@dab.hr" target="_blank" rel="noopener" >dab@dab.hr</a> </div> <div class="mb-2"><b>Telefon:</b><br />+385 (1) 48 13 222 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />6.05 Mrd. HRK (entspricht 3,0 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Lettland',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Deposit Guarantee Fund of Latvia </div> <div class="mb-2"><b>Website:</b><br /><a href="http://www.fktk.lv/en" target="_blank" rel="noopener" >http://www.fktk.lv/en</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Kungu iela 1, 1050 Riga, Latvia </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:fktk@fktk.lv" target="_blank" rel="noopener" >fktk@fktk.lv</a> </div> <div class="mb-2"><b>Telefon:</b><br />+ 371 6 7774800 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />25.3 Mio. EUR (entspricht 0,3 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Litauen',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Deposit and Investment Insurance </div> <div class="mb-2"><b>Website:</b><br /><a  href="http://www.iidraudimas.lt/en"  target="_blank"  rel="noopener" >http://www.iidraudimas.lt/en</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Algirdo str. 31, 03219 Vilnius, Lithuania </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:idf@idf.lt" target="_blank" rel="noopener" >idf@idf.lt</a> </div> <div class="mb-2"><b>Telefon:</b><br />+ 370 8 5 2135657 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />107.8 Mio. EUR (entspricht 0,81 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Luxemburg',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />The Luxembourg Deposit Guarantee Fund </div> <div class="mb-2"><b>Website:</b><br /><a href="http://www.fgdl.lu/de" target="_blank" rel="noopener" >http://www.fgdl.lu/de</a> </div> <div class="mb-2"><b>Anschrift:</b><br />L-2860, Luxembourg </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:info@fgdl.lu" target="_blank" rel="noopener" >info@fgdl.lu</a> </div> <div class="mb-2"><b>Telefon:</b><br />+352 26 25 1-1 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />283 Mio. EUR (entspricht 0,85% der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Malta',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Depositor Compensation Scheme </div> <div class="mb-2"><b>Website:</b><br /><a  href="http://www.compensationschemes.org.mt/"  target="_blank"  rel="noopener" >http://www.compensationschemes.org.mt</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Compensation Schemes Management Committee, c/o Malta FinancialServices Authority, Notabile Road, Attard BKR3000, MALTA </div> <div class="mb-2"><b>E-Mail:</b><br /><a  href="mailto:info@compensationscheme.org.mt"  target="_blank"  rel="noopener" >info@compensationscheme.org.mt</a> </div> <div class="mb-2"><b>Telefon:</b><br />+356 2144 1155 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />121 Mio. EUR (entspricht 0,93 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Niederlande',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Deposit Guarantee Fund </div> <div class="mb-2"><b>Website:</b><br /><a  href="https://www.dnb.nl/en/resolution/depositogarantiestelsel/index.jsp"  target="_blank"  rel="noopener" >https://www.dnb.nl/en/resolution/depositogarantiestelsel/index.jsp</a> </div> <div class="mb-2"><b>Anschrift:</b><br />De Nederlandsche Bank, Westeinde 1, 1017 ZN Amsterdam, Netherlands </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:info@dnb.nl" target="_blank" rel="noopener" >info@dnb.nl</a> </div> <div class="mb-2"><b>Telefon:</b><br />+31 20 524 9111 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />1.82 Mrd. EUR (entspricht 0,36% der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Norwegen',
      content:
        '<div><div><p>  Die gesetzliche Einlagensicherung Norwegens garantiert für Kunden  außerhalb Norwegens einen maximalen Sicherungsbetrag im Gegenwert  von 100.000 EUR je Bank und Kunde. Im Falle einer Auszahlung durch  den Einlagensicherungsfonds erfolgt diese in norwegischen Kronen  (NOK) zu dem Wechselkurs am Tag der Feststellung des  Einlagensicherungsfalls. Insofern besteht ein  Währungs-/Wechselkursrisiko. Weitere Informationen zur  Einlagensicherung unter  https://www.bankenessikringsfond.no/?lang=en_GB.</p><p>&nbsp;</p><p><b>Offizielle Bezeichnung:</b></p> </div> <div class="mb-2">Norwegian Banks‘ Guarantee Fund </div> <div class="mb-2"><b>Website:</b><br /><a  href="https://www.bankenessikringsfond.no/?lang=en_GB"  target="_blank"  rel="noopener" >https://www.bankenessikringsfond.no/?lang=en_GB</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Hansteens gate 2, Postboks 2579, Solli, N-0202 Oslo, Norway </div> <div class="mb-2"><b>E-Mail:</b><br /><a  href="mailto:firmapost@sikringsfondet.no"  target="_blank"  rel="noopener" >firmapost@sikringsfondet.no</a> </div> <div class="mb-2"><b>Telefon:</b><br />+47 23 28 42 42 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />17.18 Mrd. NOK (entspricht 1,26 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Österreich',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Einlagensicherung AUSTRIA Ges.m.b.H. </div> <div class="mb-2"><b>Website:</b><br /><a  href="https://www.einlagensicherung.at/"  target="_blank"  rel="noopener" >https://www.einlagensicherung.at</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Wipplingerstraße 34/DG4, 1010 Wien </div> <div class="mb-2"><b>E-Mail:</b><br /><a  href="mailto:office@einlagensicherung.at"  target="_blank"  rel="noopener" >office@einlagensicherung.at</a> </div> <div class="mb-2"><b>Telefon:</b><br />+43 (1) 533 98 03 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />685 Mio. EUR (entspricht 0,38 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Polen',
      content:
        '<div><div><p>  <span>Einlagen inklusive Zinserträge sind bis zu einem Betrag von\n100.000 EUR je Kunde und je Bank gesetzlich durch den polnischen\nEinlagensicherungsfonds abgesichert. Im Falle einer Auszahlung\ndurch den Einlagensicherungsfonds erfolgt diese in polnischen\nZloty (PLN). Insofern besteht ein Währungs-/Wechselkursrisiko.\nWeitere Informationen zur Einlagensicherung finden Sie unter\nhttps://www.bfg.pl/en.</span ></p> </div><div></div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />The Bank Guarantee Fund </div> <div class="mb-2"><b>Website:</b><br /><a href="https://www.bfg.pl/en" target="_blank" rel="noopener" >https://www.bfg.pl/en</a> </div> <div class="mb-2"><b>Anschrift:</b><br />4 ks. Ignacego Jana Skorupki str., 00-546 Warsaw, Poland </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:kancelaria@bfg.pl" target="_blank" rel="noopener" >kancelaria@bfg.pl</a> </div> <div class="mb-2"><b>Telefon:</b><br />+48 22 583 30 700 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />15.41 Mrd. PLN (entspricht 1,13 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Portugal',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Deposit Guarantee Fund </div> <div class="mb-2"><b>Website:</b><br /><a href="https://www.fgd.pt/" target="_blank" rel="noopener" >https://www.fgd.pt</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Av. da República, 57 – 8º, 1050-189 Lisboa, Portugal </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:geral@fgd.pt" target="_blank" rel="noopener" >geral@fgd.pt</a> </div> <div class="mb-2"><b>Telefon:</b><br />+351 21 313 01 99 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />1.54 Mrd. EUR (entspricht 1,13 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Schweden',
      content:
        '<div><div><p>  <span>Einlagen inklusive Zinserträge sind bis zu einem Betrag von\n1.050.000 SEK je Kunde und je Bank gesetzlich durch den\nschwedischen Einlagensicherungsfonds abgesichert. Im Falle einer\nAuszahlung durch den Einlagensicherungsfonds erfolgt diese in\nschwedischen Kronen (SEK). Insofern besteht ein\nWährungs-/Wechselkursrisiko. Weitere Informationen zur\nEinlagensicherung unter\nhttps://www.riksgalden.se/en/Deposit_insurance. Innerhalb der\nEuropäischen Union sind die Mindestanforderungen in allen\nMitgliedsstaaten durch die Richtlinien 94/19/EG, 2009/14/EG\nsowie 2014/49/EU harmonisiert.</span ></p> </div><div></div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Swedish National Debt Office </div> <div class="mb-2"><b>Website:</b><br /><a  href="https://www.riksgalden.se/en/our-operations/deposit-insurance/" >https://www.riksgalden.se/en/our-operations/deposit-insurance/</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Riksgälden, SE-103 74 Stockholm, Sweden </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:ig@riksgalden.se" target="_blank" rel="noopener" >ig@riksgalden.se</a> </div> <div class="mb-2"><b>Telefon:</b><br />+46 8 613 52 00 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />1.050.000 SEK je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />44.30 Mrd. SEK (entspricht 2,55 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Spanien',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />The Deposit Guarantee Fund of Credit Institutions </div> <div class="mb-2"><b>Website:</b><br /><a href="http://www.fgd.es/en" target="_blank" rel="noopener" >http://www.fgd.es/en</a> </div> <div class="mb-2"><b>Anschrift:</b><br />The Deposit Guarantee Fund of Credit Institutions, C/José Ortega yGasset, 22 – 4ª planta, 28006 Madrid, Spain </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:fogade@fgd.es" target="_blank" rel="noopener" >fogade@fgd.es</a> </div> <div class="mb-2"><b>Telefon:</b><br />+34 91 431 66 45 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />3.09 Mrd. EUR (entspricht 0,41 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Tschechische Republik',
      content:
        '<div><div><p>  <span>Die gesetzliche Einlagensicherung der Tschechischen Republik\ngarantiert einen maximalen Sicherungsbetrag im Gegenwert von\n100.000 Euro je Bank und Kunde. Im Falle einer Auszahlung durch\nden Einlagensicherungsfonds erfolgt diese in Tschechischen\nKronen (CZK) zu dem Wechselkurs am Tag der Feststellung des\nEinlagensicherungsfalls. Insofern besteht ein\nWährungs-/Wechselkursrisiko. Weitere Informationen zur\nEinlagensicherung finden Sie unter </span ><a href="https://www.garancnisystem.cz/de"n><span>https://www.garancnisystem.cz/de</span></a ><span>.</span></p> </div><div></div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Financial Market Guarantee System </div> <div class="mb-2"><b>Website:</b><br /><a  href="https://www.garancnisystem.cz/de"  target="_blank"  rel="noopener" >https://www.garancnisystem.cz/de</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Týn 639, 110 00 Praha 1, Czech Republic </div> <div class="mb-2"><b>E-Mail:</b><br /><a href="mailto:info@gsft.cz" target="_blank" rel="noopener" >info@gsft.cz</a> </div> <div class="mb-2"><b>Telefon:</b><br />+420 234 767 676 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />34.06 Mrd. CZK (entspricht 1,31 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
    {
      country: 'Zypern',
      content:
        '<div> <div class="mb-2"><b>Offizielle Bezeichnung:</b><br />Deposit Guarantee Fund for Banks </div> <div class="mb-2"><b>Website:</b><br /><a  href="https://www.centralbank.cy/en/deposit-guarantee-investors-compensation-schemes"  target="_blank"  rel="noopener" >https://www.centralbank.cy/en/deposit-guarantee-investors-compensation-schemes</a> </div> <div class="mb-2"><b>Anschrift:</b><br />Kennedy Avenue 80, 1076 CY Nicosia, Cyprus </div> <div class="mb-2"><b>E-Mail:</b><br /><a  href="mailto:cbcinfo@centralbank.cy"  target="_blank"  rel="noopener" >cbcinfo@centralbank.cy</a> </div> <div class="mb-2"><b>Telefon:</b><br />+357 22 71 41 00 </div> <div class="mb-2"><b>Sicherungsgrenze:</b><br />100.000 € je Kunde und Bank </div> <div class="mb-2"><b>Höhe der Reserven:</b><br />65,4 Mio EUR (entspricht 0,25 % der gedeckten Einlagen) </div> <div class="mb-2"><b>Stand:</b><br />31. Dezember 2019 </div> <div class="mb-2"><b>Quelle:</b><br />https://www.eba.europa.eu/regulation-and-policy/recovery-and-resolution/deposit-guarantee-schemes-data#collapse2-1 </div>\n</div>',
    },
  ];

  public selectValue: number = 0;
  public menu_value_bank: number = 0;
  public content_bank: any = this.countries[0].content;

  constructor() {
  }

  get contacts() {
    return env.contact;
  }

  get emails() {
    return env.emails;
  }

  ngOnInit(): void {
  }

  selectValueClick(input: number) {
    if (this.selectValue !== input) {
      this.selectValue = input;
    } else {
      this.selectValue = 0;
    }
  }

  setMenuOneValueBank(inputNum: number, content: any) {
    this.menu_value_bank = inputNum;
    this.content_bank = content;
    // console.log(this.content_bank);
  }
}
