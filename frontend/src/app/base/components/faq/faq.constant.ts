import {ListCategory, Question} from './question.model';

export const QUESTION_LIST: Question[] = [
  {
    title: 'Was ist ZinsUnion?',
    content: `
     <p>ZinsUnion ist die führende Plattform für Geldanlage. Mehr als 370.000 zufriedene Anleger
    haben uns bereits Ihr Geld anvertraut und über 37,0 Milliarden EUR angelegt.</p>
    <p><strong>Aktuell finden Anleger auf ZinsUnion:</strong></p>
    <ul>
        <li>attraktiv verzinste <a routerLink="/tagesgeld/">Tagesgelder</a>
            und <a routerLink="/festgeld/">Festgelder</a> aus ganz Europa
        </li>
        <li>Geldanlage bis zu 100.000 EUR je Kunde und Bank abgesichert</li>
    </ul>
    <p>&nbsp;</p>
    <p>Alle Anlagen können mit der <a routerLink="/auth/register">einmaligen
            Registrierung</a> und Eröffnung eines Zinsunion-Kontos abgeschlossen und verwaltet
        werden.</p>
    <p>Wie ZinsUnion genau funktioniert, erfahren Sie <a
    routerLink="/so-funktionierts/">hier.</a></p>
  `,
    category: ListCategory.category1,
    expanded: false,
  },
  {
    title: `Wie kann ich sicher sein, dass ZinsUnion ein seriöser Anbieter ist?`,
    content: `<p>Hinter ZinsUnion steht ein erfahrenes Team von Experten aus der Finanzbranche, die unter
   anderem für führende Banken in Deutschland, der Schweiz, Osteuropa und Asien gearbeitet
   haben.</p>
   <p>&nbsp;</p>
   <h5>Spareinlagen</h5>
   <p>ZinsUnion wählt für Sie Partnerbanken aus, die ein solides Geschäftsmodell besitzen und
   daher langfristig attraktive Zinsen bieten können. Alle Partnerbanken sind
   Kreditinstitute aus der Europäischen Union oder dem Europäischen Wirtschaftsraum, deren
   Tagesgeld- und Festgeldangebote ihrer jeweiligen nationalen Einlagensicherung
   unterliegen.</p>
   <p>Ihr persönliches und kostenloses Verrechnungskonto für Spareinlagen wie <a
       routerLink="/festgeld/">Tages- oder Festgeld</a> wird
   bei der Partnerbank geführt.&nbsp; Die Bank steht unter der Aufsicht der
   Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin). Die Konten
   unterliegen der gesetzlichen deutschen Einlagensicherung durch die
   Entschädigungseinrichtung deutscher Banken (EdB).</p>
  `,
    category: ListCategory.category1,
    expanded: false,
  },
  {
    title: `Woran verdient ZinsUnion?`,
    content: `
    <h5>Spareinlagen (Tagesgeld, Festgeld)</h5>
    <p>Bei der Vermittlung von <a routerLink="/festgeld/">Tages, Flex- und
            Festgeldern</a> verdient ZinsUnion über ein Gebührenmodell
        anteilig an den vermittelten Spareinlagen. Diese Provisionen bezahlt die entsprechende
        Partnerbank, nicht der Kunde.</p>
    <p>Durch dieses Modell ermöglicht es ZinsUnion, das Angebot der
        Dienstleistungen möglichst kostengünstig für Sie zu erbringen und deren Qualität ständig
        zu verbessern.</p>`,
    category: ListCategory.category1,
    expanded: false,
  },
  {
    title: `Werde ich durch ZinsUnion bezüglich der einzelnen Produkte beraten?`,
    content: `<p>Nein, denn ZinsUnion fungiert lediglich als <strong>F</strong>i<strong>nanzanlage- bzw. Finanzanlage- und
      Versicherungsvermittler</strong>. Wir kennen weder Ihre individuelle
      Vermögenssituation noch die Ziele, die Sie mit der Geldanlage verfolgen. <strong>Daher
      bieten wir ausdrücklich keine Anlageberatung an</strong> und werden zu keinem
      Zeitpunkt Empfehlungen zu einzelnen Produkten oder Partnerbanken aussprechen.
      </p>`,
    category: ListCategory.category1,
    expanded: false,
  },
  {
    title: `Wie kann ich ZinsUnion kontaktieren?`,
    content: `<h4>ZinsUnion (Spareinlagen und Investment-Produkte)</h4>
    <h5>Telefon</h5>
    <p>Der ZinsUnion Kundenservice steht Ihnen telefonisch von Montag bis Freitag zwischen 9:00
        Uhr und 16:00 Uhr zur Verfügung:</p>
    <ul class="icon-list primary">
        <li>als Privatkunden unter der Telefonnummer <a [href]="{{ contacts.customer.href }}">{{ contacts.customer.template }} </a></li>
        <li>als Geschäftskunde&nbsp;unter der Telefonnummer <a [href]="{{ emails.support.href }}">{{ emails.support.template }} </a></li>
    </ul>
    <h5>E-Mail</h5>
    <p>Sie können sich außerdem per E-Mail mit Fragen und Anregungen an uns wenden:</p>
    <ul class="icon-list primary">
        <li>als Privatkunde unter <a
                [href]="{{ emails.support.href }}">{{ emails.support.template }}</a></li>
        <li>als Geschäftskunde unter <a style="background-color: #ffffff;"
        [href]="{{ emails.companies.href }}">{{ emails.companies.template }}</a>
        </li>
    </ul>
    <hr>
    <p>Wir sind stolz darauf, dass die meisten unserer Kunden sehr zufrieden mit dem Service bei
        ZinsUnion sind. Sollten Sie einmal nicht zufrieden sein, kontaktieren Sie uns bitte
        umgehend, damit wir schnell eine zufriedenstellende Lösung mit Ihnen finden können.
        Weitere Informationen zu unserem Beschwerdemanagement finden Sie <a
            routerLink="/beschwerdemanagement/">hier.</a></p>`,
    category: ListCategory.category1,
    expanded: false,
  },
  {
    title: `Wie erfahre ich von neuen Angeboten?`,
    content: `<p>Alles zu den neuesten Produktangeboten, aktuellen Marktentwicklungen und attraktiven
    Konditionen unserer Partner sowie sonstigen spannenden Neuerungen bei ZinsUnion
    erfahren Sie über unseren Newsletter.</p>
    <p>Des Weiteren finden Sie alle aktuellen Informationen und Produktangebote auf unserer <a
        routerLink="/festgeld/">Website</a> oder im <a
        routerLink="/dashboard/#/Products">ZinsUnion
        Onlinebanking.</a></p>
    <p>Gern informieren wir Sie auch auf einer unserer Veranstaltungen für Privatkunden
    persönlich über die Chancen und Möglichkeiten, mit ZinsUnion in attraktive Angebote zu
    investieren. Unsere kommenden Veranstaltungen finden Sie <a
    routerLink="/veranstaltungen/">hier.</a></p>`,
    category: ListCategory.category1,
    expanded: false,
  },
  {
    title: `Wodurch unterscheiden
    sich das Referenzkonto, das Zinsunion-Konto, das Anlagekonto und das Depotbankkonto?`,
    content: `<p>Das Referenzkonto ist ein gewöhnliches Girokonto (zum Beispiel bei Ihrer Hausbank) bei
    einer Bank in Deutschland oder einem anderen EU-Mitgliedsstaat, das auf Ihren Namen (bei
    Geschäftskunden: auf den Namen Ihres Unternehmens) lautet. Die wesentliche Funktion des
    Referenzkontos besteht darin, den Zahlungsverkehr mit dem Zinsunion-Konto
    (Verrechnungskonto) sicherzustellen, d. h. Überweisungen auf das Zinsunion-Konto und vom
    Zinsunion-Konto zu verbuchen.</p>
  <p>Beim Zinsunion-Konto handelt es sich um ein derzeit unverzinstes Girokonto, das online bei
    der Bank geführt wird und als Verrechnungskonto für die Anlagekonten dient. Auf
    dieses Konto überweisen Sie das Guthaben für die Anlageprodukte bei einer Partnerbank.
    Das Zinsunion-Konto in Deutschland dient als Grundlage für Ihre Legitimation gegenüber
    der Partnerbank durch die&nbsp; Bank und das sichere Onlinebanking, worüber
    Zahlungen, Daten und Dokumente verschlüsselt zwischen In- und ggf. Ausland transferiert
    werden. Nach Fälligkeit der Anlage überweist unsere Partnerbank das Guthaben zuzüglich
    Zinsen und ggf. abzüglich Steuern auf das Zinsunion-Konto zurück, sofern die Einlage
    nicht verlängert werden soll. Nun steht Ihnen Ihr Guthaben zur freien Verfügung, z. B.
    um weitere Angebote auszuwählen oder das Guthaben auf Ihr Referenzkonto zurück zu
    überweisen.</p>
  <p>Das Anlagekonto (für Fest- oder Tagesgeld) eröffnen Sie bei einer unserer Partnerbanken.
    Für jedes Angebot, das Sie auswählen, wird ein eigenes Anlagekonto bei der Partnerbank
    eingerichtet. Nach der Eröffnung wird der von Ihnen gewünschte Betrag vom Zinsunion-Konto
    automatisch auf Ihr Anlagekonto überwiesen. Bei Fälligkeit von Festgeldern haben Sie
    drei Optionen: entweder Sie verlängern das Festgeld, wählen ein anderes Festgeldangebot
    aus, oder das Guthaben wird auf Ihr Zinsunion-Konto zurücküberwiesen.</p>`,
    category: ListCategory.category2,
  },
  {
    title: `Wie funktioniert ZinsUnion?`,
    content: `<p>Bei ZinsUnion können Sie attraktive Fest- und Tagesgelder von europäischen Partnern
    abschließen.</p>
  <p>Und so funktioniert’s:</p>
  <ol>
    <li>Eröffnen Sie auf&nbsp;<a routerLink="/">www.zinsunion.com</a> ein
        Zinsunion-Konto bei der Frankfurter Bank als Verrechnungskonto für Ihre
        Anlagen bei den europäischen Banken. Dafür müssen Sie sich nur einmalig registrieren
        und eine PIN für Ihren Onlinebanking-Zugang festlegen. Anschließend müssen Sie eines
        der bekannten Identifizierungs-Verfahren durchführen (Postident oder Video-Ident).
        Nachdem wir Ihre Identifizierung erhalten haben, wird die Bank ihr
        Verrechnungskonto eröffnen. Mit Ihrer Kontonummer oder E-Mail-Adresse und Ihrer PIN
        können Sie sich dann jederzeit in Ihr Onlinebanking einloggen. Ihre Kontonummer
        erhalten Sie per E-Mail, nachdem Ihr Zinsunion-Konto von uns aktiviert wurde. Dann
        können Sie Geld auf Ihr Zinsunion-Konto überweisen.</li>
    <li>Wählen Sie im Rahmen der Registrierung oder jederzeit später Angebote unserer
        Partnerbanken aus und reichen Sie die ggf. erforderlichen Unterlagen ein. Die
        Eröffnung bei der Partnerbank und die Überweisung erfolgen automatisch von Ihrem
        Zinsunion-Konto bei der Bank. Ihnen entstehen dafür keine Kosten. Sie erhalten
        alle Unterlagen (wie Vertragsunterlagen und Kontoauszüge) der Partnerbank in Ihre
        elektronische Postbox im Onlinebanking.</li>
    <li>Falls Sie eine Anlage nicht verlängern, überweist die Partnerbank Ihnen das Geld am
        Ende der Laufzeit mit Zinsen (abzüglich etwaiger einbehaltener Steuern) zurück auf
        Ihr Zinsunion-Konto bei der Bank. Von dort können Sie eine neue Anlage
        auswählen oder die Auszahlung auf Ihr bei uns hinterlegtes Referenzkonto
        veranlassen.</li>
  </ol>
  <p>Insgesamt ist der Prozess von der Registrierung auf <a
        routerLink="/">zinsunion.com</a> bis zur bestätigten
    Kontoeröffnung durch die Partnerbank in der Regel innerhalb von wenigen Tagen bis
    maximal zwei Wochen abgeschlossen.</p>
  `,
    category: ListCategory.category2,
  },
  {
    title: `Muss ich bei jedem Abschluss einer Anlage ein Identifizierungs-Verfahren durchlaufen?`,
    content: `<p>Nein. Der Vorteil von ZinsUnion ist: mit nur einer Anmeldung profitieren Sie von allen
    Angeboten auf&nbsp;<a routerLink="/">zinsunion.com</a>. Sie müssen
    nur einmal – nämlich zu Beginn – ein Identifizierungs-Verfahren (Postident oder
    Video-Ident) durchlaufen und die Bank eröffnet daraufhin Ihr Zinsunion-Konto, das
    als Verrechnungskonto für alle Anlageprodukte unserer Partnerbanken dient. Nur für
    unsere deutschen Partnerbanken gilt eine Besonderheit: Hier darf aufgrund von
    Bestimmungen der deutschen Bankenregulierungsbehörde BaFin für eine Kontoeröffnung das
    Identifizierungs-Verfahren nicht länger als 18 Monate zurückliegen.</p>`,
    category: ListCategory.category2,
  },
  {
    title: `Ab welchem Zeitpunkt bin ich Kunde?`,
    content: `<p style="margin: 0cm 0cm 8.25pt 0cm;"><span
    style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Nach
    Abschluss der Registrierung sind Sie Kunde von ZinsUnion und erhalten zusätzlich
    eine E-Mail zur Bestätigung an Ihre angegebene E-Mailadresse. Diese E-Mail enthält
    sowohl einen Postident-Coupon als auch einen Link zur Durchführung der
    Video-Identifizierung. Sobald Sie eines der Identifizierungs-Verfahren (Postident
    oder Video-Ident) durchgeführt haben, erhalten Sie die Kontonummer zu Ihrem
    Verrechnungskonto (Zinsunion-Konto) per E-Mail zugeschickt. Loggen Sie sich
    anschließend einfach mit Kontonummer und Ihrer selbst vergebenen PIN auf <a
    routerLink="/geschaeftskunden/">www.zinsunion.com</a> unter
    „Mein Konto“ ein, wählen Sie das gewünschte Anlageprodukt bei ZinsUnion aus und
    überweisen Sie den Anlagebetrag auf Ihr Zinsunion-Konto. Der Vorteil: Sie müssen sich
    bei ZinsUnion nur einmal registrieren um Zugriff auf sämtliche Angebote unserer
    europäischen Partnerbanken zu haben. Die Eröffnung und Führung des Zinsunion-Kontos
    inklusive Identifizierungs-Verfahren (Postident oder Video-Ident),
    Auslandsüberweisungen, Saldenbestätigungen, Kontoauszüge und deutscher Kundenservice
    sind für Sie selbstverständlich kostenlos.<br>
  </span></p>`,
    category: ListCategory.category2,
  },
  {
    title: `Welche Voraussetzungen muss ich als Privatperson für die Eröffnung eines Zinsunion-Kontos erfüllen?`,
    content: `<p style="margin: 0cm 0cm 8.25pt 0cm;"><span
    style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Wir
    eröffnen ein Zinsunion-Konto ausschließlich als Einzelkonto für natürliche Personen,
    die das 18. Lebensjahr bereits vollendet haben, im eigenen Namen handeln, eine
    deutsche Meldeadresse sowie ein Referenzkonto (Girokonto) bei einer in der
    Europäischen Union bzw. im Europäischen Wirtschaftsraum ansässigen Bank haben. Wir
    bedauern, dass wir Bürger der Vereinigten Staaten von Amerika (USA), sogenannte
    Permanent Residents und Besitzer einer Green-Card aufgrund sehr weitgehender
    Datenweitergabe-Vorschriften derzeit vom Zugang zum Angebot ausschließen
    müssen.</span></p>
  <p style="margin: 0cm 0cm 8.25pt 0cm;"><span
    style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Um
    unser Angebot nutzen zu können, benötigen Sie zudem eine gültige E-Mail-Adresse, den
    Zugang zu einem Computer und zum Internet, ein SMS-fähiges Mobiltelefon sowie einen
    Acrobat Reader (</span><a href="https://www.adobe.com/de/" target="_blank"
    rel="noopener"><span
        style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #156cc4;">https://www.adobe.com/de/</span></a><span
    style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">).</span>
  </p>
  <p style="margin: 0cm 0cm 8.25pt 0cm;"><span
    style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Darüber
    hinaus ist erforderlich, dass Sie die Geschäftsbedingungen, die Sonderbedingungen,
    das Preis- und Leistungsverzeichnis, die Datenschutzerklärungen und Datenweitergabe
    sowie die Hinweise zum Fernabsatzgesetz der Vertragspartner von ZinsUnion
    akzeptieren.</span></p>`,
    category: ListCategory.category2,
  },
  {
    title: `Welche Unterlagen sind für die Eröffnung eines Anlagekontos erforderlich?`,
    content: ` <p>Die Anforderungen unserer Partnerbanken sind von Land zu Land unterschiedlich: Abhängig
    von den regulatorischen Anforderungen im jeweiligen Land erfolgt der Abschluss entweder
    durch einen elektronischen Antrag in Ihrem Onlinebanking, oder Sie können die
    Kontoeröffnungsunterlagen direkt im Onlinebanking von ZinsUnion hochladen, einige
    unserer Partnerbanken benötigen den Kontoeröffnungsantrag auch im Original, in diesem
    Fall schicken Sie uns den unterschriebenen Antrag bitte zu. Details über eventuell
    notwendige Dokumente finden Sie im jeweiligen Produktinformationsblatt.</p>
  <p>Unsere Partnerbanken benötigen ebenfalls eine Ausweiskopie von Ihnen, diese haben Sie uns
    entweder im Rahmen des Identifizierungs-Verfahrens (Postident oder Video-Ident) bereits
    zur Verfügung gestellt, oder Sie laden Ihren Ausweis im Onlinebanking hoch, wenn Sie
    nach der Auswahl eines Angebotes dazu aufgefordert werden. In der Regel benötigt die
    Partnerbank für die Eröffnung Ihren Personalausweis. Sofern eine Partnerbank explizit
    Ihren Reisepass benötigt, finden Sie diese Informationen zusammen mit ggf. weiteren
    Unterlagenerfordernissen im jeweiligen Produktinformationsblatt.</p>
  `,
    category: ListCategory.category2,
  },
  {
    title: `Welche Kontoauszüge erhalte ich?`,
    content: `  <p>Sie erhalten von ZinsUnion jeweils nach Abschluss eines Kalenderjahres im ersten Quartal
    steuerliche Informationen für alle Anlagen über ZinsUnion (sofern steuerlich relevant)
    inklusive einer Saldenbestätigung für Ihr Zinsunion-Konto in Ihrer elektronischen Postbox
    im Onlinebanking.</p>
  <p>Bei Fälligkeit eines Festgeldes bzw. bei Tagesgeld zum Abschluss des Kalenderjahres
    erhalten Sie von der Partnerbank eine Kontoabrechnung im PDF-Format, aus der Sie alle
    notwendigen Informationen entnehmen können. Je nach Zinszahlungsmodalitäten kann es
    weitere Unterlagen wie z. B. jährliche Zinsabrechnungen geben.</p>
  <p>Weitere Unterlagen (z. B. Verträge) und Informationen von den jeweiligen Partnerbanken
    stellen wir Ihnen ebenfalls in Ihrer Postbox zur Verfügung.</p>
  <p>Diese Informationen können jederzeit einfach und direkt im elektronischen Postfach
    angesehen, heruntergeladen und ausgedruckt werden.</p>
  `,
    category: ListCategory.category2,
  },
  {
    title: `Kann ich bei ZinsUnion ein Konto für Minderjährige eröffnen?`,
    content: `<p style="margin: 0cm 0cm 8.25pt 0cm;"><span
    style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Nein,
    es besteht keine Möglichkeit zur Eröffnung eines Kontos für Minderjährige bei
    ZinsUnion. Dies gilt für alle unsere Anlageprodukte. Wir bitten um Ihr
    Verständnis.</span></p>`,
    category: ListCategory.category2,
  },
  {
    title: `Kann ich bei
    ZinsUnion ein Gemeinschaftskonto eröffnen?`,
    content: ` <p style="margin: 0cm 0cm 8.25pt 0cm;"><span
    style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Nein,
    es besteht keine Möglichkeit zur Eröffnung eines Gemeinschaftskontos bei ZinsUnion.
    Dies gilt für alle unsere Anlageprodukte. Wir bitten um Ihr Verständnis.</span></p>`,
    category: ListCategory.category2,
  },
  {
    title: `Wie kann ich mein Referenzkonto ändern?`,
    content: ` <p>Das Referenzkonto ist das Konto (üblicherweise Ihr Hausbankkonto), auf das Sie
    Auszahlungen von Ihrem Zinsunion-Konto veranlassen können. Um Ihre Sicherheit zu
    gewährleisten, benötigen wir für eine Änderung dieses Kontos einen schriftlichen
    Auftrag. Sie können Ihr Referenzkonto mit dem entsprechenden Formular unter „Verwaltung“
    und „Formulare anzeigen“ schriftlich jederzeit bei uns ändern. Auch bei dem neuen
    Referenzkonto muss es sich um ein Konto bei einer in der Europäischen Union bzw. im
    Europäischen Wirtschaftsraum ansässigen Bank handeln.</p>
  <p>Schicken Sie uns das ausgefüllte und unterschriebene Formular bitte auf dem Postweg an:
    ZinsUnion, Postfach 13 02 07, 13601 Berlin.</p>
  <p>Mehr zum Referenzkonto erfahren Sie <a routerLink="/glossar/referenzkonto/">hier.</a>
  </p>
  `,
    category: ListCategory.category2,
  },
  {
    title: `Wie funktioniert
    Postident?`,
    content: `<p><strong>Für eine ausführliche Anleitung zum PostIdent-Verfahren folgen Sie bitte diesem
    Link: <a routerLink="/glossar/postident/">Schritt-für-Schritt-Anleitung
        und weitere Informationen</a></strong></p>
  <hr>
  <p>PostIdent ist ein kostenloses Verfahren, durch das Sie sich bei der Geldanlage über
  ZinsUnion in einer Filiale der Deutsche Post AG identifizieren. Alternativ können Sie
  auch das bequemere Verfahren per VideoIdent nutzen. <strong>Österreichische Kunden
    nutzen ausschließlich das <a
    routerLink="/glossar/videoident/">VideoIdent-Verfahren.</a>
    Die Nutzung von PostIdent ist nicht möglich.</strong></p>
  <p>&nbsp;</p>
  <h6>Warum muss ich mich identifizieren?</h6>
  <p>Die Überprüfung Ihrer Identität ist nach dem Geldwäschegesetz (GwG) für Finanzinstitute
  und andere regulierte Unternehmen wie ZinsUnion notwendig, um Geldwäsche zu verhindern,
  aufzudecken und zu melden. Geldwäsche ist das kriminelle Vorgehen, um die Herkunft
  illegal erworbener Gelder zu verschleiern.</p>
  <p><strong><a routerLink="/glossar/postident/">Schritt-für-Schritt-Anleitung
        und weitere Informationen &gt;</a></strong></p>
  <p>&nbsp;</p>
  <h6>Ausweisdokumente</h6>
  <p>Um das PostIdent-Verfahren durchzuführen, benötigen Sie abhängig von Ihrer
  Staatsangehörigkeit, unterschiedliche persönliche Dokumente sowie einen
  PostIdent-Coupon. Den Coupon erhalten Sie automatisch nach der Registrierung in Ihrem
  Zinsunion-Konto. Wie Sie sich bei ZinsUnion registrieren, erfahren Sie <a
  routerLink="/magazin/so-funktioniert-die-registrierung/">hier.</a>
  </p>
  <p>&nbsp;</p>
  <p><strong>Dokumente bei deutscher Staatsangehörigkeit</strong></p>
  <p>Deutsche Staatsbürger benötigen zur Durchführung von PostIdent neben dem PostIdent-Coupon
  einen gültigen Personalausweis oder einen gültigen Reisepass.</p>
  <p>Der Personalausweis oder Reisepass muss bei der Durchführung des PostIdent-Verfahrens
  noch mindestens 3 Monate gültig sein. Nutzen Sie einen Reisepass, benötigen Sie
  zusätzlich eine amtliche Meldebescheinigung oder eine Versorgerrechnung (z. B. eine
  Stromrechnung), die Ihre Adresse beinhaltet. Mehr dazu erfahren Sie hier.</p>
  <p>&nbsp;</p>
  <p><strong>Dokumente bei EU-Staatsangehörigkeit (außer Deutschland)</strong></p>
  <p>Verfügen Sie über eine Staatsangehörigkeit innerhalb der Europäischen Union (EU),
  benötigen Sie zur Durchführung neben dem PostIdent-Coupon entweder eine nationale, dem
  deutschen Personalausweis entsprechende, gültige Identitätskarte oder einen gültigen,
  internationalen Reisepass</p>
  <p>Die Identitätskarte oder der Reisepass muss bestimmte Anforderungen erfüllen.</p>
  <p>&nbsp;</p>
  <p><strong>Dokumente bei anderer Staatsangehörigkeit (außerhalb EU)</strong></p>
  <p>Verfügen Sie über eine Staatsangehörigkeit außerhalb der Europäischen Union (EU),
  benötigen Sie zur Durchführung neben dem PostIdent-Coupon einen gültigen internationalen
  Reisepass.</p>
  <p>Der Reisepass muss bestimmte Anforderungen erfüllen.</p>`,
    category: ListCategory.category2,
  },
  {
    title: `Muss ich bei jedem Abschluss einer Anlage ein Identifizierungs-Verfahren durchlaufen?`,
    content: ` <p>Nein. Der Vorteil von ZinsUnion ist: mit nur einer Anmeldung profitieren Sie von allen
    Angeboten auf&nbsp;<a routerLink="/">zinsunion.com</a>. Sie müssen
    nur einmal – nämlich zu Beginn – ein Identifizierungs-Verfahren (Postident oder
    Video-Ident) durchlaufen und die Bank eröffnet daraufhin Ihr Zinsunion-Konto, das
    als Verrechnungskonto für alle Anlageprodukte unserer Partnerbanken dient. Nur für
    unsere deutschen Partnerbanken gilt eine Besonderheit: Hier darf aufgrund von
    Bestimmungen der deutschen Bankenregulierungsbehörde BaFin für eine Kontoeröffnung das
    Identifizierungs-Verfahren nicht länger als 18 Monate zurückliegen.</p>
  `,
    category: ListCategory.category2,
  },
  {
    title: `Welche Kosten entstehen für mich?`,
    content: ` <p>Alle allgemeinen Leistungen zum Produkt ZinsUnion sind kostenlos – die entstehenden
    Kosten übernehmen wir für Sie. Dazu zählen die Eröffnung und Führung des Zinsunion-Kontos
    inklusive Identifizierungs-Verfahren (Postident oder Video-Ident),
    Auslandsüberweisungen, Saldenbestätigungen, Kontoauszüge und deutscher Kundenservice.
    Die Eröffnung und Führung der Tages- und Festgeldkonten bei unseren Partnerbanken sind
    in aller Regel ebenfalls kostenfrei. Eine Ausnahme bilden Umrechnungsgebühren, die bei
    Fremdwährungsfestgeldern anfallen können, diese werden jedoch in den Angebotsdetails und
    dem Produktinformationsblatt transparent ausgewiesen und kommuniziert.</p>
  <p>Lediglich bei Investmentprodukten entstehen geringe Verwaltungsgebühren, die Sie jeweils
    dem dazugehörigen Leistungsverzeichnis entnehmen können.</p>`,
    category: ListCategory.category2,
  },
  {
    title: `Wodurch unterscheiden sich das Referenzkonto, das Zinsunion-Konto, das Anlagekonto und das Depotbankkonto?`,
    content: `<p>Das Referenzkonto ist ein gewöhnliches Girokonto (zum Beispiel bei Ihrer Hausbank) bei
    einer Bank in Deutschland oder einem anderen EU-Mitgliedsstaat, das auf Ihren Namen (bei
    Geschäftskunden: auf den Namen Ihres Unternehmens) lautet. Die wesentliche Funktion des
    Referenzkontos besteht darin, den Zahlungsverkehr mit dem Zinsunion-Konto
    (Verrechnungskonto) sicherzustellen, d. h. Überweisungen auf das Zinsunion-Konto und vom
    Zinsunion-Konto zu verbuchen.</p>
  <p>Beim Zinsunion-Konto handelt es sich um ein derzeit unverzinstes Girokonto, das online bei
    der Bank geführt wird und als Verrechnungskonto für die Anlagekonten dient. Auf
    dieses Konto überweisen Sie das Guthaben für die Anlageprodukte bei einer Partnerbank.
    Das Zinsunion-Konto in Deutschland dient als Grundlage für Ihre Legitimation gegenüber
    der Partnerbank durch die Bank und das sichere Onlinebanking, worüber Zahlungen,
    Daten und Dokumente verschlüsselt zwischen In- und ggf. Ausland transferiert werden.
    Nach Fälligkeit der Anlage überweist unsere Partnerbank das Guthaben zuzüglich Zinsen
    und ggf. abzüglich Steuern auf das Zinsunion-Konto zurück, sofern die Einlage nicht
    verlängert werden soll. Nun steht Ihnen Ihr Guthaben zur freien Verfügung, z. B. um
    weitere Angebote auszuwählen oder das Guthaben auf Ihr Referenzkonto zurück zu
    überweisen.</p>
  <p>Das Anlagekonto (für Fest- oder Tagesgeld) eröffnen Sie bei einer unserer Partnerbanken.
    Für jedes Angebot, das Sie auswählen, wird ein eigenes Anlagekonto bei der Partnerbank
    eingerichtet. Nach der Eröffnung wird der von Ihnen gewünschte Betrag vom Zinsunion-Konto
    automatisch auf Ihr Anlagekonto überwiesen. Bei Fälligkeit von Festgeldern haben Sie
    drei Optionen: entweder Sie verlängern das Festgeld, wählen ein anderes Festgeldangebot
    aus, oder das Guthaben wird auf Ihr Zinsunion-Konto zurücküberwiesen.</p>
  `,
    category: ListCategory.category2,
  },
  {
    title: `Kann ich gleichzeitig mehrere Anlagen bei den Partnerbanken haben?`,
    content: ` <p>Es gibt bei ZinsUnion keine maximale Anzahl von Festgeldern pro Kunde. Sie können so
    viele Festgelder abschließen, wie Sie möchten. Begrenzungen zu Laufzeiten oder Währungen
    gibt es dabei nicht. Bitte beachten Sie aber, dass unsere Partnerbanken die maximale
    Summe der anzulegenden Gelder begrenzen (mit Blick auf die Einlagensicherungsgrenze).
  </p>
  `,
    category: ListCategory.category2,
  },
  {
    title: `Was muss ich tun, wenn sich meine Kontaktdaten geändert haben?`,
    content: `  <p>Ihre Kontaktdaten wie E-Mail-Adresse und Telefonnummer können Sie bequem im Onlinebanking
    unter „Verwaltung“ -&gt; „Kontaktdaten ändern“ aktualisieren. Alternativ können Sie
    unseren <a routerLink="/kontakt/">Kundenservice</a> kontaktieren und
    diesen über die Änderung informieren. Um Ihre Erreichbarkeit zu gewährleisten, sind
    aktuelle Kontaktdaten im beiderseitigen Interesse.</p>
  <p>Sollten Sie Ihre Adresse oder Ihren Namenszusatz ändern wollen, können Sie die Änderung
    selbstständig im Onlinebanking unter „Verwaltung“ -&gt; „Kontaktdaten ändern“ vornehmen.
    Außerdem besteht die Möglichkeit eines schriftlichen Auftrages per Brief. Ihr
    schriftlicher Auftrag zur Änderung Ihrer Adresse oder Ihres Namenszusatzes wird
    anschließend von unserem Kundenservice bearbeitet. Bitte beachten Sie, dass wir bei
    einer Änderung Ihrer Meldeadresse oder Ihres Namenszusatzes eine Kopie oder den Scan
    Ihres Ausweisdokuments benötigen, aus dem die Änderung hervorgeht.</p>
  <p>Bei einer Änderung Ihrer Stammdaten (Vorname(n), Nachname, Geburtsname, Geburtsdatum,
    Geburtsort, Geschlecht und Nationalität) bitten wir Sie, Kontakt mit unserem <a
        routerLink="/kontakt/">Kundenservice</a> aufzunehmen, um ein
    erneutes Identifizierungs-Verfahren durchzuführen. Wir werden Sie dann über die nächsten
    Schritte informieren.</p>`,
    category: ListCategory.category2,
  },
  {
    title: `Wie funktioniert das Werben von Neukunden?`,
    content: `<p style="margin: 0cm 0cm 8.25pt 0cm;">Überzeugen Sie Freunde und Bekannte mit dem Programm
    „Kunden werben Kunden“ von unseren attraktiven Angeboten.&nbsp;Jeder ZinsUnion-Kunde
    aus Deutschland kann Neukunden werben. Voraussetzung ist lediglich die erfolgreiche
    Registrierung und Durchführung des Identifizierungsverfahrens (Postident oder
    Video-Ident). Geworben werden können alle Personen, die zum Zeitpunkt der Empfehlung
    noch nicht bei ZinsUnion registriert sind. Alle Details entnehmen Sie
    bitte&nbsp;unserer <span style="text-decoration: underline;"><a
            routerLink="/kunden-werben/">Kunden-werben-Kunden-Seite.</a></span>
  </p>`,
    category: ListCategory.category2,
  },
  {
    title: `Was bedeutet AWV-Meldepflicht?`,
    content: `  <p><b>Was bedeutet AWV-Meldepflicht?</b></p>
    <p><span style="font-weight: 400;">Wer Überweisungen ins Ausland tätigt oder aus dem Ausland
            erhält, findet auf dem Kontoauszug den Hinweis „AWV-Meldepflicht beachten,
        </span><b>Meldenummer Bundesbank: (0800) 1234-111</b><span style="font-weight: 400;">“
            (Nummer funktioniert nur aus dem deutschen Festnetz).</span></p>
    <p><span style="font-weight: 400;">Dabei handelt es sich um eine Meldepflicht, die über die
            zusammenfassende Meldung hinausgeht und statistischen Zwecken dient. Meldepflichtig
            sind aber nur Beträge ab 12.500 Euro. Wenn es sich um mehrere Zahlungen einer Person
            unterhalb von jeweils 12.500 Euro handelt, sind diese ebenfalls von der Meldepflicht
            ausgenommen.</span></p>
    <p><b>Für ZinsUnion-Kunden gilt:</b></p>
    <ul>
        <li style="font-weight: 400;"><span style="font-weight: 400;">Bei allen Produkten mit
                einer Laufzeit von 12 Monaten (oder kürzer) und bei allen Produkten mit
                jederzeit vorzeitiger Kündigungsmöglichkeit (unabhängig von der Laufzeit)
                entfällt die Meldepflicht gemäß Aussage der Bundesbank. Details zu vorzeitigen
                Kündigungsmöglichkeiten erhalten Sie im jeweiligen
                Produktinformationsblatt.</span></li>
        <li style="font-weight: 400;"><span style="font-weight: 400;">Bei allen anderen
                Produkten und Anlagebeträgen ab 12.500 Euro sind Kunden grundsätzlich
                verpflichtet, ihrer Zahlungsmeldung gemäß der oben genannten Regelungen
                nachzukommen.</span></li>
        <li style="font-weight: 400;"><span style="font-weight: 400;">Weitere Fragen beantwortet
                die Meldenummer der Bundesbank unter der oben angegebenen Nummer.</span></li>
    </ul>
    <p>&nbsp;</p>
    <p style="text-align: center;"><a class="btn btn-primary" routerLink="/tagesgeld/">Jetzt
            Tagesgeld vergleichen</a></p>
    <p><b>Wofür steht die Abkürzung AWV?</b></p>
    <p><span style="font-weight: 400;">Die Abkürzung AWV steht für Außenwirtschaftsverordnung.
            Die Meldepflicht für Überweisungen von und nach Deutschland ist im §11 des
            Außenwirtschaftsgesetzes (AWG) in Verbindung mit §§67ff der AWV geregelt, um den
            Kapitalfluss ins und aus dem Ausland (Außenwirtschaftsverkehr) zu kontrollieren und
            in einer Außenwirtschaftsstatistik zu erfassen.</span></p>
    <p><b>Was ist meldepflichtig?</b></p>
    <p><span style="font-weight: 400;">Meldepflichtig sind Barzahlungen, Auslandszahlungen
            mittels Lastschrift, Schecks, Auslandsüberweisungen in Euro und in Fremdwährungen
            sowie Aufrechnungen und Verrechnungen. Fremdwährungen sind erst ab einem Gegenwert
            von 50.000 USD als Devisengeschäfte meldepflichtig.</span></p>
    <p><b>Wer ist AWV-meldepflichtig?</b></p>
    <p><span style="font-weight: 400;">Die Meldevorschrift gilt für natürliche und juristische
            Personen mit Aufenthalt, Wohnsitz oder Firmensitz in Deutschland (gebietsansässige
            Personen).</span></p>
    <p><b>Bis wann und wie muss die Meldung erfolgt sein?</b></p>
    <p><span style="font-weight: 400;">Das AWG gewährt eine Meldefrist bis zum 7. Kalendertag
            des Folgemonats, nachdem die Zahlung oder Überweisung erfolgt ist. Für
            Privatpersonen genügt eine telefonische Meldung bei der Bundesbank unter der
            Telefonnummer </span><b>(0800) 1234-111</b><span style="font-weight: 400;">.
            Unternehmer müssen zuerst eine Benutzerregistrierung bei der Bundesbank vornehmen,
            um in der Außenwirtschaftsstatistik erfasst werden zu können (</span><a
            href="https://extranet.bundesbank.de/bsvpub/register1.do?fv=AMS"><span
                style="font-weight: 400;">Allgemeines Meldeportal Statistik</span></a><span
            style="font-weight: 400;">). </span></p>
    <p><b>Bei welchen Ausnahmen darf ich auf die Meldung verzichten?</b></p>
    <p><span style="font-weight: 400;">Wareneinfuhren und Ausfuhrerlöse unterliegen nicht der
            Meldevorschrift. Kredite und Einlagen mit einer Laufzeit geringer als 1 Jahr sind
            ebenfalls von der Meldepflicht ausgenommen. Wenn der Betrag die Grenze von 12.500
            Euro unterschreitet, können Sie die Meldung auf Ihrem Kontoauszug Ihres
            Kreditinstituts ignorieren. </span></p>
    <p><b>Welche Strafen gibt es bei Missachtung der AWV-Meldepflicht?</b></p>
    <p><span style="font-weight: 400;">Die Missachtung der Meldepflicht kann als
            Ordnungswidrigkeit ein Bußgeld von bis zu 30.000 Euro nach sich ziehen.</span></p>
    <p>&nbsp;</p>
    <p style="text-align: center;"><a class="btn btn-primary" routerLink="/festgeld/">Jetzt
            Festgeld vergleichen</a></p>
    <p>&nbsp;<br>
        <strong>Weitere Informationen im ZinsUnion Magazin</strong>
    </p>
    <ul>
        <li><strong><a class="mt-20" title="Festgeld"
                    routerLink="/magazin/kategorie/finanzplanung/">Finanzplanung&nbsp;<i
                        class="fa-chevron-right"></i></a></strong></li>
        <li><strong><a class="mt-20" title="Festgeld"
                    routerLink="/magazin/kategorie/investieren/">Investieren&nbsp;<i
                        class="fa-chevron-right"></i></a></strong></li>
        <li><strong><a class="mt-20" title="Festgeld"
                    routerLink="/magazin/kategorie/sparen/">Sparen&nbsp;<i
                        class="fa-chevron-right"></i></a></strong></li>
    </ul>
    <p>&nbsp;</p>`,
    category: ListCategory.category2,
  },
  {
    title: `Wie kann ich mein Zinsunion-Konto kündigen?`,
    content: `<p>Die Kündigung des Zinsunion-Kontos bedarf der Textform und kann nur per E-Mail oder auf
    dem Postweg veranlasst werden. Aus diesem Grund bitten wir Sie, unserem <a
        routerLink="/kontakt/">Kundenservice</a> Ihre Kündigung unter
    Angabe Ihrer Kontonummer, dem aktuellen Datum und Kündigungstermin sowie Kündigungsgrund
    (und Unterschrift, falls Briefform) zuzusenden. Anschließend leiten wir die
    Kontoauflösung ein und werden Ihnen nach erfolgter Prüfung etwaiges Guthaben auf Ihr
    Referenzkonto zurücküberweisen.</p>
  `,
    category: ListCategory.category2,
  },
  {
    title: `Wie kann ich mich in mein Zinsunion-Konto einloggen?`,
    content: `<p>Sie finden den Link zu „Mein Konto“ rechts oben auf unserer Webseite. Wenn Sie diesen
  anklicken, können Sie sich anschließend mit Ihrer Kontonummer und Ihrer PIN zum
  sicheren Onlinebanking anmelden.</p>
`,
    category: ListCategory.category3,
    expanded: false,
  },
  {
    title: `Wie ermittele ich den Kontostand?`,
    content: `       <p style="margin: 0cm 0cm 8.25pt 0cm;"><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Sie
  können jederzeit die Einzelheiten zu Ihren Anlagen (z. B. Kontostand) in Ihrem
  gesicherten Onlinebanking unter „Meine Anlagen“ einsehen.</span></p>
`,
    category: ListCategory.category3,
    expanded: false,
  },
  {
    title: `Was kann ich tun, wenn ich bereits registriert bin, aber noch keine Zugangsdaten erhalten habe?`,
    content: ` <p style="margin: 0cm 0cm 8.25pt 0cm;"><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Nach
  abgeschlossener Registrierung legen Sie Ihre PIN für das Onlinebanking fest. Mit
  Ihrer Kontonummer oder E-Mail-Adresse sowie dieser PIN können Sie sich einloggen
  und auf Ihr Onlinebanking zugreifen. Für die Aktivierung Ihres Zinsunion-Kontos
  (Verrechnungskonto) ist die Durchführung eines Identifizierungsverfahrens
  (Postident oder Video-Ident) notwendig – anschließend werden wir Ihr
  Zinsunion-Konto aktivieren und Ihnen die Kontonummer per E-Mail mitteilen, damit
  Sie dorthin Geld überweisen können. Sollten Sie sich nicht einloggen können bzw.
  keine E-Mail von uns bekommen haben, kontaktieren Sie bitte unseren </span><a
  routerLink="/kontakt/"><span
      style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif;">Kundenservice</span></a><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">.</span>
</p>`,
    category: ListCategory.category3,
    expanded: false,
  },
  {
    title: `Was kann ich tun, wenn ich meine Kontonummer vergessen habe?`,
    content: ` <p>Nehmen Sie bitte Kontakt zu unserem <a
  routerLink="/kontakt/">Kundenservice</a> auf, wir helfen
Ihnen gerne weiter.</p>`,
    category: ListCategory.category3,
    expanded: false,
  },
  {
    title: `Was kann ich tun, wenn der Login nicht mehr möglich ist?`,
    content: `<p>Bitte überprüfen Sie zunächst, ob Sie Ihre Kontonummer und Ihre PIN richtig
  eingegeben haben. Achten Sie bitte insbesondere darauf, dass Sie nicht versehentlich
  die Feststelltaste aktiviert haben.</p>
<p>Wenn Sie Ihre Login-Daten vergessen haben, bitten wir Sie, sich an unseren <a
      routerLink="/kontakt/">Kundenservice</a> zu wenden.</p>
`,
    category: ListCategory.category3,
    expanded: false,
  },
  {
    title: `Was kann ich tun, wenn mein Online-Zugang gesperrt ist oder ich meine PIN vergessen habe?`,
    content: `<p>Ihr Online-Zugang wird aus Sicherheitsgründen automatisch gesperrt, wenn Ihre PIN
  fünf Mal falsch eingegeben wurde. Sie können auch selbst Ihren Online-Zugang
  jederzeit im Onlinebanking nach Eingabe des Transaktionspassworts im Bereich
  „Verwaltung“ sperren oder sich an unseren Kundenservice wenden. Dadurch ist
  sichergestellt, dass kein Unbefugter Zugriff auf Ihr Konto hat.</p>
<p>Zum Entsperren oder bei Verlust der PIN setzen Sie sich bitte mit unserem <a
      routerLink="/kontakt/">Kundenservice</a> in Verbindung, um
  eine neue PIN zu erhalten. Mit Ihrer neuen PIN können Sie sich dann einloggen.</p>
`,
    category: ListCategory.category3,
    expanded: false,
  },
  {
    title: `Wie kann ich meine PIN ändern?`,
    content: `   <p>Sie können Ihre PIN jederzeit ändern, indem Sie sich im Onlinebanking anmelden und
  unter „Verwaltung“ auf „PIN ändern“ klicken. Die PIN muss zwischen 6 und 16 Zeichen
  lang sein und kann neben Buchstaben auch Ziffern beinhalten. Sie können die letzten
  10 benutzten PINs aus Sicherheitsgründen nicht wiederverwenden.</p>
<p>Ändern Sie Ihre PIN regelmäßig. Vermeiden Sie bitte zu Ihrer eigenen Sicherheit als
  PIN Geburtsdatum, Telefonnummer, Postleitzahl oder ähnliche Daten mit erkennbar
  privatem Bezug.</p>
`,
    category: ListCategory.category3,
    expanded: false,
  },
  {
    title: ` Welche Sicherheitsstandards erfüllt ZinsUnion?`,
    content: `<p>Die Sicherheit Ihrer Daten hat beim Onlinebanking oberste Priorität, weshalb wir damit verantwortungsvoll und zweckgebunden umgehen und sie grundsätzlich nicht ohne Ihre Einwilligung an Dritte weitergeben. Außerdem setzen wir stets auf die aktuellsten <a routerLink="/it-sicherheit/">Sicherheitsstandards</a>: Eine Firewall verhindert den nicht autorisierten Zugriff von außen auf die Daten in unseren Systemen. Darüber hinaus sorgt ein mehrstufiges Verschlüsselungs- und Identifizierungssystem dafür, dass Unbefugte Ihre Daten weder erfragen noch abfangen oder lesbar machen können.</p>`,
    category: ListCategory.category4,
    expanded: false,
  },
  {
    title: `Was ist ein Tagesgeld?`,
    content: `<p>Ein Tagesgeld ist eine Anlagemöglichkeit auf Guthabenbasis, bei der Sie einen Betrag ohne
  festgelegte Laufzeit mit einem variablen Zinssatz anlegen und über diesen jederzeit
  verfügen können.</p>
<p>Anleger können täglich über das Guthaben verfügen und in der Regel jederzeit weitere
  Einzahlungen leisten. Somit bietet ein Tagesgeld die größtmögliche Flexibilität. Solange
  das Tagesgeld in Euro abgeschlossen wird, entfallen zudem Fremdwährungsrisiken. Zwar
  besteht nach wie vor ein Ausfallrisiko der Bank, dieses jedoch wird je nach gewählter
  Einlage durch die jeweilige nationale Einlagensicherung abgesichert.<br>
  Der bei einem Tagesgeld angegebene Zinssatz bezieht sich üblicherweise auf ein Jahr. Je
  nach Bank werden die Zinsen in unterschiedlichen Intervallen gutgeschrieben: monatlich,
  quartalsweise, halbjährlich oder jährlich. Durch diese Intervalle macht sich zudem ein
  Zinseszins-Effekt bemerkbar. Erfolgt die Gutschrift erst mit der Kontoauflösung,
  entfällt der Zinseszins-Effekt.</p>
<p>Des Weiteren profitieren Sie von der Kostenfreiheit, denn ZinsUnion berechnet weder für
  die Kontoeröffnung noch für die Kontoführung Gebühren. Außerdem übernehmen wir die
  Kosten für die Auslandsüberweisungen von Ihrem Zinsunion-Konto auf Ihr Tagesgeldkonto und
  zurück.</p>`,
    category: ListCategory.category5,
    expanded: false,
  },

  {
    title: `Was ist Flexgeld?`,
    content: `<p>Flexgeld ist ein flexibles Festgeld, also eine Mischung zwischen Festgeld und Tagesgeld.
  Flexgeld funktioniert so: Sie vereinbaren ähnlich wie bei einem Festgeldabschluss zu
  Beginn eine Laufzeit und einen Festzinssatz. Dieser ist meist höher als die üblichen
  Tagesgeldzinssätze, da Ihr Geld bei einem Festgeldkonto fix an die Laufzeit gebunden
  ist. Allerdings haben Sie bei diesem flexiblen Festgeld jederzeit die Möglichkeit, Ihre
  Anlage vorzeitig zu kündigen und somit vorzeitig über Ihr Geld zu verfügen.</p>
<p>Aber dies ist nicht der einzige Vorteil von Flexgeld. Bei vielen dieser Angebote müssen
  Sie selbst im Falle der vorzeitigen Verfügung nicht auf eine Verzinsung verzichten! Ihre
  Zinsen gehen dank des sogenannten Basiszins nicht ganz verloren, das angelegte Geld wird
  Ihnen mit den erzielten Zinsen ausbezahlt.</p>
<p>Bei Abschluss eines Flexgeldes haben Sie somit den Vorteil der hohen und fixen Verzinsung
  über die gesamte Laufzeit, können aber ähnlich wie bei Tagesgeld durch vorzeitige
  Kündigung und bei vorhandener Basisverzinsung auch flexibel und profitabel auf Ihr
  Erspartes zurückgreifen.</p>`,
    category: ListCategory.category5,
    expanded: false,
  },

  {
    title: `Was ist ein Festgeld?`,
    content: ` <p>Ein Festgeld (synonym: Termineinlage, Termingeld, Festgeldeinlage) ist eine
  Anlagemöglichkeit, bei der Sie einen festen Betrag einmalig mit einer festen Laufzeit zu
  einem im Voraus vereinbarten, festen Zinssatz, anlegen können. Die Kapitalrückzahlung
  sowie die Zinszahlung sind beim Festgeld zunächst vertraglich garantiert, da weder das
  Kapital noch die Zinsen einem Kurs- oder Zinsrisiko unterliegen. Solange das Festgeld in
  Euro abgeschlossen wird, entfallen zudem Fremdwährungsrisiken. Zwar besteht nach wie vor
  ein Ausfallrisiko der Bank, dieses jedoch wird je nach gewählter Einlage durch die
  jeweilige nationale Einlagensicherung abgesichert.</p>
<p>Üblicherweise können Sie vor Fälligkeit eines Festgeldes nicht über das Guthaben
  verfügen. Dies ist bei uns anders: ZinsUnion bietet bei einigen Festgeldern eine
  vorzeitige Kündigungsmöglichkeit an, teilweise sogar mit Verzinsung auf Tagesgeldniveau
  (Basiszins) bis zum Zeitpunkt der Kündigung. Ausnahmen stellen unter anderem Festgelder
  in Fremdwährung dar.</p>
<p>Ein weiterer Vorteil ist die Zinssicherheit des Festgeldes, vor allem auch im Vergleich
  zum Tagesgeldkonto. Bei einem Tagesgeld gilt ein variabler Zinssatz. Bei einem Festgeld
  ist der vereinbarte Zinssatz für die gesamte Laufzeit gleichbleibend.</p>
<p>Des Weiteren profitieren Sie von der Kostenfreiheit. ZinsUnion berechnet weder für die
  Kontoeröffnung noch für die Kontoführung Gebühren. Außerdem übernehmen wir die Kosten
  für die Auslandsüberweisungen von Ihrem Zinsunion-Konto auf Ihr Festgeldkonto und die
  Kosten für die Rücküberweisung bei Fälligkeit für Sie.</p>
`,
    category: ListCategory.category5,
    expanded: false,
  },
  {
    title: `Wann beginnt die Laufzeit meiner Anlage?`,
    content: `    <p>Die Laufzeit Ihres gewählten Fest- oder Tagesgeldes beginnt, sobald uns alle
  erforderlichen Unterlagen von Ihnen vorliegen, die automatische Überweisung auf Ihr
  Anlagekonto erfolgt ist und die Partnerbank das Geld angelegt hat. Aufgrund der
  Unterlagen und ggf. deren Versand ins Ausland kann die Eröffnung der Anlage einige Tage
  in Anspruch nehmen. Sollten wir einen papierhaften Antrag an die Partnerbank
  weiterleiten, hinterlegen wir Ihnen einen Scan Ihres Originalantrags im Onlinebanking in
  Ihrer elektronische Postbox unter dem Reiter „Dokumente“ und schicken Ihnen eine
  Nachricht.</p>
<p>Im Onlinebanking unter „Meine Anlagen“ werden Sie über die erfolgreiche Eröffnung Ihres
  Fest- oder Tagesgeldes informiert. Ihre Bestätigung können Sie ebenfalls in Ihrer
  elektronischen Postbox im Reiter „Dokumente“ einsehen. Sobald wir Ihnen diese Dokumente
  in Ihre Postbox hinterlegt haben, erhalten Sie eine E-Mail, dass Sie Ihre Dokumente nun
  abrufen können.</p>`,
    category: ListCategory.category5,
    expanded: false,
  },
  {
    title: `Wie hoch sind die Mindest- und Maximaleinlagen bei Tages- und Festgeldern?`,
    content: `<p>Die Höhe der Mindesteinlage ist je nach Partnerbank unterschiedlich. Die genauen Angaben
  finden Sie im jeweiligen Produktangebot.</p>`,
    category: ListCategory.category5,
    expanded: false,
  },
  {
    title: `In welchen Währungen kann ich anlegen?`,
    content: `<p>Je nach Ihrer getroffenen Wahl und dem Angebot unserer Partnerbanken wird die Währung
  Ihrer Anlage bestimmt. So können Sie sich zwischen Anlagen in Euro oder einer
  alternativen Währung (US-Dollar, Norwegische Kronen) entscheiden. Angebote in weiteren
  Fremdwährungen (z. B. Britische Pfund) sind in Planung.</p>
`,
    category: ListCategory.category5,
    expanded: false,
  },
  {
    title: `Wie wird der Zins für meine Anlage berechnet?`,
    content: `<p>Die Zinsberechnung ist abhängig vom jeweils gewählten Fest- oder Tagesgeld. Details
  entnehmen Sie bitte dem jeweiligen Produktinformationsblatt.</p>
`,
    category: ListCategory.category5,
    expanded: false,
  },
  {
    title: `Kann sich der Zinssatz
  für meine Anlage während der Laufzeit verändern?`,
    content: `<p>Bei Festgeld ist die Verzinsung Ihres Guthabens für die vereinbarte Laufzeit garantiert.
    Die Wiederanlage Ihres Festgeldes bei Fälligkeit erfolgt zu dem dann gültigen Zinssatz.
    Diesen entnehmen Sie bitte den Produktinformationen.</p>
<p>Bei Tagesgeld ist der Zinssatz variabel und kann sich im Laufe der Zeit verändern. Die
    jeweils gültigen Konditionen sind für Sie in Ihrem ZinsUnion Onlinebanking einsehbar.
</p>`,
    category: ListCategory.category5,
    expanded: false,
  },
  {
    title: `Wann und wo werden die Zinsen gutgeschrieben?`,
    content: `<p>Die Zinsgutschrift kann sich von Anlage zu Anlage unterscheiden und erfolgt bei Festgeld
  entweder separat oder zusammen mit der Rückzahlung des Anlagebetrages bei Fälligkeit.
  Diese werden dann auf Ihrem Zinsunion-Konto gutgeschrieben. Je nach Anlagedauer und
  Produktmerkmalen werden ggf. Zinsen kapitalisiert (Zinseszinseffekt).</p>
<p>Bei einer Tagesgeldanlage hängt die Zinszahlung von der Produktgestaltung ab und kann je
  nachdem monatlich, quartalsweise, halbjährlich oder jährlich erfolgen. Bitte beachten
  Sie, dass die Zinsen abzüglich eventuell im Ausland anfallender Quellensteuern
  gutgeschrieben werden.</p>
`,
    category: ListCategory.category5,
    expanded: false,
  },
  {
    title: `Welche unterschiedlichen Laufzeiten werden für ein Festgeld angeboten?`,
    content: `<p>Die unterschiedlichen Laufzeiten variieren abhängig vom Produkt und können sich von
  Partnerbank zu Partnerbank unterscheiden. Einzelheiten können Sie den jeweiligen
  Produktdetails bzw. Produktinformationsblättern entnehmen.</p>
`,
    category: ListCategory.category5,
    expanded: false,
  },
  {
    title: `Was geschieht am Ende der Laufzeit eines Festgeldes?`,
    content: `     <p>Derzeit ist bei unseren Partnerbanken die Verlängerung komplett online und ohne weitere
  Unterlagen möglich. Falls eine Partnerbank mehrere Produkte anbietet, haben Sie zudem
  die Wahl zwischen einer Verlängerung des Gesamtbetrages mit derselben Laufzeit und den
  anderen Laufzeitprodukten, das heißt, Sie können in der Regel im Zeitraum zwischen 28
  und 5 Kalendertagen vor Fälligkeit bequem online wechseln. Zudem können Sie in der Regel
  wählen, ob Sie die Zinsen wieder mit anlegen möchten oder eine Auszahlung auf Ihr
  Verrechnungskonto (Zinsunion-Konto) wünschen.</p>
<p>Loggen Sie sich dazu einfach in Ihr ZinsUnion&nbsp;Onlinebanking ein, klicken Sie unter
  „Meine Anlagen“ auf den Button „Festgeld verlängern“ und bestätigen Sie den Auftrag mit
  Ihrer persönlichen PIN – fertig. Sie müssen keine neuen Dokumente ausdrucken oder
  unterschreiben. Selbstverständlich informieren wir Sie darüber auch rechtzeitig per
  E-Mail. Bitte beachten Sie, dass der Button „Festgeld verlängern“ nur im beschriebenen
  Zeitraum zwischen 28 und 5 Kalendertagen vor Fälligkeit verfügbar ist.</p>
<p>Bei einigen Banken ist mittlerweile auch eine automatische Verlängerung möglich. Die
  bisher aufgelaufenen Zinsen (ggf. abzüglich Quellensteuern) werden dabei, sofern im
  Produktinformationsblatt nicht anders beschrieben, im Rahmen der Verlängerung zusammen
  mit dem ursprünglichen Anlagebetrag wieder angelegt. Die Verlängerung erfolgt zu den am
  Tag der Fälligkeit für die neue Laufzeit geltenden Konditionen. Dieser Zinssatz kann von
  dem aktuellen Zinssatz abweichen.</p>
<p>Bei einer ursprünglichen Laufzeit bis zu 12 Monaten wird Ihr Festgeld automatisch für
  dieselbe Laufzeit verlängert. Bei einer ursprünglichen Laufzeit über 12 Monate erfolgt
  die Verlängerung für weitere 12 Monate.</p>
<p>Selbstverständlich können die Verlängerung über die entsprechende Funktion jederzeit bis
  fünf Kalendertage vor Ablauf des Festgeldes unter „Meine Anlagen“ im ZinsUnion
  Onlinebanking bequem deaktivieren. Dann wird Ihnen der Anlagebetrag inkl. Zinsen und
  ggf. abzüglich Quellensteuer (siehe Punkt 3) bei Fälligkeit automatisch auf Ihr
  Zinsunion-Konto bei der Bank AG zurücküberwiesen.</p>
<p>Eine Aufteilung in Teilbeträge oder unterschiedliche Laufzeiten ist im Rahmen der
  Verlängerung leider nicht vorgesehen. Sollten Sie dies wünschen, müssten Sie die
  Rückzahlung nach Fälligkeit abwarten und neue Aufträge zur Festgeldanlage über das
  ZinsUnion Onlinebanking erteilen. Da es sich dann um neue Festgeldanträge handelt,
  funktioniert der Prozess wie bei der Erstanlage.</p>
<p>Bei Fälligkeit und Rücküberweisung Ihres Festgeldes erhalten Sie von unserer Partnerbank
  eine Kontoabrechnung in Ihrer elektronischen Postbox im Onlinebanking.</p>
`,
    category: ListCategory.category5,
    expanded: false,
  },
  {
    title: `Welche Voraussetzungen müssen Banken erfüllen, um als Partnerbank Anlagenprodukte über ZinsUnion anbieten zu dürfen?`,
    content: `<p>Bei der Auswahl unserer Partnerbanken hat die Sicherheit Ihrer Anlage höchste
    Priorität. Aus diesem Grund kooperieren wir lediglich mit Partnerbanken, welche von
    einer nationalen Einlagensicherung nach EU-Richtlinien abgesichert sind (oder über
    eine nationale Einlagensicherung in vergleichbarer Höhe bei Fremdwährungen verfügen)
    und eine Vollbanklizenz ihres nationalen Regulators besitzen. Darüber hinaus sind
    alle unsere ausländischen Partnerbanken bei der Bundesanstalt für
    Finanzdienstleistungsaufsicht (BaFin) als grenzüberschreitend tätige Kreditinstitute
    registriert.</p>
<p>Unsere deutschen Partnerbanken unterliegen der Aufsicht durch die Bundesanstalt für
    Finanzdienstleistungsaufsicht (BaFin) sowie der Europäischen Zentralbank (EZB).</p>
`,
    category: ListCategory.category6,
    expanded: false,
  },
  {
    title: `Warum sind die
  Anforderungen für eine Kontoeröffnung bei den Partnerbanken teilweise
  unterschiedlich?`,
    content: `<p>Die genauen Anforderungen an eine Kontoeröffnung können sich von Partnerbank zu
  Partnerbank unterscheiden. Der Grund dafür sind unterschiedliche gesetzliche und
  regulatorische Bestimmungen im jeweiligen Land der Partnerbank. Die jeweiligen
  Anforderungen finden Sie auf den Produktseiten von ZinsUnion und in den
  Produktinformationsblättern. Selbstverständlich unterstützen wir Sie bei allen
  Fragen im Rahmen der Kontoeröffnung.</p>
<p>Die entsprechenden Unterlagen werden Ihnen bei der Auswahl des Anlageprodukts bereits
  vorausgefüllt zur Verfügung gestellt. Erst nachdem wir die kompletten Unterlagen von
  Ihnen erhalten haben, kann die Partnerbank Ihr Konto eröffnen.</p>
`,
    category: ListCategory.category6,
    expanded: false,
  },
  {
    title: `Warum sind die Zinsen bei den Partnerbanken teilweise höher als bei meiner eigenen Bank?`,
    content: `<p>Es kann unterschiedliche, zum Teil sehr spezielle Gründe geben, warum Zinsen
  unterschiedlich sind:</p>
<p>Andere Länder weisen zum Teil ein deutlich stärkeres Wirtschaftswachstum als
  Deutschland auf.</p>
<p>Banken in anderen Ländern können mit einer deutlich reduzierten Kostenbasis operieren
  (z. B. Löhne, Mieten) und erwirtschaften höhere Zinsen auf Kredite. Diese Vorteile
  können sie an Sie weitergeben.</p>
<p>Sparmärkte sind zudem zutiefst lokale Märkte. Während Deutsche Banken momentan meist
  recht unattraktive Zinssätze&nbsp; anbieten, können in anderen Ländern viel höhere
  Zinserträge erwirtschaftet werden. Wir ermöglichen Ihnen einen Zugang zu diesen
  attraktiveren Zinsen.</p>
<p>Bitte beachten Sie jedoch, dass sich Zinsen über die Zeit ändern können und ein
  heutiger Zinsvergleich keine Indikation für Unterschiede bei zukünftigen Zinssätzen
  darstellt.</p>
`,
    category: ListCategory.category6,
    expanded: false,
  },
  {
    title: `Fallen meine Verträge mit den Partnerbanken unter deutsches Recht?`,
    content: ` <p>Nein, die Verträge richten sich nach dem Recht des jeweiligen Landes unserer
  Partnerbanken. Die Vertragssprache ist Englisch; zudem erhalten alle Verträge eine
  deutsche Hilfsübersetzung, um eine größtmögliche Transparenz und Sicherheit zu
  schaffen. Die Verträge der Partnerbanken stimmen im Wesentlichen mit deutschen
  Einlagenverträgen überein, bei Fragen steht Ihnen unser <a
      routerLink="/kontakt/">Kundenservice</a> gerne zur Verfügung.
</p>
`,
    category: ListCategory.category6,
    expanded: false,
  },
  {
    title: `Wo bekomme ich Hilfe, wenn ich mir nicht sicher bin, bei welcher Partnerbank ich anlegen soll?`,
    content: `<p>Sowohl unsere Webseite als auch unser Onlinebanking bieten Ihnen umfassende
  Informationen zu unseren Partnerbanken und den angebotenen Produkten. Auf Basis
  dieser ausführlichen Informationen können Sie die einzelnen Partnerbanken und die
  Angebote miteinander vergleichen. Informationen zu unseren Partnerbanken finden Sie
  außerdem in den Produktinformationsblättern.</p>
<p>Da uns weder Ihre individuelle Vermögenssituation noch Ihre hinter der
  Festgeldeinlage stehenden Ziele bekannt sind, können und dürfen wir Ihnen keine
  Anlageberatung anbieten. Wir bitten hierfür um Ihr Verständnis.</p>
`,
    category: ListCategory.category6,
    expanded: false,
  },
  {
    title: `Kann ich die Partnerbanken auch direkt kontaktieren?`,
    content: `<p>Grundsätzlich können Sie unsere Partnerbanken auch direkt kontaktieren.&nbsp;Da wir
  uns aber als Ihr erster Ansprechpartner verstehen, möchten wir Sie bitten, bei
  Fragen zuerst Kontakt mit unserem <a routerLink="/kontakt/">Kundenservice</a>
  aufzunehmen. Bei
  Bedarf nehmen wir dann den Kontakt mit den Partnerbanken gerne für Sie auf.</p>
`,
    category: ListCategory.category6,
    expanded: false,
  },
  {
    title: `Was ist ein Einlagensicherungssystem und wie funktioniert es?`,
    content: ` <p>Alle Mitgliedstaaten der Europäischen Union haben sich darauf verständigt, Sparer zu
  schützen. Aus diesem Grund wurden nach harmonisierten europäischen Vorgaben
  nationale Einlagensicherungssysteme geschaffen, um die Spareinlagen der Kunden zu
  sichern. Auch die Länder des Europäischen Wirtschaftsraums, die nicht Mitglieder der
  Europäischen Union sind (z. B. Norwegen) haben entsprechende
  Einlagensicherungssysteme eingerichtet.</p>
<p>Sollte es im Falle einer Krise dazu kommen, dass eine Bank Einlagen nicht oder nicht
  mehr fristgerecht zurückzahlen kann, springt das nationale Einlagensicherungssystem
  ein und übernimmt die Auszahlung. Geldanlagen inkl. angelaufene Zinsen sind bis zu
  100.000 EUR je Kunde und Bank abgesichert. Sofern die Währung des
  Einlagensicherungsfonds eine Fremdwährung ist, erfolgt die Sicherung in
  Fremdwährung. Die Sicherungsgrenze kann dann vom aktuellen Wechselkurs abhängen. Die
  entsprechenden Informationen haben wir für Sie in dem jeweiligen
  Produktinformationsblatt zur Verfügung gestellt und zudem auf unserer <a
      routerLink="/einlagensicherung/" target="_blank"
      rel="noopener noreferrer">Internetseite im Abschnitt Information –
      Einlagensicherung</a> für Sie zusammengestellt.</p>
<p>Für Geschäftskunden besteht eine Begrenzung bis zu 100.000 EUR nicht. Geschäftskunden
  entscheiden selbst über die Höhe des Anlagebetrags.</p>
`,
    category: ListCategory.category7,
    expanded: false,
  },
  {
    title: `In welcher Höhe
  sind die Guthaben auf dem Anlagekonto bei der Partnerbank von einer
  Einlagensicherung abgedeckt?`,
    content: `  <p style="margin: 0cm 0cm 8.25pt 0cm;"><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Die
  gesetzliche Einlagensicherung für Ihr Fest- oder Tagesgeld inkl. angelaufene
  Zinsen beträgt bei unseren europäischen Partnerbanken 100.000 EUR je Kunde und
  Bank bzw. der festgelegte Betrag in Fremdwährung bei Anlage in Fremdwährung. In
  ganz Europa sind die Mindestanforderungen an die nationalen Einlagensicherungen
  harmonisiert (Richtlinien 1994/19/EG und 2009/14/EG). Jüngst sind mit der
  Richtlinie 2014/49/EU weitere Maßnahmen beschlossen worden, die den Schutz der
  Anleger in der EU verbessern sollen. So wird die Auszahlungsfrist des
  Einlagensicherungsfonds kontinuierlich von 20 auf 7 Arbeitstage bis 2024
  reduziert. Insgesamt kann der Vorgang jedoch einige Wochen länger dauern, da
  zunächst festgestellt werden muss, ob tatsächlich ein Fall für die
  Einlagensicherung vorliegt. Des Weiteren erhält jeder Kunde über ZinsUnion
  einen Informationsbogen zur Einlagensicherung von der jeweiligen Bank, bei der
  eine Einlage erfolgt ist. Ebenfalls bis 2024 müssen die Finanzmittel im
  jeweiligen Einlagensicherungsfonds zudem mindestens 0,8 % der gedeckten Einlagen
  entsprechen. Seit Juli 2015 erfolgt die sukzessive Umsetzung der Richtlinie
  2014/49/EU in allen Mitgliedsstaaten.</span></p>
<p style="margin: 0cm 0cm 8.25pt 0cm;"><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Einzelne
  unserer Partnerbanken sind über die gesetzliche Einlagensicherung hinaus auch
  Mitglied in weiteren Sicherungsinstitutionen. Unsere deutschen Partnerbanken
  GRENKE Bank und Hanseatic Bank sind beispielsweise Mitglieder des
  Bundesverbandes Deutscher Banken e.V. sowie zusätzlich des Prüfungsverbandes
  Deutscher Banken e.V. und wirken am Einlagensicherungsfonds mit. Generell gilt:
  alle Partnerbanken innerhalb der EU verfügen immer über eine Einlagensicherung
  pro Kunde und Institut im Gegenwert von 100.000 EUR je Kunde und Bank bzw. der
  festgelegte Betrag in Fremdwährung bei Anlage in Fremdwährung. Details zur
  Einlagensicherung finden Sie in den jeweiligen Angebotsdetails und im
  Produktinformationsblatt.<br>
</span></p>`,
    category: ListCategory.category7,
    expanded: false,
  },
  {
    title: `Wie unterstützt mich ZinsUnion im Falle einer Entschädigungssituation?`,
    content: `<p>Für uns sind Transparenz und höchste Sicherheitsstandards oberstes Gebot. Aus diesem
  Grunde haben wir für Sie nur Partnerbanken ausgewählt, die ein solides
  Geschäftsmodell besitzen und daher langfristig attraktive Zinsen bieten können. Alle
  Partnerbanken sind Kreditinstitute aus der Europäischen Union oder dem Europäischen
  Wirtschaftsraum, deren Tagesgeld- und Festgeldangebote ihrer jeweiligen nationalen
  Einlagensicherung unterliegen. Zusätzlich veröffentlichen wir auf unserer Webseite
  und in Produktinformationsblättern ausführliche Informationen zu den Partnerbanken
  und deren Herkunftsländern.</p>
<p>Im Fall einer Entschädigungssituation unterstützen wir unsere Kunden
  selbstverständlich im Rahmen des rechtlich und praktisch Möglichen, z. B.</p>
<ul>
  <li>durch aktuelle Informationen zum Stand des Verfahrens, die wir beim Management
      der betroffenen Partnerbank sowie dem zuständigen Einlagensicherungssystem
      direkt einholen</li>
  <li>bei der Kommunikation mit dem Einlagensicherungssystem im Zusammenhang mit der
      Abwicklung von Entschädigungszahlungen.</li>
</ul>
`,
    category: ListCategory.category7,
    expanded: false,
  },
  {
    title: `Wo erhalte ich Informationen zur Besteuerung?`,
    content: `<p style="background: white; margin: 0cm 0cm 8.25pt 0cm;"><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Die
  Besteuerung von Zinseinkünften ist in den Mitgliedstaaten der EU weitgehend
  harmonisiert. Daher folgt die Besteuerung dem Grundsatz nach in der Höhe völlig
  analog zu einem Anlageprodukt in Deutschland.</span></p>
<p style="background: white; margin: 0cm 0cm 8.25pt 0cm;"><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Der
  einzige mögliche Unterschied ist, dass je nach Land eine Quellensteuer im
  Ausland einbehalten wird. Diese ist in Deutschland anrechenbar und wird bei der
  Angabe in Ihrer Einkommensteuererklärung automatisch berücksichtigt, sodass Sie
  auch in diesem Fall der Höhe nach völlig analog zur Anlage in Deutschland
  besteuert werden. In Einzelfällen ist hierfür ein kostenloser Nachweis über die
  steuerliche Ansässigkeit in Deutschland erforderlich. Alle Unterlagen und
  Details werden Ihnen vor Abschluss einer Anlage mitgeteilt.</span></p>
<p style="background: white; margin: 0cm 0cm 8.25pt 0cm;"><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Nach
  Fälligkeit bzw. Zinszahlungsterminen – mindestens jedoch ein Mal pro
  Kalenderjahr – erhalten Sie zudem alle erforderlichen Unterlagen und Nachweise
  für Ihre Steuererklärung in Ihrer elektronischen Postbox. </span></p>
<p style="background: white; margin: 0cm 0cm 8.25pt 0cm;"><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Einen
  generellen Überblick über die steuerlichen Besonderheiten der verschiedenen
  europäischen Länder erhalten Privatkunden </span><a
  routerLink="/steuern/"><span
      style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif;">hier&nbsp;</span></a>und
Geschäftskunden <a
  routerLink="/geschaeftskunden/steuern/">hier</a>.</p>
<p style="background: white; margin: 0cm 0cm 8.25pt 0cm;"><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Für
  Detailinformationen zur Besteuerung in Ihrem konkreten Einzelfall wenden Sie
  sich bitte an Ihren Steuerberater. Bitte beachten Sie, dass Ihnen unser
  Kundenservice keine steuerliche Beratung anbieten kann. Wir bitten um Ihr
  Verständnis.</span></p>`,
    category: ListCategory.category8,
    expanded: false,
  },
  {
    title: `Wo kann ich einen
  Freistellungsauftrag, eine Nichtveranlagungsbescheinigung und einen Antrag auf
  Kirchensteuerabzug für Kapitalerträge einreichen?`,
    content: `<p style="background: white; margin: 0cm 0cm 8.25pt 0cm;"><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Als
  Privatkunde benötigen Sie für Geldanlagen im Ausland weder einen
  Freistellungsauftrag, noch eine Nichtveranlagungsbescheinigung, oder einen
  Antrag auf Kirchensteuerabzug, da wir in Deutschland keine Kapitalertragsteuer
  für Sie einbehalten und im Ausland andere Bestimmungen gelten.</span></p>
<p style="background: white; margin: 0cm 0cm 8.25pt 0cm;"><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Eine
  Ausnahme stellen die Festgeldangebote der deutschen Partnerbanken dar, dort
  können Sie einen Freistellungsauftrag stellen bzw. eine
  Nichtveranlagungsbescheinigung einreichen. Den Freistellungsauftrag erhalten Sie
  bereits mit der Festgeldbestätigung in Ihrer Postbox. Die
  Nichtveranlagungsbescheinigung erhalten Sie auf Antrag bei Ihrem zuständigen
  Finanzamt. Bitte senden Sie diese Unterlagen an ZinsUnion – wir leiten diese
  dann an unsere entsprechende deutsche Partnerbank weiter.</span></p>`,
    category: ListCategory.category8,
    expanded: false,
  },
  {
    title: `Müssen Kursgewinne eines in Fremdwährung geführten Fest- oder Tagesgeldes versteuert werden?`,
    content: `<p style="background: white; margin: 0cm 0cm 8.25pt 0cm;"><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Ja,
  Kursgewinne müssen genauso wie auch Zinseinkünfte in der Steuererklärung
  angegeben werden. Alle hierfür erforderlichen Unterlagen werden Ihnen zeitnah
  nach der Fälligkeit des Festgeldes bzw. nach Zinszahlung – bei Tagesgeld
  mindestens jedoch ein Mal pro Kalenderjahr – in Ihrem elektronischen Postfach
  zur Verfügung gestellt. Bitte beachten Sie in Ihrem eigenen Interesse, dass bei
  Fremdwährungen auch Kursverluste eintreten können (Wechselkursrisiken). Diese
  können Sie ggf. steuermindernd in Ihrer persönlichen Steuererklärung
  angeben.</span></p>`,
    category: ListCategory.category8,
    expanded: false,
  },
  {
    title: `Erhalte ich einen Nachweis über einbehaltene Steuern?`,
    content: `  <p style="background: white; margin: 0cm 0cm 8.25pt 0cm;"><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Ein
  Nachweis der jeweiligen Partnerbank, bei der Sie Ihr Festgeld abgeschlossen
  haben, wird Ihnen automatisch in Ihrer elektronischen Postbox zur Verfügung
  gestellt, d. h. er muss von Ihnen nicht beantragt werden. Sie können die
  Unterlagen jederzeit einfach und direkt in Ihrer Postbox ansehen, herunterladen
  und ausdrucken.</span></p>`,
    category: ListCategory.category8,
    expanded: false,
  },
  {
    title: `Behält ZinsUnion Steuern auf Kapitalerträge ein?`,
    content: `<p style="background: white; margin: 0cm 0cm 8.25pt 0cm;"><span
  style="font-size: 11.5pt; font-family: 'Open Sans',sans-serif; color: #404040;">Nein.
  Die Zinserträge fallen bei der jeweiligen Partnerbank an, bei der Ihr
  Anlageprodukt geführt wird. Sie bekommen am Ende der Laufzeit Unterlagen von der
  Partnerbank, aus denen alle notwendigen Angaben für Ihre Steuerklärung
  hervorgehen.</span></p>
`,
    category: ListCategory.category8,
    expanded: false,
  },
  {
    title: `Welche besonderen Chancen und Risiken bestehen bei einem Fest- oder Tagesgeld?`,
    content: `  <p>Die Anlage eines Fest- oder Tagesgeldes ist für einen Kunden mit geringen Risiken
  verbunden. Ein Kursrisiko besteht nicht, da Festgelder keinen Kursschwankungen
  ausgesetzt sind. Tagesgelder unterliegen im Gegensatz zu Festgeldern jedoch
  Zinsänderungsrisiken.</p>
<p>Wie bei Spareinlagen üblich, sind Festgelder über verschiedene Institutionen und
  Einlagensicherungsverbände vor einer möglichen Insolvenz eines Kreditinstitutes
  abgesichert. In Ländern der Europäischen Union besteht eine EU-weit regulierte,
  nationale Einlagensicherung pro Kunde und Institut bis zu 100.000 Euro bzw. dem
  Gegenwert in der jeweiligen Landeswährung.</p>
<p>Für Geschäftskunden besteht eine Begrenzung bis zu 100.000 Euro nicht. Diese
  Anlagebeträge über 100.000 Euro bzw. über der Sicherungsgrenze privater
  Einlagensicherungsverbände sind einem erhöhten Risiko ausgesetzt.</p>
<p>Wenn die Anlagesumme die jeweils gültige Höchstgrenze der Einlagensicherung übersteigt,
  besteht für diese Differenz ein Ausfallrisiko, sofern die Partnerbank ausfällt.</p>
<p>Ferner besteht kein Geschäftsrisiko, da die Zinszahlung nicht wie bei einer Aktie an den
  Unternehmenserfolg geknüpft ist.</p>
<p>Politische Risiken, z.B. Beschränkungen der Zahlungsverkehrsfreiheit, bestehen innerhalb
  der Europäischen Union in der Regel nicht.</p>
<p>Solange das Fest- oder Tagesgeld in Euro abgeschlossen wird, bestehen keine
  Fremdwährungsrisiken.</p>
<p>Weitere Risiken können in unterschiedlichen Sprachen, Rechts- und Steuersystemen liegen.
</p>
`,
    category: ListCategory.category9,
    expanded: false,
  },
  {
    title: `Welche besonderen Chancen und Risiken bestehen bei einem Fest- oder Tagesgeld in Fremdwährung?`,
    content: `<p>Eine Anlage in fremder Währung unterliegt einem Währungsrisiko, da der Wechselkurs
  zwischen einer fremden Währung und dem Euro naturgemäß schwanken kann. Die Höhe der
  Rückzahlung in Euro hängt demnach vom Wechselkurs zum Rückzahlungszeitpunkt ab: verliert
  der Euro während der Laufzeit gegenüber der Fremdwährung an Wert, kann es zu einem
  Währungsgewinn kommen. Andersherum kann es zu einem Währungsverlust kommen, sollte der
  Euro während der Laufzeit gegenüber der Fremdwährung an Wert gewinnen. Je nach Höhe des
  Währungsverlustes kann eine Situation entstehen, in der Sie auch unter Berücksichtigung
  des Zinsertrags am Ende der Laufzeit weniger ausgezahlt bekommen, als Sie ursprünglich
  angelegt haben.</p>
<p><b>Beispiel anhand einer Anlage in US-Dollar</b><span style="font-weight: 400;"> (Anlage
      im Dezember 2016, Rückzahlung im Dezember 2017): Bei einer Anlage von 100.000 EUR zu
      einem Zinssatz von 1,70 % wird nach einem Jahr inklusive Zinsen 101.700 EUR
      ausgezahlt. Bei einer Anlage von 100.000 EUR in USD zu einem Zinssatz von 1,70 % im
      gleichen Zeitraum, wäre ein Verlust von 11.398 EUR entstanden. </span></p>
<p><b>Berechnung</b><span style="font-weight: 400;">: Zu Beginn der Anlage im Dezember 2016
      betrug der Wechselkurs 1.0390. Eine Anlage von 100.000 EUR entsprachen nach
      Umrechnung 103.900 USD. Inklusive 1,7 % Zinsen beträgt die Anlage nach einem Jahr
      105.666 USD. Der Währungskurs im Dezember 2017 beträgt 1.1926. Der verzinste
      Anlagebetrag in Höhe von 105.666 USD wird aufgrund des ungünstigeren Wechselkurses
      in 88.601.63 EUR gewechselt und ausgezahlt. Es ist bei der Anlage also zu einem
      Verlust von 11.398 EUR aufgrund des Währungsrisikos gekommen. </span></p>
<p>Bitte beachten Sie:&nbsp; Der üblicherweise täglich veröffentlichte <a
      href="https://www.ecb.europa.eu/stats/exchange/eurofxref/html/index.en.html">Wechselkurs
      im Devisenhandel</a> (elektronischer Handel in fremder Währung) ist der von der
  Europäischen Zentralbank (EZB) festgelegte Mittelkurs. Der Mittelkurs ist ein
  institutioneller Wert, der in der Regel genau zwischen dem Geldkurs (Kauf von
  Fremdwährung) und dem Briefkurs (Verkauf von Fremdwährung) liegt und als Referenz für
  Währungsgeschäfte dient. Jede Bank stellt für Fremdwährungstransaktionen von Kunden auf
  der Basis der Mittelkurse eigene Abrechnungskurse, die abhängig von der Marktsituation
  mehr oder weniger deutlich von den amtlichen Kursen abweichen.</p>
<p>Auf den Wechselkurs wirken zusätzlich auch vielfältige andere Einflussfaktoren ein.
  Wirtschaftliche oder politische Instabilität in einzelnen Staaten kann dazu führen, dass
  Beschränkungen für die Konversion der eigenen Währung (z. B. Kurs oder Maximalbetrag zur
  Konversion) verhängt werden. Diese Beschränkungen können dazu führen, dass Sie Ihre
  Einlagen trotz Zahlungsfähigkeit der Partnerbank nicht oder nicht in vollem Umfang in
  EUR umtauschen können. Maßgeblich hierfür können beispielsweise Transferbeschränkungen
  oder sonstige Gesetzesänderungen sein. Sonstige Risiken wie z. B. ein Kursrisiko,
  Geschäftsrisiko oder Zinsänderungsrisiko bestehen jedoch nicht.</p>
<p>Bitte beachten Sie, dass ZinsUnion zu keinem Zeitpunkt Empfehlungen zu einzelnen
  Währungen oder Wechselkursaussichten trifft. Details zu den Chancen und Risiken bei
  Festgeldanlagen in Fremdwährung können Sie den jeweiligen Produktinformationsblättern
  entnehmen.</p>
<p>Sollten Kursverluste eintreten, können Sie diese selbstverständlich steuermindernd in
  Ihrer persönlichen Steuererklärung angeben.</p>`,
    category: ListCategory.category9,
    expanded: false,
  },
];
