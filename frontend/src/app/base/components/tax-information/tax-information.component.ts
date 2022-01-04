import {Component, OnInit} from '@angular/core';

export interface TaxInfo {
  country: string;
  content: string;
}

@Component({
  selector: 'app-tax-information',
  templateUrl: './tax-information.component.html',
  styleUrls: ['./tax-information.component.scss']
})
export class TaxInformationComponent implements OnInit {

  countries: TaxInfo[] = [
    {
      content: "    <div >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong>Bank: CKV</strong></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            In Belgien muss bei der Kontoeröffnung ein vom Kunden\n" +
        "            unterzeichnetes Steuerformular zur Reduzierung der Quellensteuer\n" +
        "            eingereicht werden.<br />\n" +
        "            Für CKV können Sie uns einen Scan zur Verfügung stellen.\n" +
        "          </p>\n" +
        "          <p><strong>Quellensteuersatz:</strong></p>\n" +
        "          <p>30%</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz:</strong></p>\n" +
        "          <p>0% (keine Quellensteuer)</p>\n" +
        "          <p><strong>Einzureichendes Dokument:</strong></p>\n" +
        "          <p>\n" +
        "            Vorbefülltes belgisches Steuerformular mit Anweisungen in deutscher\n" +
        "            Sprache. Dieses Formular muss mit jeder Anlage eingereicht werden.\n" +
        "          </p>\n" +
        "          <p><strong>Abgabetermin:</strong></p>\n" +
        "          <p>\n" +
        "            Reichen Sie das unterschriebene Steuerformular als Scan mit dem\n" +
        "            Antrag bei Zinsunion ein. Laden Sie dieses einfach aus dem\n" +
        "            Online-Banking hoch.\n" +
        "          </p>\n" +
        "          <p><strong>Beispiel:</strong></p>\n" +
        "          <p>\n" +
        "            Bitte beachten Sie, dass dies nur ein Beispiel ist. Die notwendigen\n" +
        "            Steuerunterlagen erhalten Sie bei der Eröffnung eines Kontos mit\n" +
        "            deutschsprachigen Anweisungen.\n" +
        "          </p>\n" +
        "        </div>", country: "Belgien"
    },
    {
      content: "  <div >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                ><span\n" +
        "                  ><span\n" +
        "                    >Banken: Bulgarian-American Credit Bank, Fibank,\n" +
          "                    International Asset Bank, Investbank, TBI Bank</span\n" +
        "                  ></span\n" +
        "                ></strong\n" +
        "              ></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>Wie man die Quellensteuer reduziert:</p>\n" +
        "          <p>&nbsp;</p>\n" +
        "          <ul>\n" +
        "            <li>\n" +
        "              In Bulgarien muss ein vom Kunden und dem Finanzamt ausgefüllter\n" +
        "              und unterschriebener Nachweis (Formular “\n" +
        "              <strong>Wohnsitzbescheinigung</strong> „) und zusätzlich ein vom\n" +
        "              Kunden unterschriebenes Formular „<strong\n" +
        "                >Erklärung über den wirtschaftlichen Eigentümer des\n" +
        "                Einkommens</strong\n" +
        "              >“ vorgelegt werden.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Um eine Bearbeitung durch die deutschen und anschliessend\n" +
        "              bulgarischen Steuerbehörden zu gewährleisten, reichen Sie die\n" +
        "              entsprechenden Unterlagen bitte nur zwischen drei und sechs\n" +
        "              Monaten vor dem<strong> Zinszahlungstermin</strong>\n" +
        "              (Fälligkeitsdatum) bei Ihrem Finanzamt ein.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Wenn Sie mehrere Festgelder bei der Partnerbank mit demselben\n" +
        "              Fälligkeitsdatum haben, müssen Sie die Unterlagen nur einmal\n" +
        "              einreichen, auch wenn Sie für jede Eröffnung des Festgeldes\n" +
        "              Dokumente erhalten haben.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie mehrere<strong>\n" +
        "                Festgelder mit unterschiedlichen Fälligkeitsjahren</strong\n" +
        "              >\n" +
        "              haben, müssen Sie die Unterlagen pro Kalenderjahr einreichen.<br />\n" +
        "              Die entsprechenden Unterlagen zur Reduzierung der Quellensteuer\n" +
        "              legen wir mit der Festgeldbestätigung und den relevanten\n" +
        "              Steuerinformationen in Ihren persönlichen Briefkasten im\n" +
        "              Zinsunion-Onlinebanking ab. Die ausgefüllten und unterschriebenen\n" +
        "              Unterlagen übermitteln wir selbstverständlich kostenlos im\n" +
        "              Original an die Partnerbank.\n" +
        "            </li>\n" +
        "          </ul>\n" +
        "          <p><strong>Quellensteuersatz:</strong></p>\n" +
        "          <p>10 %</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz:</strong></p>\n" +
        "          <p>\n" +
        "            5 % (voll anrechenbar, sofern nicht im Ausland erstattungsfähig)\n" +
        "          </p>\n" +
        "          <p><strong>Einzureichende Dokumente:</strong></p>\n" +
        "          <p>\n" +
        "            Ansässigkeitsbescheinigung, Erklärung über den wirtschaftlich\n" +
        "            Berechtigten der Einnahmen mit deutschsprachigen Ausfüllhinweisen\n" +
        "          </p>\n" +
        "          <p><strong>Frist:</strong></p>\n" +
        "          <p>\n" +
        "            Spätestens 6 Wochen vor Zinszahlung (das heißt, vor Fälligkeit) im\n" +
        "            Original postalisch an Zinsunion&nbsp;senden:\n" +
        "          </p>\n" +
        "          <p><strong>Zinsunion</strong></p>\n" +
        "          <p>Postfach 13 02 07</p>\n" +
        "          <p><strong>13601 Berlin, Deutschland</strong></p>\n" +
        "          <p><strong>Musterbeispiel:</strong></p>\n" +
        "          <p>\n" +
        "            Bitte beachten Sie, dass es sich hierbei lediglich um\n" +
        "            ein&nbsp;<strong>Beispiel</strong>&nbsp;handelt. Die notwendigen\n" +
        "            Steuerunterlagen erhalten Sie wie beschrieben fristgerecht und\n" +
        "            personalisiert in Ihrer elektronischen Postbox im\n" +
        "            Zinsunion-Onlinebanking.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a\n" +
        "              href=\"/app/uploads/2016/06/ansaessigkeitsbescheinigung.pdf\"\n" +
        "              target=\"_blank\"\n" +
        "              rel=\"noopener\"\n" +
        "              >Musterbeispiel Ansässigkeitsbescheinigung</a\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a\n" +
        "              href=\"/app/uploads/2016/06/erklaerung-ueber-den-wirtschaftlich-berechtigten-der-einnahmen.pdf\"\n" +
        "              target=\"_blank\"\n" +
        "              rel=\"noopener\"\n" +
        "              >Musterbeispiel Erklärung über den wirtschaftlich Berechtigten der\n" +
        "              Einnahmen</a\n" +
        "            >\n" +
        "          </p>\n" +
        "        </div>", country: "Bulgarien"
    },
    {
      content: "  <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                >Banken: Bankhaus August Lenz, Bankhaus Obotritia, GRENKE Bank,\n" +
        "                GEFA BANK, Greensill Bank, Hanseatic, KT Bank, NIBC Bank, North\n" +
        "                Channel Bank, SIGNAL IDUNA Bauspar AG, solarisBank, UniCredit\n" +
        "                Bank, PEAC BANK</strong\n" +
        "              ></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            In Deutschland bzw. bei den deutschen Partnerbanken ist die\n" +
        "            steuerliche Freistellung im Rahmen von Grundfreibeträgen generell\n" +
        "            mit einem Freistellungsauftrag bzw. einer\n" +
        "            Nichtveranlagungsbescheinigung möglich. Weitere Informationen\n" +
        "            erhalten Sie oben im Punkt „Informationen zur steuerliche\n" +
        "            Behandlung“ unter „Grundfreibeträge in Deutschland“. Das Formular\n" +
        "            „Freistellungsauftrag“ stellen wir Ihnen im Rahmen der\n" +
        "            Kontoeröffnung bei den deutschen Partnerbanken zur Verfügung und\n" +
        "            leiten dieses ausgefüllt und unterschrieben kostenlos an die\n" +
        "            Partnerbank weiter. Falls Sie eine Nichtveranlagerungsbescheinigung\n" +
        "            für die steuerliche Freistellung bei den deutschen Partnerbanken\n" +
        "            einreichen möchten, können Sie uns gerne ein Originalexemplar\n" +
        "            zusenden.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            Sie können die Unterlagen per E-Mail an&nbsp;<a\n" +
        "              href=\"mailto:service@mail-zinsunion.com\"\n" +
        "              ><strong>service@mail-zinsunion.com</strong></a\n" +
        "            >&nbsp;schicken oder alternativ (zwingend für\n" +
        "            Nichtveranlagungsbescheinigung) an folgende Postanschrift senden:\n" +
        "          </p>\n" +
        "          <p><strong>Zinsunion</strong></p>\n" +
        "          <p>Postfach 13 02 07</p>\n" +
        "          <p><strong>13601 Berlin, Deutschland</strong></p>\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong>Besonderheit: SIGNAL IDUNA Bauspar</strong\n" +
        "              ><strong> AG</strong></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            Durch die Treuhandvereinbarung mit der Zinsunion Bank AG kann ein\n" +
        "            Freistellungsauftrag ausschließlich im Onlinebanking des\n" +
        "            Zinsunion-Kontos eingerichtet werden. Dieser Freitsellungsauftrag\n" +
        "            gilt für alle Banken mit Treuhandmodell. Wir bitten um Ihr\n" +
        "            Verständnis, dass ein Freistellungsauftrag nicht per Post, bzw. bei\n" +
        "            bereits erfolgter Zinsgutschrift (im gleichen Kalenderjahr), erteilt\n" +
        "            bzw. angepasst werden kann.\n" +
        "          </p>\n" +
        "        </div>", country: "Deutschland"
    },
    {
      content: "  <div >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong>Banken: Inbank, Coop Pank, Holm Bank, LHV</strong></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            In Estland fällt keine Quellensteuer an. Es ist somit kein Nachweis\n" +
        "            erforderlich.\n" +
        "          </p>\n" +
        "        </div>", country: "Estland"
    },
    {
      content: "    <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                >Banken: Banque Wormser Frères, BGFIBank Europe, Ditto Bank, My\n" +
        "                Partner Bank</strong\n" +
        "              ><strong>,</strong> <strong>Y</strong\n" +
        "              ><strong>ounited Credit, Banque BCP S.A.S.</strong></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            In Frankreich fällt keine Quellensteuer an. Es ist somit kein\n" +
        "            Nachweis erforderlich.\n" +
        "          </p>\n" +
        "        </div>", country: "Frankreich"
    },
    {
      content: "   <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong>Banken: Aegean Baltic Bank, Attica Bank</strong></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            In Griechenland wird eine\n" +
        "            <strong>nicht reduzierte Quellensteuer in Höhe von 15%</strong>\n" +
        "            einbehalten. Die Zinszahlung und der ausländische\n" +
        "            Quellensteuereinbehalt erfolgen einmalig zum Laufzeitende der Anlage\n" +
        "            direkt durch die Bank.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <strong\n" +
        "              >Bitte beachten Sie, dass Zinsunion und die griechische Banks\n" +
        "              aufgrund technisch-organisatorischer Limitationen keine\n" +
        "              Unterstützung im Steuerprozess anbieten können, so dass keine\n" +
        "              Reduzierung der Quellensteuer auf 10 % möglich ist. Eine\n" +
        "              Quellensteuer in Höhe von 10% ist trotzdem voll anrechenbar,\n" +
        "              sofern nicht im Ausland erstattungsfähig. Wir bitten Sie um\n" +
        "              Verständnis.</strong\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <strong>Besonderheit: Aegean Baltic Bank</strong><br />\n" +
        "            Durch die Treuhandvereinbarung mit der Zinsunion Bank AG erfolgt\n" +
        "            ebenfalls ein direkter Steuereinbehalt in Deutschland. Sie können\n" +
        "            hierfür einen Freistellungsauftrag ausschließlich im Onlinebanking\n" +
        "            des Zinsunion-Kontos einrichten. Dieser Freitsellungsauftrag gilt für\n" +
        "            alle Banken mit Treuhandmodell. Wir bitten um Ihr Verständnis, dass\n" +
        "            ein Freistellungsauftrag nicht per Post, bzw. bei bereits erfolgter\n" +
        "            Zinsgutschrift (im gleichen Kalenderjahr), erteilt bzw. angepasst\n" +
        "            werden kann.<br />\n" +
        "            Falls Sie eine Nichtveranlagerungsbescheinigung für die steuerliche\n" +
        "            Freistellung bei den Banken mit Treuhandmodell einreichen möchten,\n" +
        "            können Sie uns gerne ein Originalexemplar zusenden.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            Sie können die Nichtveranlagerungsbescheinigung an folgende\n" +
        "            Postanschrift senden:<br />\n" +
        "            Zinsunion<br />\n" +
        "            Postfach 13 02 07<br />\n" +
        "            13601 Berlin, Deutschland\n" +
        "          </p>\n" +
        "        </div>", country: "Griechenland"
    },
    {
      content: "   <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                >Banken: Bank &amp; Clients, FirstSave €uro, Wyelands\n" +
        "                Bank</strong\n" +
        "              ></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            In Großbritannien fällt keine Quellensteuer an. Es ist somit kein\n" +
        "            Nachweis erforderlich.\n" +
        "          </p>\n" +
        "        </div>", country: "Großbritannien"
    },
    {
      content: "   <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong>Bank: Allied Irish Banks</strong></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <strong>Vorgehensweise zur Reduzierung der Quellensteuer:</strong>\n" +
        "          </p>\n" +
        "          <ul>\n" +
        "            <li>\n" +
        "              In Irland ist ein unterschriebener Nachweis, die sogenannte\n" +
        "              „<strong>Non-resident Declaration</strong>“ (Erklärung über die\n" +
        "              Nicht-Ansässigkeit), einzureichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Um die Bearbeitung durch die irischen Steuerbehörden zu\n" +
        "              gewährleisten, reichen Sie bitte die jeweiligen\n" +
        "              Unterlagen&nbsp;<strong\n" +
        "                >spätestens fünf Wochen vor dem Zinszahlungstermin</strong\n" +
        "              >&nbsp;(Fälligkeit) im Original per Post ein.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Die Unterlagen werden&nbsp;<strong>einmalig&nbsp;</strong>für das\n" +
        "              erste Festgeld bei der Allied Irish Banks zur Vermeidung von\n" +
        "              Quellensteuern benötigt. Sollten Sie Ihr Festgeld verlängern oder\n" +
        "              weitere Festgelder bei der Allied Irish Banks eröffnen, müssen Sie\n" +
        "              die Unterlagen&nbsp;<strong>kein weiteres Mal einreichen</strong>,\n" +
        "              sofern sich an der Ansässigkeit nichts ändert.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Das entsprechende Formular legen wir im&nbsp;<strong\n" +
        "                >Rahmen der Kontoeröffnung</strong\n" +
        "              >&nbsp;in Ihrer persönlichen Postbox im Zinsunion-Onlinebanking\n" +
        "              ab. Das unterschriebene Formular übermitteln wir\n" +
        "              selbstverständlich kostenlos im Original an die Partnerbank.\n" +
        "            </li>\n" +
        "          </ul>\n" +
        "          <p><strong>Quellensteuersatz:</strong></p>\n" +
        "          <p>37 %</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz:</strong></p>\n" +
        "          <p>0 % (keine Quellensteuer)</p>\n" +
        "          <p><strong>Einzureichendes Dokument:</strong></p>\n" +
        "          <p>\n" +
        "            Non-resident Declaration (Erklärung über die Nicht-Ansässigkeit)\n" +
        "          </p>\n" +
        "          <p><strong>Frist:</strong></p>\n" +
        "          <p>\n" +
        "            Spätestens fünf Wochen vor Fälligkeit im Original unterschrieben\n" +
        "            postalisch an Zinsunion&nbsp;senden:\n" +
        "          </p>\n" +
        "          <p><strong>Zinsunion</strong></p>\n" +
        "          <p>Postfach 13 02 07</p>\n" +
        "          <p><strong>13601 Berlin, Deutschland</strong></p>\n" +
        "          <p><strong>Musterbeispiel:</strong></p>\n" +
        "          <p>\n" +
        "            Bitte beachten Sie, dass es sich hierbei lediglich um\n" +
        "            ein&nbsp;<strong>Beispiel</strong>&nbsp;handelt. Die notwendigen\n" +
        "            Steuerunterlagen erhalten Sie wie beschrieben fristgerecht und\n" +
        "            personalisiert in Ihrer elektronischen Postbox im\n" +
        "            Zinsunion-Onlinebanking.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a\n" +
        "              href=\"/app/uploads/2016/06/irisches-steuerformular-non-resident-declaration.pdf\"\n" +
        "              >Musterbeispiel Non-resident Declaration</a\n" +
        "            >\n" +
        "          </p>\n" +
        "        </div>", country: "Irland"
    },
    {
      content: " <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                >Banken: Banca di Cividale, Banca Finint, Banca Ifis, Banca\n" +
        "                Popolare di Cortona, Banca Progetto, Banca Sistema, GBM Banca,\n" +
        "                illimity, imprebanca, Solution Bank, Vivibanca, Banca Privata\n" +
        "                Leasing</strong\n" +
        "              ></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            In Italien fällt keine Quellensteuer an. Es ist somit kein Nachweis\n" +
        "            erforderlich.\n" +
        "          </p>\n" +
        "        </div>", country: "Italien"
    },
    {
      content: "   <div >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                >Banken: Agram Banka, KentBank, Podravska banka</strong\n" +
        "              ></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <ul>\n" +
        "            <li>\n" +
        "              In Kroatien ist ein vom Kunden und Finanzamt\n" +
        "              unterschriebenes<strong\n" +
        "                >&nbsp;Steuerformular&nbsp;(Formular\n" +
        "                „Ansässigkeitsbescheinigung“)&nbsp;</strong\n" +
        "              >&nbsp;einzureichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Um die Bearbeitung durch die deutschen und im Anschluss\n" +
        "              kroatischen Steuerbehörden zu gewährleisten, reichen Sie bitte die\n" +
        "              jeweiligen Unterlagen erst im Zeitraum&nbsp;<strong\n" +
        "                >zwischen drei und sechs Monaten vor dem\n" +
        "                Zinszahlungstermin</strong\n" +
        "              >&nbsp;(Fälligkeit) bei Ihrem Finanzamt ein.&nbsp;Unterlagen mit\n" +
        "              einem früheren Bestätigungsdatum des Finanzamtes werden leider\n" +
        "              nicht akzeptiert.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong\n" +
        "                >mehrere Festgelder mit dem gleichen Jahr der Fälligkeit</strong\n" +
        "              >&nbsp;bei der Partnerbank haben, müssen Sie die\n" +
        "              Unterlagen&nbsp;<strong>nur einmal</strong>&nbsp;einreichen, auch\n" +
        "              wenn Sie pro Festgelderöffnung jeweils Unterlagen erhalten haben.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong\n" +
        "                >mehrere Festgelder mit unterschiedlichen\n" +
        "                Fälligkeitsjahren</strong\n" +
        "              >&nbsp;haben, müssen Sie die Unterlagen jeweils&nbsp;<strong\n" +
        "                >einmal pro Kalenderjahr</strong\n" +
        "              >&nbsp;der entsprechenden Fälligkeit einreichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Die entsprechenden Unterlagen zur Reduzierung der Quellensteuer\n" +
        "              legen wir mit\n" +
        "              der&nbsp;<strong>Festgeldbestätigung</strong>&nbsp;und den\n" +
        "              relevanten Steuerinformationen in Ihrer persönlichen Postbox im\n" +
        "              Zinsunion-Onlinebanking ab. Das ausgefüllte und unterschriebene\n" +
        "              Formular übermitteln wir selbstverständlich kostenlos im Original\n" +
        "              an die Partnerbank.\n" +
        "            </li>\n" +
        "          </ul>\n" +
        "          <p><strong>Quellensteuersatz:</strong></p>\n" +
        "          <p>12 %</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz:</strong></p>\n" +
        "          <p>0 % (keine Quellensteuer)</p>\n" +
        "          <p><strong>Einzureichendes Dokument:</strong></p>\n" +
        "          <p>Ansässigkeitsbescheinigung</p>\n" +
        "          <p><strong>Frist:</strong></p>\n" +
        "          <p>\n" +
        "            Spätestens vier Wochen vor der Fälligkeit im Original postalisch an\n" +
        "            Zinsunion senden:\n" +
        "          </p>\n" +
        "          <p><strong>Zinsunion</strong></p>\n" +
        "          <p>Postfach 13 02 07</p>\n" +
        "          <p><strong>13601 Berlin, Deutschland</strong></p>\n" +
        "          <p><strong>Musterbeispiel:</strong></p>\n" +
        "          <p>\n" +
        "            Bitte beachten Sie, dass es sich hierbei lediglich um\n" +
        "            ein&nbsp;<strong>Beispiel</strong>&nbsp;handelt. Die notwendigen\n" +
        "            Steuerunterlagen erhalten Sie wie beschrieben bei Festgelderöffnung\n" +
        "            und personalisiert in Ihrer elektronischen Postbox im\n" +
        "            Zinsunion-Onlinebanking.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a\n" +
        "              href=\"/app/uploads/2016/06/ansaessigkeitsbescheinigung.pdf\"\n" +
        "              target=\"_blank\"\n" +
        "              rel=\"noopener noreferrer\"\n" +
        "              >Musterbeispiel Ansässigkeitsbescheinigung</a\n" +
        "            >\n" +
        "          </p>\n" +
        "        </div>", country: "Kroatien"
    },
    {
      content: "    <div >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                >Banken: Baltic International Bank, BlueOrange Bank</strong\n" +
        "              ></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <ul>\n" +
        "            <li>\n" +
        "              In Lettland wird für Zinszahlungen ab dem 1. Januar 2018 eine\n" +
        "              Quellensteuer in Höhe von 20 % erhoben, die jedoch reduziert\n" +
        "              werden kann.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Dafür ist ein vom Kunden und Finanzamt unterschriebenes<strong\n" +
        "                >&nbsp;Steuerformular&nbsp;(Formular\n" +
        "                „Ansässigkeitsbescheinigung“)&nbsp;</strong\n" +
        "              >&nbsp;einzureichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Um die Bearbeitung durch die deutschen und im Anschluss lettischen\n" +
        "              Steuerbehörden zu gewährleisten, reichen Sie bitte die jeweiligen\n" +
        "              Unterlagen&nbsp;<strong\n" +
        "                >12 Monate (nicht früher!) vor Fälligkeit</strong\n" +
        "              >&nbsp;bei Ihrem Finanzamt ein. (Grund: Die lettische\n" +
        "              Steuerbehörde akzeptiert nur Steuerdokumente, die&nbsp;<strong\n" +
        "                >maximal 12 Monate vor Fälligkeit&nbsp;</strong\n" +
        "              >ausgestellt bzw. unterschrieben wurden.)\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong\n" +
        "                >mehrere Festgelder mit dem gleichen Jahr der Fälligkeit</strong\n" +
        "              >&nbsp;bei der Partnerbank haben, müssen Sie die\n" +
        "              Unterlagen&nbsp;<strong>nur einmal</strong\n" +
        "              >&nbsp;einreichen,&nbsp;sofern diese&nbsp;<strong\n" +
        "                >maximal 12 Monate vor Fälligkeit&nbsp;</strong\n" +
        "              >ausgestellt bzw. unterschrieben wurden, auch wenn Sie pro\n" +
        "              Festgelderöffnung jeweils die Unterlagen erhalten haben.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong\n" +
        "                >mehrere Festgelder mit unterschiedlichen\n" +
        "                Fälligkeitsjahren</strong\n" +
        "              >&nbsp;haben, müssen Sie die Unterlagen jeweils&nbsp;<strong\n" +
        "                >einmal pro Kalenderjahr</strong\n" +
        "              >&nbsp;der entsprechenden Fälligkeit einreichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Die entsprechenden Unterlagen zur Reduzierung der Quellensteuer\n" +
        "              legen wir mit\n" +
        "              der&nbsp;<strong>Festgeldbestätigung</strong>&nbsp;und den\n" +
        "              relevanten Steuerinformationen in Ihrer persönlichen Postbox im\n" +
        "              Zinsunion-Onlinebanking ab. Das ausgefüllte und unterschriebene\n" +
        "              Formular übermitteln wir selbstverständlich kostenlos im Original\n" +
        "              an die Partnerbank.\n" +
        "            </li>\n" +
        "          </ul>\n" +
        "          <p><strong>Quellensteuersatz:</strong></p>\n" +
        "          <p>20 % (reduzierbar)</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz:</strong></p>\n" +
        "          <p>10 %</p>\n" +
        "          <p><strong>Einzureichendes Dokument:</strong></p>\n" +
        "          <p>Ansässigkeitsbescheinigung</p>\n" +
        "          <p><strong>Frist:</strong></p>\n" +
        "          <p>\n" +
        "            Spätestens sechs Wochen vor der Fälligkeit im Original postalisch an\n" +
        "            Zinsunion senden:\n" +
        "          </p>\n" +
        "          <p><strong>Zinsunion</strong></p>\n" +
        "          <p>Postfach 13 02 07</p>\n" +
        "          <p><strong>13601 Berlin, Deutschland</strong></p>\n" +
        "          <p><strong>Musterbeispiel:</strong></p>\n" +
        "          <p>\n" +
        "            Bitte beachten Sie, dass es sich hierbei lediglich um\n" +
        "            ein&nbsp;<strong>Beispiel</strong>&nbsp;handelt. Die notwendigen\n" +
        "            Steuerunterlagen erhalten Sie wie beschrieben bei Festgelderöffnung\n" +
        "            und personalisiert in Ihrer elektronischen Postbox im\n" +
        "            Zinsunion-Onlinebanking.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a\n" +
        "              href=\"uploads/2016/06/ansaessigkeitsbescheinigung.pdf\"\n" +
        "              target=\"_blank\"\n" +
        "              rel=\"noopener noreferrer\"\n" +
        "              >Musterbeispiel Ansässigkeitsbescheinigung</a\n" +
        "            >\n" +
        "          </p>\n" +
        "        </div>", country: "Lettland"
    },
    {
      content: "\n" +
        "        <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong>Banken: Medicinos Bankas, Šiaulių Bankas</strong></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <strong>Vorgehensweise zur Reduzierung der Quellensteuer:</strong>\n" +
        "          </p>\n" +
        "          <ul>\n" +
        "            <li>\n" +
        "              In Litauen ist ein vom Kunden und Finanzamt ausgefüllter und\n" +
        "              unterschriebener Nachweis (Formular\n" +
        "              „<strong>Ansässigkeitsbescheinigung</strong>“) und zusätzlich ein\n" +
        "              vom Kunden unterschriebenes Formular „<strong\n" +
        "                >Claim for Reduction or Exemption from the anticipatory Tax\n" +
        "                withheld at Source</strong\n" +
        "              >“ („Antrag auf Freistellung von oder Reduzierung der\n" +
        "              Quellensteuer“) einzureichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Um die Bearbeitung durch die deutsche und im Anschluss litauische\n" +
        "              Steuerbehörde zu gewährleisten, reichen Sie bitte die jeweiligen\n" +
        "              Unterlagen erst im Zeitraum&nbsp;<strong\n" +
        "                >zwischen drei und sechs Monaten vor dem\n" +
        "                Zinszahlungstermin</strong\n" +
        "              >&nbsp;(Fälligkeit) bei Ihrem Finanzamt ein.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong>mehrere Festgelder</strong>&nbsp;bei der\n" +
        "              Partnerbank haben, müssen separate Unterlagen je Festgeld\n" +
        "              eingereicht werden.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Die entsprechenden Unterlagen zur Reduzierung der Quellensteuer\n" +
        "              legen wir mit\n" +
        "              der&nbsp;<strong>Festgeldbestätigung</strong>&nbsp;und den\n" +
        "              relevanten Steuerinformationen in Ihrer persönlichen Postbox im\n" +
        "              Zinsunion-Onlinebanking ab. Die ausgefüllten und unterschriebenen\n" +
        "              Unterlagen übermitteln wir selbstverständlich kostenlos im\n" +
        "              Original an die Partnerbank.\n" +
        "            </li>\n" +
        "          </ul>\n" +
        "          <p><strong>Quellensteuersatz:</strong></p>\n" +
        "          <p>15 %</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz:</strong></p>\n" +
        "          <p>\n" +
        "            10 % (voll anrechenbar, sofern nicht im Ausland erstattungsfähig)\n" +
        "          </p>\n" +
        "          <p><strong>Einzureichende Dokumente:</strong></p>\n" +
        "          <p>\n" +
        "            Ansässigkeitsbescheinigung, „Claim for Reduction or Exemption from\n" +
        "            the anticipatory Tax withheld at Source“ („Antrag auf Freistellung\n" +
        "            von oder Reduzierung der Quellensteuer“)\n" +
        "          </p>\n" +
        "          <p><strong>Frist:</strong></p>\n" +
        "          <p>\n" +
        "            Spätestens 4 Wochen vor Zinszahlung (das heißt, vor Fälligkeit) im\n" +
        "            Original postalisch an Zinsunion&nbsp;senden:\n" +
        "          </p>\n" +
        "          <p><strong>Zinsunion</strong></p>\n" +
        "          <p>Postfach 13 02 07</p>\n" +
        "          <p><strong>13601 Berlin, Deutschland</strong></p>\n" +
        "          <p><strong>Musterbeispiel:</strong></p>\n" +
        "          <p>\n" +
        "            Bitte beachten Sie, dass es sich hierbei lediglich um\n" +
        "            ein&nbsp;<strong>Beispiel</strong>&nbsp;handelt. Die notwendigen\n" +
        "            Steuerunterlagen erhalten Sie wie beschrieben fristgerecht und\n" +
        "            personalisiert in Ihrer elektronischen Postbox im\n" +
        "            Zinsunion-Onlinebanking.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a href=\"/app/uploads/2016/08/2017-08-11_mdb_asb_muster.pdf\"\n" +
        "              >Musterbeispiel Ansässigkeitsbescheinigung</a\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a href=\"/app/uploads/2016/08/2017-08-11_mdb_claim_muster.pdf\"\n" +
        "              >Musterbeispiel „Claim for Reduction or Exemption from the\n" +
        "              anticipatory Tax withheld at Source“</a\n" +
        "            >\n" +
        "          </p>\n" +
        "        </div>", country: "Litauen"
    },
    {
      content: "  <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                >Banken: Bank GPB International, Novo Banco, RCB Bank,\n" +
        "                RiverBank</strong\n" +
        "              ></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            In Luxemburg fällt keine Quellensteuer an. Es ist somit kein\n" +
        "            Nachweis erforderlich.\n" +
        "          </p>\n" +
        "        </div>", country: "Luxemburg"
    },
    {
      content: "   \n" +
        "        <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                >Banken: Izola Bank, Credorax Bank, MeDirect Bank<br /> </strong\n" +
        "            ></span>\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            In Malta fällt keine Quellensteuer an. Es ist somit kein Nachweis\n" +
        "            erforderlich.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                >Besonderheit: Izola Bank, Credorax Bank, MeDirect Bank<br /> </strong\n" +
        "            ></span>\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            Durch die Treuhandvereinbarung mit der Zinsunion Bank AG erfolgt ein\n" +
        "            direkter Steuereinbehalt in Deutschland. Sie können hierfür einen\n" +
        "            Freistellungsauftrag ausschließlich im Onlinebanking des\n" +
        "            Zinsunion-Kontos einrichten. Dieser Freitsellungsauftrag gilt für\n" +
        "            alle Banken mit Treuhandmodell. Wir bitten um Ihr Verständnis, dass\n" +
        "            ein Freistellungsauftrag nicht per Post, bzw. bei bereits erfolgter\n" +
        "            Zinsgutschrift (im gleichen Kalenderjahr), erteilt bzw. angepasst\n" +
        "            werden kann.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            Falls Sie eine Nichtveranlagerungsbescheinigung für die steuerliche\n" +
        "            Freistellung bei den Banken mit Treuhandmodell einreichen möchten,\n" +
        "            können Sie uns gerne ein Originalexemplar zusenden.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            Sie können die Nichtveranlagerungsbescheinigung an folgende\n" +
        "            Postanschrift senden:\n" +
        "          </p>\n" +
        "          <p>Zinsunion</p>\n" +
        "          <p>Postfach 13 02 07</p>\n" +
        "          <p>13601 Berlin, Deutschland</p>\n" +
        "        </div>", country: "Malta"
    },
    {
      content: "   <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong>Bank: DLL</strong></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            In den Niederlanden fällt keine Quellensteuer an. Es ist somit kein\n" +
        "            Nachweis erforderlich.\n" +
        "          </p>\n" +
        "        </div>", country: "Niederlande"
    },
    {
      content: "  <div >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                >Banken: BN Bank, Instabank, Komplett Bank, BRAbank</strong\n" +
        "              ></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            In Norwegen fällt keine Quellensteuer an. Es ist somit kein Nachweis\n" +
        "            erforderlich.\n" +
        "          </p>\n" +
        "        </div>", country: "Norwegen"
    },
    {
      content: "   <div >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong>Banken: Addiko Bank, Euram Bank<br /> </strong\n" +
        "            ></span>\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <strong\n" +
        "              >Für Abschlüsse ab 01.01.2018: Vorgehensweise zur Reduzierung der\n" +
        "              Quellensteuer:</strong\n" +
        "            >\n" +
        "          </p>\n" +
        "          <ul>\n" +
        "            <li>\n" +
        "              In Österreich ist ein vom Kunden und Finanzamt ausgefüllter und\n" +
        "              unterschriebener Nachweis (Formular „<strong\n" +
        "                >Erklärung natürlicher Personen für Zwecke\n" +
        "                innerstaatlicher&nbsp;</strong\n" +
        "              ><strong>Quellensteuerentlastung</strong>“) einzureichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Um die Bearbeitung durch die deutschen und im Anschluss\n" +
        "              österreichischen Steuerbehörden zu gewährleisten, reichen Sie\n" +
        "              bitte die jeweiligen Unterlagen erst im Zeitraum zwischen sechs\n" +
        "              und drei Monaten&nbsp;<strong\n" +
        "                >(Ausnahme Euram: Die Unterlagen können gern schon direkt nach\n" +
        "                Eröffnung eingereicht werden)</strong\n" +
        "              >&nbsp;vor Zinszahlung bei Ihrem Finanzamt ein. Diese gelten für 3\n" +
        "              bzw. 5 Jahre.&nbsp; (Die Gültigkeit der Unterlagen ist auf Seite 1\n" +
        "              des Formulars vermerkt.)\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong\n" +
        "                >mehrere Festgelder mit dem gleichen Jahr der\n" +
        "                Zinszahlung</strong\n" +
        "              >&nbsp;bei der Partnerbank haben, müssen Sie die Unterlagen alle 3\n" +
        "              bzw. 5 Jahre nur einmal einreichen, auch wenn Sie pro\n" +
        "              Festgelderöffnung jeweils Unterlagen erhalten haben.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Die entsprechenden Unterlagen zur Reduzierung der Quellensteuer\n" +
        "              legen wir mit\n" +
        "              der&nbsp;<strong>Festgeldbestätigung</strong>&nbsp;und den\n" +
        "              relevanten Steuerinformationen in Ihrer persönlichen Postbox im\n" +
        "              Zinsunion-Onlinebanking ab. Das ausgefüllte und unterschriebene\n" +
        "              Formular übermitteln wir selbstverständlich kostenlos im Original\n" +
        "              an die Partnerbank.\n" +
        "            </li>\n" +
        "          </ul>\n" +
        "          <p><strong>Quellensteuersatz:</strong></p>\n" +
        "          <p>25 %</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz:</strong></p>\n" +
        "          <p>0 % (keine Quellensteuer)</p>\n" +
        "          <p><strong>Einzureichendes Dokument:</strong></p>\n" +
        "          <p>\n" +
        "            Österreichisches Steuerformular „Erklärung natürlicher Personen für\n" +
        "            Zwecke innerstaatlicher Quellensteuerentlastung“\n" +
        "          </p>\n" +
        "          <p><strong>Frist:</strong></p>\n" +
        "          <p>\n" +
        "            Spätestens drei Wochen vor Zinszahlung (Zinskapitalisierung nach\n" +
        "            jedem Laufzeitjahr) im Original postalisch an Zinsunion&nbsp;senden:\n" +
        "          </p>\n" +
        "          <p><strong>Zinsunion</strong></p>\n" +
        "          <p><strong>Postfach 13 02 07</strong></p>\n" +
        "          <p><strong>13601 Berlin, Deutschland</strong></p>\n" +
        "          <p><strong>Musterbeispiel:</strong></p>\n" +
        "          <p>\n" +
        "            Bitte beachten Sie, dass es sich hierbei lediglich um\n" +
        "            ein&nbsp;<strong>Beispiel</strong>&nbsp;handelt. Die notwendigen\n" +
        "            Steuerunterlagen erhalten Sie wie beschrieben bei Festgelderöffnung\n" +
        "            und personalisiert in Ihrer elektronischen Postbox im\n" +
        "            Zinsunion-Onlinebanking.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a href=\"/app/uploads/2016/06/2018-03-27_bodytax_euram_muster.pdf\"\n" +
        "              >Musterbeispiel Österreichisches Steuerformular – Erklärung\n" +
        "              natürlicher Personen für Zwecke innerstaatlicher\n" +
        "              Quellensteuerentlastung</a\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>&nbsp;</p>\n" +
        "          <p>\n" +
        "            <strong\n" +
        "              >Für Abschlüsse bis 31.12.2017: Vorgehensweise zur Reduzierung der\n" +
        "              Quellensteuer:</strong\n" +
        "            >\n" +
        "          </p>\n" +
        "          <ul>\n" +
        "            <li>\n" +
        "              In Österreich ist ein vom Kunden und Finanzamt ausgefüllter und\n" +
        "              unterschriebener Nachweis (Formular „<strong\n" +
        "                >Erklärung natürlicher Personen für Zwecke der DBA –\n" +
        "                Quellensteuerentlastung</strong\n" +
        "              >“) einzureichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Um die Bearbeitung durch die deutschen und im Anschluss\n" +
        "              österreichischen Steuerbehörden zu gewährleisten, reichen Sie\n" +
        "              bitte die jeweiligen Unterlagen erst im Zeitraum zwischen sechs\n" +
        "              und drei Monaten&nbsp;<strong\n" +
        "                >(Ausnahme Euram: Unterlagen für das erste Jahr können gerne\n" +
        "                schon direkt nach Eröffnung eingereicht werden)</strong\n" +
        "              >&nbsp;vor jedem Zinszahlungstermin bei Ihrem Finanzamt ein.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong\n" +
        "                >mehrere Festgelder mit dem gleichen Jahr der\n" +
        "                Zinszahlung</strong\n" +
        "              >&nbsp;bei der Partnerbank haben, müssen Sie die Unterlagen pro\n" +
        "              Jahr nur einmal einreichen, auch wenn Sie pro Festgelderöffnung\n" +
        "              jeweils Unterlagen erhalten haben.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Die entsprechenden Unterlagen zur Reduzierung der Quellensteuer\n" +
        "              legen wir mit\n" +
        "              der&nbsp;<strong>Festgeldbestätigung</strong>&nbsp;und den\n" +
        "              relevanten Steuerinformationen in Ihrer persönlichen Postbox im\n" +
        "              Zinsunion-Onlinebanking ab. Das ausgefüllte und unterschriebene\n" +
        "              Formular übermitteln wir selbstverständlich kostenlos im Original\n" +
        "              an die Partnerbank.\n" +
        "            </li>\n" +
        "          </ul>\n" +
        "          <p><strong>Quellensteuersatz:</strong></p>\n" +
        "          <p>25 %</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz:</strong></p>\n" +
        "          <p>0 % (keine Quellensteuer)</p>\n" +
        "          <p><strong>Einzureichendes Dokument:</strong></p>\n" +
        "          <p>\n" +
        "            Österreichisches Steuerformular „Erklärung natürlicher Personen für\n" +
        "            Zwecke der DBA-Quellensteuerentlastung“\n" +
        "          </p>\n" +
        "          <p><strong>Frist:</strong></p>\n" +
        "          <p>\n" +
        "            Spätestens drei Wochen vor jeder Zinszahlung (Zinskapitalisierung\n" +
        "            nach jedem Laufzeitjahr) im Original postalisch an\n" +
        "            Zinsunion&nbsp;senden:\n" +
        "          </p>\n" +
        "          <p><strong>Zinsunion</strong></p>\n" +
        "          <p><strong>Postfach 13 02 07</strong></p>\n" +
        "          <p><strong>13601 Berlin, Deutschland</strong></p>\n" +
        "          <p><strong>Musterbeispiel:</strong></p>\n" +
        "          <p>\n" +
        "            Bitte beachten Sie, dass es sich hierbei lediglich um\n" +
        "            ein&nbsp;<strong>Beispiel</strong>&nbsp;handelt. Die notwendigen\n" +
        "            Steuerunterlagen erhalten Sie wie beschrieben bei Festgelderöffnung\n" +
        "            und personalisiert in Ihrer elektronischen Postbox im\n" +
        "            Zinsunion-Onlinebanking.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a\n" +
        "              href=\"/app/uploads/2016/06/muster-steuerformular-adb.pdf\"\n" +
        "              target=\"_blank\"\n" +
        "              rel=\"noopener noreferrer\"\n" +
        "              >Musterbeispiel Österreichisches Steuerformular – Erklärung\n" +
        "              natürlicher Personen für Zwecke der DBA-Quellensteuerentlastung</a\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <strong>Besonderheit Euram Bank&nbsp;</strong\n" +
        "            ><strong>für Abschlüsse bis zum 31. Dezember 2016:</strong>\n" +
        "          </p>\n" +
        "          <ul>\n" +
        "            <li>\n" +
        "              In Österreich ist ein vom Kunden und Finanzamt unterschriebenes\n" +
        "              Steuerformular („<strong\n" +
        "                >Bescheinigung zur Ermöglichung der Abstandnahme vom\n" +
        "                Quellensteuerabzug</strong\n" +
        "              >“) einzureichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Um die Bearbeitung durch die deutschen und im Anschluss\n" +
        "              österreichischen Steuerbehörden zu gewährleisten, reichen Sie\n" +
        "              bitte die Unterlagen&nbsp;<strong>direkt</strong>&nbsp;bei Ihrem\n" +
        "              Finanzamt ein.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong>mehrere Festgelder&nbsp;</strong>bei der\n" +
        "              Partnerbank in diesem Zeitraum abgeschlossen haben, müssen Sie die\n" +
        "              Unterlagen nur einmal einreichen, auch wenn Sie pro\n" +
        "              Festgelderöffnung jeweils Unterlagen erhalten haben.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Die entsprechenden Unterlagen zur Reduzierung der Quellensteuer\n" +
        "              haben Sie im&nbsp;<strong>Rahmen der Kontoeröffnung</strong\n" +
        "              >&nbsp;in Ihrer persönlichen Postbox im Zinsunion-Onlinebanking\n" +
        "              erhalten. Das ausgefüllte und unterschriebene Formular übermitteln\n" +
        "              wir selbstverständlich kostenlos an die Partnerbank.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Für Abschlüsse im&nbsp;<strong\n" +
        "                >Zeitraum zwischen 1. Oktober bis 31. Dezember 2016</strong\n" +
        "              >&nbsp;ist kein Steuerdokument einzureichen.\n" +
        "            </li>\n" +
        "          </ul>\n" +
        "          <p><strong>Quellensteuersatz:</strong></p>\n" +
        "          <p>35 %</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz:</strong></p>\n" +
        "          <p>0 % (keine Quellensteuer)</p>\n" +
        "          <p><strong>Einzureichendes Dokument:</strong></p>\n" +
        "          <p>\n" +
        "            Österreichisches Steuerformular „Bescheinigung zur Ermöglichung der\n" +
        "            Abstandnahme vom Quellensteuerabzug“\n" +
        "          </p>\n" +
        "          <p><strong>Frist:</strong></p>\n" +
        "          <p>\n" +
        "            Steuerformular muss zwingend vor dem Laufzeitende an Zinsunion\n" +
        "            gesendet werden:\n" +
        "          </p>\n" +
        "          <h6>\n" +
        "            Zinsunion<br />\n" +
        "            Postfach 13 02 07\n" +
        "          </h6>\n" +
        "          <p>13601 Berlin, Deutschland</p>\n" +
        "          <p><strong>Musterbeispiel:</strong></p>\n" +
        "          <p>\n" +
        "            Bitte beachten Sie, dass es sich hierbei lediglich um\n" +
        "            ein&nbsp;<strong>Beispiel</strong>&nbsp;handelt. Die notwendigen\n" +
        "            Steuerunterlagen erhalten Sie wie beschrieben bei Festgelderöffnung\n" +
        "            und personalisiert in Ihrer elektronischen Postbox im\n" +
        "            Zinsunion-Onlinebanking.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a\n" +
        "              href=\"/app/uploads/2016/06/oesterreichisches-steuerformular-bescheinigung-zur-ermoeglichung-der-abstandnahme-vom-quellensteuerabzug.pdf\"\n" +
        "              target=\"_blank\"\n" +
        "              rel=\"noopener noreferrer\"\n" +
        "              >Musterbeispiel Österreichisches Steuerformular für die Euram\n" +
        "              Bank- Bescheinigung zur Ermöglichung der Abstandnahme vom\n" +
        "              Quellensteuerabzug</a\n" +
        "            >\n" +
        "          </p>\n" +
        "        </div>", country: "Österreich"
    },
    {
      content: "\n" +
        "        <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong>Banken: Alior Bank, BOŚ Bank</strong></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <strong>Vorgehensweise zur Reduzierung der Quellensteuer:</strong>\n" +
        "          </p>\n" +
        "          <ul>\n" +
        "            <li>\n" +
        "              In Polen ist ein vom Kunden und Finanzamt unterschriebener\n" +
        "              Nachweis (Formular „<strong>Ansässigkeitsbescheinigung</strong>“)\n" +
        "              einzureichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Um die Bearbeitung durch die deutschen und im Anschluss polnischen\n" +
        "              Steuerbehörden zu gewährleisten, reichen Sie bitte die jeweiligen\n" +
        "              Unterlagen erst im Zeitraum<strong\n" +
        "                >&nbsp;zwischen drei und sechs Monaten vor dem\n" +
        "                Zinszahlungstermin</strong\n" +
        "              >&nbsp;(Fälligkeit) bei Ihrem Finanzamt ein.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong\n" +
        "                >mehrere Festgelder mit dem gleichen Jahr der Fälligkeit</strong\n" +
        "              >&nbsp;bei der Partnerbank haben, müssen Sie die Unterlagen nur\n" +
        "              einmal einreichen, auch wenn Sie pro Festgelderöffnung jeweils\n" +
        "              Unterlagen erhalten haben.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong\n" +
        "                >mehrere Festgelder mit unterschiedlichen\n" +
        "                Fälligkeitsjahren</strong\n" +
        "              >&nbsp;haben, müssen Sie die Unterlagen jeweils einmal pro\n" +
        "              Kalenderjahr der entsprechenden Fälligkeit einreichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Die entsprechenden Unterlagen zur Reduzierung der Quellensteuer\n" +
        "              legen wir mit\n" +
        "              der&nbsp;<strong>Festgeldbestätigung</strong>&nbsp;und den\n" +
        "              relevanten Steuerinformationen in Ihrer persönlichen Postbox im\n" +
        "              Zinsunion-Onlinebanking ab. Das ausgefüllte und unterschriebene\n" +
        "              Formular übermitteln wir selbstverständlich kostenlos im Original\n" +
        "              an die Partnerbank.\n" +
        "            </li>\n" +
        "          </ul>\n" +
        "          <p><strong>Quellensteuersatz:</strong></p>\n" +
        "          <p>19 %</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz:</strong></p>\n" +
        "          <p>\n" +
        "            5 % (voll anrechenbar, sofern nicht im Ausland erstattungsfähig)\n" +
        "          </p>\n" +
        "          <p><strong>Einzureichendes Dokument:</strong></p>\n" +
        "          <p>Ansässigkeitsbescheinigung</p>\n" +
        "          <p><strong>Frist:</strong></p>\n" +
        "          <p>\n" +
        "            Spätestens sechs Wochen vor Zinszahlung (das heißt, vor Fälligkeit)\n" +
        "            im Original postalisch an Zinsunion&nbsp;senden:\n" +
        "          </p>\n" +
        "          <p><strong>Zinsunion</strong></p>\n" +
        "          <p>Postfach 13 02 07</p>\n" +
        "          <p><strong>13601 Berlin, Deutschland</strong></p>\n" +
        "          <p><strong>Musterbeispiel:</strong></p>\n" +
        "          <p>\n" +
        "            Bitte beachten Sie, dass es sich hierbei lediglich um\n" +
        "            ein&nbsp;<strong>Beispiel</strong>&nbsp;handelt. Die notwendigen\n" +
        "            Steuerunterlagen erhalten Sie wie beschrieben bei Festgelderöffnung\n" +
        "            und personalisiert in Ihrer elektronischen Postbox im\n" +
        "            Zinsunion-Onlinebanking.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a\n" +
        "              href=\"/app/uploads/2016/06/ansaessigkeitsbescheinigung.pdf\"\n" +
        "              target=\"_blank\"\n" +
        "              rel=\"noopener\"\n" +
        "              >Musterbeispiel Ansässigkeitsbescheinigung</a\n" +
        "            >\n" +
        "          </p>\n" +
        "        </div>", country: "Polen"
    },
    {
      content: "    <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                >Banken: Banco BAI Europa, Banco BNI Europa, Haitong Bank, Banco\n" +
        "                Português de Gestão</strong\n" +
        "              ></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <strong>Vorgehensweise zur Reduzierung der Quellensteuer:</strong>\n" +
        "          </p>\n" +
        "          <ul>\n" +
        "            <li>\n" +
        "              In Portugal ist ein vom Kunden und Finanzamt unterschriebener\n" +
        "              Nachweis (Formular „Ansässigkeitsbescheinigung“) sowie ein\n" +
        "              <strong>portugiesisches Steuerformular</strong>&nbsp;einzureichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Um die Bearbeitung durch die deutschen und im Anschluss\n" +
        "              portugiesischen Steuerbehörden zu gewährleisten, reichen Sie bitte\n" +
        "              die jeweiligen Unterlagen&nbsp;<strong\n" +
        "                >12 Monate (nicht früher!) vor Fälligkeit</strong\n" +
        "              >&nbsp;bei Ihrem Finanzamt ein. (Grund: Die portugiesische\n" +
        "              Steuerbehörde akzeptiert nur Steuerdokumente, die&nbsp;<strong\n" +
        "                >maximal 12 Monate vor Fälligkeit&nbsp;</strong\n" +
        "              >ausgestellt bzw. unterschrieben wurden.)\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong>mehrere Festgelder&nbsp;</strong>bei der\n" +
        "              Partnerbank haben, müssen Sie die Unterlagen mehrmals einreichen –\n" +
        "              für&nbsp;<b\n" +
        "                >jede von Ihnen abgeschlossene Festgeldanlage separat&nbsp;</b\n" +
        "              >und maximal 12 Monate vor der jeweiligen Fälligkeit.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Die entsprechenden Unterlagen zur Reduzierung der Quellensteuer\n" +
        "              stellen wir Ihnen nach Eröffnung des Festgelds über Ihr\n" +
        "              persönliches Zinsunion-Onlinebanking zur Verfügung. Die\n" +
        "              ausgefüllten und unterschriebenen Formulare übermitteln wir\n" +
        "              selbstverständlich kostenlos im Original an die Partnerbank.\n" +
        "            </li>\n" +
        "          </ul>\n" +
        "          <p><strong>Quellensteuersatz</strong></p>\n" +
        "          <p>28 %</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz</strong></p>\n" +
        "          <p>\n" +
        "            15 % (voll anrechenbar, sofern nicht im Ausland erstattungsfähig)\n" +
        "          </p>\n" +
        "          <p><strong>Einzureichende Dokumente:</strong></p>\n" +
        "          <p>Ansässigkeitsbescheinigung</p>\n" +
        "          <p>\n" +
        "            Portugiesisches Steuerformular „CLAIM FOR TOTAL OR PARTIAL EXEMPTION\n" +
        "            FROM PORTUGUESE WITHHOLDING TAX, UNDER THE CONVENTION FOR THE\n" +
        "            AVOIDANCE OF DOUBLE TAXATION BETWEEN PORTUGAL AND GERMANY“ mit\n" +
        "            englischer Übersetzung und deutschsprachigen Ausfüllhinweisen\n" +
        "          </p>\n" +
        "          <p><strong>Frist</strong></p>\n" +
        "          <p>\n" +
        "            Spätestens vier Wochen vor Zinszahlung (das heißt, vor Fälligkeit)\n" +
        "            im Original postalisch an Zinsunion&nbsp;senden:\n" +
        "          </p>\n" +
        "          <p><strong>Zinsunion</strong></p>\n" +
        "          <p>Postfach 13 02 07</p>\n" +
        "          <p><strong>13601 Berlin, Deutschland</strong></p>\n" +
        "          <p><strong>Musterbeispiel:</strong></p>\n" +
        "          <p>\n" +
        "            Bitte beachten Sie, dass es sich hierbei lediglich um\n" +
        "            ein&nbsp;<strong>Beispiel</strong>&nbsp;handelt. Die notwendigen\n" +
        "            Steuerunterlagen erhalten Sie wie beschrieben fristgerecht und\n" +
        "            personalisiert in Ihrer elektronischen Postbox im\n" +
        "            Zinsunion-Onlinebanking.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a\n" +
        "              href=\"/app/uploads/2016/06/portguiesisches-steuerformular-rfi-21.pdf\"\n" +
        "              target=\"_blank\"\n" +
        "              rel=\"noopener\"\n" +
        "              >Musterbeispiel Portugiesisches Steuerformular „21-RFI“</a\n" +
        "            >\n" +
        "          </p>\n" +
        "        </div>", country: "Portugal"
    },
    {
      content: "  <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                >Banken: Aros Kapital, Avida Finans, Collector Bank, Hoist\n" +
        "                Finance, Nordax Bank, Nordiska, Resurs Bank, TF Bank</strong\n" +
        "              ></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            In Schweden fällt keine Quellensteuer an. Es ist somit kein Nachweis\n" +
        "            erforderlich.\n" +
        "          </p>\n" +
        "        </div>", country: "Schweden"
    },
    {
      content: "   <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                >Banken: Banca Farmafactoring, Banco Finantia Spain</strong\n" +
        "              ></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <ul>\n" +
        "            <li>\n" +
        "              In Spanien ist bei der Kontoeröffnung ein vom Kunden\n" +
        "              unterschriebenes Steuerformular („<strong\n" +
        "                >Declaración de Residencia Fiscal</strong\n" +
        "              >“) zur Reduzierung der Quellensteuer einzureichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              &nbsp;Das Formular senden Sie bitte für die\n" +
        "              <strong>Banca Farmafectoring im Original</strong> an Zinsunion,\n" +
        "              wir übermitteln es dann an die Partnerbank. Für die\n" +
        "              <strong>Banca Fiantia Spain</strong> können sie uns dieses auch\n" +
        "              <strong>alternativ als Scan</strong> zur Verfügung stellen.\n" +
        "            </li>\n" +
        "          </ul>\n" +
        "          <p><strong>Quellensteuersatz:</strong></p>\n" +
        "          <p>19 %</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz:</strong></p>\n" +
        "          <p>0 % (keine Quellensteuer)</p>\n" +
        "          <p><strong>Einzureichendes Dokument:</strong></p>\n" +
        "          <p>\n" +
        "            Vorbefülltes Spanisches Steuerformular („<strong\n" +
        "              >Declaración de Residencia Fiscal</strong\n" +
        "            >“) mit&nbsp;deutschsprachigen Ausfüllhinweisen.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <strong\n" +
        "              >Falls Sie mehrere Festgelder bei derselben Partnerbank\n" +
        "              haben:</strong\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            Dieses Formular muss nur einmal pro Person eingereicht werden und\n" +
        "            ist daher nur bei Eröffnung des ersten Festgelds erforderlich.\n" +
        "          </p>\n" +
        "          <p><strong>Frist:</strong></p>\n" +
        "          <p>\n" +
        "            Steuerformular unterschrieben&nbsp;für Banca Finantia\n" +
        "            Spain&nbsp;<strong>als Scan oder im Original</strong>\n" +
        "            bei&nbsp;Zinsunion einreichen&nbsp;(für Banca Farmafactoring ist\n" +
        "            zwingend das Original per Post erforderlich).&nbsp;Entweder bequem\n" +
        "            aus dem Onlinebanking hochladen oder alternativ als Anhang per\n" +
        "            E-Mail an&nbsp;service@mail-zinsunion.com&nbsp;senden oder die\n" +
        "            Unterlagen an folgende Postanschrift schicken:\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <strong>Zinsunion,&nbsp;</strong\n" +
        "            ><strong>Postfach 13 02 07,&nbsp;</strong\n" +
        "            ><strong>13601 Berlin, Deutschland</strong>\n" +
        "          </p>\n" +
        "          <p><strong>Musterbeispiel:</strong></p>\n" +
        "          <p>\n" +
        "            Bitte beachten Sie, dass es sich hierbei lediglich um\n" +
        "            ein&nbsp;<strong>Beispiel</strong>&nbsp;handelt. Die notwendigen\n" +
        "            Steuerunterlagen erhalten Sie bei Kontoeröffnung mit\n" +
        "            deutschsprachigen Ausfüllhinweisen.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a\n" +
        "              href=\"/app/uploads/2018/06/steuerformular-declaracion-de-residencia-fiscal.pdf\"\n" +
        "              >Spanisches Steuerformular&nbsp;Declaración de Residencia\n" +
        "              Fiscal</a\n" +
        "            >\n" +
        "          </p>\n" +
        "        </div>", country: "Spanien"
    },
    {
      content: "   <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong\n" +
        "                >Bank: J&amp;T Banka (Falls Sie Ihr Festgeld nach dem 18.01.2016\n" +
        "                bei der J&amp;T Banka eröffnet haben, gilt für Sie die\n" +
        "                tschechische steuerliche Behandlung)</strong\n" +
        "              ></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <ul>\n" +
        "            <li>\n" +
        "              In der Slowakei ist ein vom Kunden und Finanzamt unterschriebener\n" +
        "              Nachweis (Formular „<strong>Ansässigkeitsbescheinigung</strong>“)\n" +
        "              einzureichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Um die Bearbeitung durch die deutschen und im Anschluss\n" +
        "              slowakischen Steuerbehörden zu gewährleisten, reichen Sie bitte\n" +
        "              die jeweiligen Unterlagen erst im Zeitraum&nbsp;<strong\n" +
        "                >zwischen drei und sechs Monaten vor dem ersten\n" +
        "                Zinszahlungstermin</strong\n" +
        "              >&nbsp;bei Ihrem Finanzamt ein.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong\n" +
        "                >mehrere Festgelder mit dem gleichen Jahr der\n" +
        "                Zinszahlung</strong\n" +
        "              >&nbsp;bei der Partnerbank haben, müssen Sie die Unterlagen bzw.\n" +
        "              Erklärungen nur einmal einreichen, auch wenn Sie pro\n" +
        "              Festgelderöffnung jeweils Unterlagen erhalten haben.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong>mehrere Festgelder mit</strong\n" +
        "              >&nbsp;<strong>unterschiedlichen Zinszahlungsjahren</strong\n" +
        "              >&nbsp;haben, müssen Sie die Unterlagen bzw. Erklärungen pro\n" +
        "              Kalenderjahr einreichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Die entsprechenden Unterlagen zur Reduzierung der Quellensteuer\n" +
        "              legen wir mit\n" +
        "              der&nbsp;<strong>Festgeldbestätigung</strong>&nbsp;und den\n" +
        "              relevanten Steuerinformationen in Ihrer persönlichen Postbox im\n" +
        "              Zinsunion-Onlinebanking ab. Das ausgefüllte und unterschriebene\n" +
        "              Formular übermitteln wir selbstverständlich kostenlos im Original\n" +
        "              an die Partnerbank.\n" +
        "            </li>\n" +
        "          </ul>\n" +
        "          <p><strong>Quellensteuersatz:</strong></p>\n" +
        "          <p>19 %</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz:</strong></p>\n" +
        "          <p>0 % (keine Quellensteuer)</p>\n" +
        "          <p><strong>Einzureichendes Dokument:</strong></p>\n" +
        "          <p>Ansässigkeitsbescheinigung</p>\n" +
        "          <p><strong>Frist:</strong></p>\n" +
        "          <p>\n" +
        "            Spätestens vier Wochen vor der ersten Zinszahlung\n" +
        "            (Zinskapitalisierung nach dem ersten Jahr der Laufzeit) im Original\n" +
        "            postalisch an Zinsunion senden. In den Zwischenjahren (spätestens\n" +
        "            vier Wochen vor der Zinszahlung) genügt eine im Onlinebanking\n" +
        "            abgegebene Erklärung zur Ansässigkeit. Bitte beachten Sie, dass Sie\n" +
        "            eine im Onlinebanking abgegebene Erklärung zur Ansässigkeit für die\n" +
        "            Zwischenjahre nur einreichen können, wenn Sie vorher mindestens eine\n" +
        "            Ansässigkeitsbescheinigung eingereicht hatten.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <strong\n" +
        "              >Zinsunion,&nbsp;Postfach 13 02 07,&nbsp;13601 Berlin,\n" +
        "              Deutschland</strong\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p><strong>Musterbeispiel:</strong></p>\n" +
        "          <p>\n" +
        "            Bitte beachten Sie, dass es sich hierbei lediglich um\n" +
        "            ein&nbsp;<strong>Beispiel</strong>&nbsp;handelt. Die notwendigen\n" +
        "            Steuerunterlagen erhalten Sie wie beschrieben fristgerecht und\n" +
        "            personalisiert in Ihrer elektronischen Postbox im\n" +
        "            Zinsunion-Onlinebanking.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a\n" +
        "              href=\"/app/uploads/2016/06/ansaessigkeitsbescheinigung.pdf\"\n" +
        "              target=\"_blank\"\n" +
        "              rel=\"noopener\"\n" +
        "              >Musterbeispiel Ansässigkeitsbescheinigung</a\n" +
        "            >\n" +
        "          </p>\n" +
        "        </div>", country: "Slowakische Republik"
    },
    {
      content: "  <div  >\n" +
        "          <p>\n" +
        "            <span style=\"text-decoration: underline\"\n" +
        "              ><strong>Banken: Expobank, J&amp;T Banka</strong></span\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <strong\n" +
        "              >Behandlung für Festgelderöffnungen bei J&amp;T Banka ab dem\n" +
        "              04.01.2018 oder bei Expobank: </strong\n" +
        "            >Spätestens 4 Wochen vor Fälligkeit ist eine\n" +
        "            Ansässigkeitsbescheinigung im Original einzureichen. Zur\n" +
        "            Festgelderöffnung bzw. in den Zwischenjahren ist keine Erklärung zur\n" +
        "            Ansässigkeit notwendig.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <strong>Vorgehensweise zur Reduzierung der Quellensteuer:</strong>\n" +
        "          </p>\n" +
        "          <ul>\n" +
        "            <li>\n" +
        "              In Tschechien ist ein vom Kunden und Finanzamt unterschriebener\n" +
        "              Nachweis (Formular „<strong>Ansässigkeitsbescheinigung</strong>“)\n" +
        "              einzureichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Um die Bearbeitung durch die deutschen und im Anschluss\n" +
        "              tschechischen Steuerbehörden zu gewährleisten, reichen Sie bitte\n" +
        "              die jeweiligen Unterlagen&nbsp;<strong\n" +
        "                >90 Tage (nicht früher!) vor Fälligkeit</strong\n" +
        "              >&nbsp;bei Ihrem Finanzamt ein. (Grund: Die tschechische\n" +
        "              Steuerbehörde akzeptiert nur Steuerdokumente, die&nbsp;<strong\n" +
        "                >maximal 90 Tage vor Fälligkeit</strong\n" +
        "              >&nbsp;ausgestellt bzw. unterschrieben wurden.)\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong\n" +
        "                >mehrere Festgelder mit dem gleichen Jahr der Fälligkeit</strong\n" +
        "              >&nbsp;bei der Partnerbank haben, müssen Sie die Unterlagen nur\n" +
        "              einmal einreichen, sofern diese maximal 90 Tage vor\n" +
        "              Fälligkeit&nbsp;<strong>jedes</strong>&nbsp;Festgelds ausgestellt\n" +
        "              bzw. unterschrieben wurden, auch wenn Sie pro Festgelderöffnung\n" +
        "              jeweils Unterlagen erhalten haben.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong>mehrere Festgelder mit</strong\n" +
        "              >&nbsp;<strong>unterschiedlichen Jahren der Fälligkeit</strong\n" +
        "              >&nbsp;haben, müssen Sie die Unterlagen pro Kalenderjahr\n" +
        "              einreichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Die entsprechenden Unterlagen zur Reduzierung der Quellensteuer\n" +
        "              legen wir mit\n" +
        "              der&nbsp;<strong>Festgeldbestätigung</strong>&nbsp;und den\n" +
        "              relevanten Steuerinformationen in Ihrer persönlichen Postbox im\n" +
        "              Zinsunion-Onlinebanking ab. Das ausgefüllte und unterschriebene\n" +
        "              Formular übermitteln wir selbstverständlich kostenlos im Original\n" +
        "              an die Partnerbank.\n" +
        "            </li>\n" +
        "          </ul>\n" +
        "          <p><strong>Quellensteuersatz:</strong></p>\n" +
        "          <p>15 %</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz:</strong></p>\n" +
        "          <p>0 % (keine Quellensteuer)</p>\n" +
        "          <p><strong>Einzureichendes Dokument:</strong></p>\n" +
        "          <p>Ansässigkeitsbescheinigung</p>\n" +
        "          <p><strong>Frist:</strong></p>\n" +
        "          <p>\n" +
        "            Spätestens 4 Wochen vor Zinszahlung&nbsp;(das heißt, vor Fälligkeit)\n" +
        "            senden Sie das ausgefüllte und unterschriebene Formular&nbsp;im\n" +
        "            Original postalisch&nbsp;an Zinsunion:\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            Zinsunion,&nbsp;Postfach 13 02 07,&nbsp;13601 Berlin, Deutschland\n" +
        "          </p>\n" +
        "          <p>&nbsp;</p>\n" +
        "          <p>\n" +
        "            <strong\n" +
        "              >Behandlung für Festgelderöffnungen bei J&amp;T Banka zwischen dem\n" +
        "              25.01.2016 und dem 01.01.2018:&nbsp;</strong\n" +
        "            >Spätestens vier Wochen vor der ersten Zinszahlung\n" +
        "            (Zinskapitalisierung nach dem ersten Jahr der Laufzeit) und bei\n" +
        "            mehrjährigen Festgeldprodukten zusätzlich vor der Fälligkeit (sowie\n" +
        "            beim Festgeld über 120 Monate zusätzlich nach 5 Jahren) ist eine\n" +
        "            Ansässigkeitsbescheinigung im Original einzureichen. In den\n" +
        "            Zwischenjahren (spätestens vier Wochen vor der Zinszahlung) genügt\n" +
        "            eine im Onlinebanking abgegebene Selbsterklärung zum Zwecke der\n" +
        "            Steuerentlastung. Bitte beachten Sie, dass Sie eine solche im\n" +
        "            Onlinebanking abgegebene Erklärung für die Zwischenjahre nur\n" +
        "            einreichen können, wenn Sie vorher mindestens eine\n" +
        "            Ansässigkeitsbescheinigung fristgerecht eingereicht hatten.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <strong>Vorgehensweise zur Reduzierung der Quellensteuer:</strong>\n" +
        "          </p>\n" +
        "          <ul>\n" +
        "            <li>\n" +
        "              In Tschechien ist ein vom Kunden und Finanzamt unterschriebener\n" +
        "              Nachweis (Formular „<strong>Ansässigkeitsbescheinigung</strong>“)\n" +
        "              sowie bei mehrjährigen Festgeldern zusätzlich eine oder mehrere\n" +
        "              vom Kunden unterschriebene Selbsterklärungen (Formular „<strong\n" +
        "                >Selbsterklärung zum Zwecke der Steuerentlastung</strong\n" +
        "              >“) einzureichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Um die Bearbeitung durch die deutschen und im Anschluss\n" +
        "              tschechischen Steuerbehörden zu gewährleisten, reichen Sie bitte\n" +
        "              die Ansässigkeitsbescheinigungen&nbsp;<strong\n" +
        "                >drei Monate (nicht früher!) vor dem Zinszahlungstermin</strong\n" +
        "              >&nbsp;bei Ihrem Finanzamt ein. (Grund: Die tschechische\n" +
        "              Steuerbehörde akzeptiert nur Steuerdokumente, die&nbsp;<strong\n" +
        "                >maximal 90 Tage vor Fälligkeit</strong\n" +
        "              >&nbsp;ausgestellt bzw. unterschrieben wurden.)\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Um die Bearbeitung durch die tschechischen Steuerbehörden zu\n" +
        "              gewährleisten, füllen Sie die Selbsterklärungen&nbsp;<strong\n" +
        "                >maximal drei Monate (nicht früher!) vor dem\n" +
        "                Zinszahlungstermin</strong\n" +
        "              >&nbsp;aus. (Grund: Die tschechische Steuerbehörde akzeptiert nur\n" +
        "              Steuerdokumente, die&nbsp;<strong\n" +
        "                >maximal 90 Tage vor Fälligkeit</strong\n" +
        "              >&nbsp;ausgestellt bzw. unterschrieben wurden.)\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong\n" +
        "                >mehrere Festgelder mit dem gleichen Jahr der\n" +
        "                Zinszahlung</strong\n" +
        "              >&nbsp;bei der Partnerbank haben, müssen Sie die Unterlagen nur\n" +
        "              einmal einreichen, sofern diese maximal 90 Tage vor\n" +
        "              Fälligkeit&nbsp;<strong>jedes</strong>&nbsp;Festgelds ausgestellt\n" +
        "              bzw. unterschrieben wurden, auch wenn Sie pro Festgelderöffnung\n" +
        "              jeweils Unterlagen erhalten haben.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Falls Sie&nbsp;<strong>mehrere Festgelder mit</strong\n" +
        "              >&nbsp;<strong>unterschiedlichen Jahren der Zinszahlung</strong\n" +
        "              >&nbsp;haben, müssen Sie die Unterlagen pro Kalenderjahr\n" +
        "              einreichen.\n" +
        "            </li>\n" +
        "            <li>\n" +
        "              Die entsprechenden Unterlagen zur Reduzierung der Quellensteuer\n" +
        "              legen wir mit\n" +
        "              der&nbsp;<strong>Festgeldbestätigung</strong>&nbsp;und den\n" +
        "              relevanten Steuerinformationen in Ihrer persönlichen Postbox im\n" +
        "              Zinsunion-Onlinebanking ab. Das ausgefüllte und unterschriebene\n" +
        "              Formular übermitteln wir selbstverständlich kostenlos im Original\n" +
        "              an die Partnerbank.\n" +
        "            </li>\n" +
        "          </ul>\n" +
        "          <p><strong>Quellensteuersatz:</strong></p>\n" +
        "          <p>15 %</p>\n" +
        "          <p><strong>Reduzierter Quellensteuersatz:</strong></p>\n" +
        "          <p>0 % (keine Quellensteuer)</p>\n" +
        "          <p><strong>Einzureichendes Dokument:</strong></p>\n" +
        "          <p>\n" +
        "            Ansässigkeitsbescheinigung sowie bei mehrjährigen Festgeldern eine\n" +
        "            oder mehrere Selbsterklärungen\n" +
        "          </p>\n" +
        "          <p><strong>Frist:</strong></p>\n" +
        "          <p>\n" +
        "            Spätestens 4 Wochen vor jeder Zinszahlung&nbsp;senden Sie das\n" +
        "            ausgefüllte und unterschriebene Formular&nbsp;im Original\n" +
        "            postalisch&nbsp;an Zinsunion:\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            Zinsunion,&nbsp;Postfach 13 02 07,&nbsp;13601 Berlin, Deutschland\n" +
        "          </p>\n" +
        "          <p>&nbsp;</p>\n" +
        "          <p>\n" +
        "            <strong\n" +
        "              >Falls Sie Ihr Festgeld vor dem 25.01.2016 bei der J&amp;T Banka\n" +
        "              eröffnet haben, gilt für Sie die slowakische steuerliche\n" +
        "              Behandlung.</strong\n" +
        "            >\n" +
        "          </p>\n" +
        "          <p>&nbsp;</p>\n" +
        "          <p><strong>Musterbeispiel:</strong></p>\n" +
        "          <p>\n" +
        "            Bitte beachten Sie, dass es sich hierbei lediglich um\n" +
        "            ein&nbsp;<strong>Beispiel</strong>&nbsp;handelt. Die notwendigen\n" +
        "            Steuerunterlagen erhalten Sie wie beschrieben fristgerecht und\n" +
        "            personalisiert in Ihrer elektronischen Postbox im\n" +
        "            Zinsunion-Onlinebanking.\n" +
        "          </p>\n" +
        "          <p>\n" +
        "            <a\n" +
        "              href=\"/app/uploads/2016/06/ansaessigkeitsbescheinigung.pdf\"\n" +
        "              target=\"_blank\"\n" +
        "              rel=\"noopener\"\n" +
        "              >Musterbeispiel Ansässigkeitsbescheinigung</a\n" +
        "            >\n" +
        "          </p>\n" +
        "        </div>", country: "Tschechische Republik"
    },
  ]

  public menu_value: number = 0;
  public menu_value_info: number = 0;
  public menu_value_bank: number = 0;
  public content_bank: any = this.countries[0].content;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.countries[0].content);
  }

  setMenuOneValue(inputNum: number) {
    this.menu_value = inputNum;
  }

  setMenuOneValueBank(inputNum: number, content: any) {
    this.menu_value_bank = inputNum;
    this.content_bank = content;
    // console.log(this.content_bank);
  }

  setMenuOneValueInfo(inputNum: number) {
    this.menu_value_info = inputNum;
  }

}
