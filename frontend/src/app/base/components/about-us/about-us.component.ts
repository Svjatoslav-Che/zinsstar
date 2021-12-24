import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  private listOfStaff: Staff[] = STAFF_LIST;
  private listOfPartners: Partner[] = PARTNERS_LIST;

  constructor() {
``  }
  ngOnInit(): void {
  }
  get partners(): Partner[] {
    return this.listOfPartners;
  }

  get employees(): Staff[] {
    return this.listOfStaff;
  }

}

export interface Partner {
  alt: string;
  src: string;
}

export interface Staff {
  name: string;
  position: string;
  image: string;
  website?: string;
  website_link?: string;
  website_logo?: string;
}

interface MarketPlace {
  since: string;
  count: string;
  link: string;
  img: string;
}


const PARTNERS_LIST: Partner[] = [
  { src: 'assets/banks/aigis_banca_wordpress.png', alt: 'AIGIS Banca' },
  { src: 'assets/banks/logo_addiko_175x60px.png', alt: 'Addiko Bank' },
  { src: 'assets/banks/abb_wordpress.png', alt: 'Aegean Baltic Bank' },
  { src: 'assets/banks/agram_banka_wordpress.png', alt: 'Agram Banka' },
  { src: 'assets/banks/alior-logo.png', alt: 'Alior Bank' },
  { src: 'assets/banks/aib_wordpress.png', alt: 'Allied Irish Banks' },
  { src: 'assets/banks/aros_kapital_wordpress.png', alt: 'Aros Kapital' },
  { src: 'assets/banks/attica_bank_wordpress.png', alt: 'Attica Bank' },
  { src: 'assets/banks/avida_finans_wordpress.png', alt: 'Avida Finans' },

  { src: 'assets/banks/bacb1.png', alt: 'BACB' },
  { src: 'assets/banks/bff_wordpress_new.png', alt: 'BFF Bank' },
  { src: 'assets/banks/bgfi_bank_wordpress.png', alt: 'BGFIBank Europe' },
  { src: 'assets/banks/bnbank1.png', alt: 'BN Bank' },
  { src: 'assets/banks/brabank_wordpress.png', alt: 'BRAbank' },
  { src: 'assets/banks/bancafinint_wordpress.png', alt: 'Banca Finint' },
  { src: 'assets/banks/bancaifis_logo_wordpress.png', alt: 'Banca Ifis' },
  { src: 'assets/banks/bpc_wordpress.png', alt: 'Banca Popolare di Cortona' },
  {
    src: 'assets/banks/banca_privata_leasing_wordpress.png',
    alt: 'Banca Privata Leasing',
  },
  { src: 'assets/banks/bancaprogetto_wordpress.png', alt: 'Banca Progetto' },
  { src: 'assets/banks/banca-promos_wordpress.png', alt: 'Banca Promos' },
  { src: 'assets/banks/bancasistema1.png', alt: 'Banca Sistema' },
  {
    src: 'assets/banks/civibank_wordpress.png',
    alt: 'Banca di Cividale (CiviBank)',
  },
  { src: 'assets/banks/banco-bai_wordpress.png', alt: 'Banco BAI Europa' },
  { src: 'assets/banks/logo_bni_160x60px.jpg', alt: 'Banco BNI Europa' },
  {
    src: 'assets/banks/finantia_sofinloc_wordpress.png',
    alt: 'Banco Finantia Spain',
  },
  {
    src: 'assets/banks/banco-portuges-de-gestao_wordpress.jpg',
    alt: 'Banco Português de Gestão',
  },
  {
    src: 'assets/banks/gazprombank_wordpress.png',
    alt: 'Bank GPB International',
  },
  {
    src: 'assets/banks/bal_wordpress.png',
    alt: 'Bankhaus August Lenz  Co. AG',
  },
  { src: 'assets/banks/obotritia_wordpress.png', alt: 'Bankhaus Obotritia' },
  { src: 'assets/banks/bcp_wordpress.png', alt: 'Banque BCP S.A.S.' },
  { src: 'assets/banks/wormser_freres_wordpress.png', alt: 'Banque Wormser' },
  { src: 'assets/banks/blueorange_wordpress.png', alt: 'BlueOrange' },
  { src: 'assets/banks/ckv_obs.png', alt: 'CKV Bank' },

  { src: 'assets/banks/collectorbank_wordpress.png', alt: 'Collector Bank' },
  { src: 'assets/banks/cooppank_wordpress.png', alt: 'Coop Pank' },
  { src: 'assets/banks/credorax_wordpress.png', alt: 'Credorax Bank' },
  { src: 'assets/banks/dll_wordpress.png', alt: 'DLL' },

  { src: 'assets/banks/logo_euram_175x60px.png', alt: 'Euram Bank' },
  { src: 'assets/banks/expobank_logo-176x60.png', alt: 'Expobank' },

  { src: 'assets/banks/fibank1.png', alt: 'Fibank' },
  { src: 'assets/banks/gefa_bank_wordpress.png', alt: 'GEFA BANK' },
  { src: 'assets/banks/grenke-bank.png', alt: 'GRENKE Bank' },
  { src: 'assets/banks/greensill_wordpress.png', alt: 'Greensill Bank' },
  {
    src: 'assets/banks/logo_haitong_175x60px-3.jpg',
    alt: 'Haitong Bank S.A. Sucursal en España',
  },

  { src: 'assets/banks/hanseatic_bank_wordpress.png', alt: 'Hanseatic Bank' },
  { src: 'assets/banks/hoist-finance_wordpress-1.png', alt: 'Hoist Finance' },
  { src: 'assets/banks/holm_wordpress.png', alt: 'Holm Bank' },

  { src: 'assets/banks/inbank_wordpress.jpg', alt: 'Inbank' },
  { src: 'assets/banks/instabank_wordpress.png', alt: 'Instabank' },
  {
    src: 'assets/banks/internat_asset_bank_wordpress.png',
    alt: 'International Asset Bank',
  },
  { src: 'assets/banks/investbank_wordpress.png', alt: 'Investbank' },
  { src: 'assets/banks/izola_bank_wordpress.png', alt: 'Izola Bank' },
  { src: 'assets/banks/jandt.png', alt: 'JTBanka' },
  { src: 'assets/banks/ktbank_wordpress.png', alt: 'KT Bank' },
  { src: 'assets/banks/kentbank.png', alt: 'KentBank' },
  { src: 'assets/banks/klarna_wordpress.png', alt: 'Klarna Bank' },
  { src: 'assets/banks/komplett_bank_wordpress.png', alt: 'Komplett Bank' },
  { src: 'assets/banks/lhv_wordpress.png', alt: 'LHV' },
  { src: 'assets/banks/medirect_wordpress.png', alt: 'MeDirect Bank' },
  { src: 'assets/banks/medicinos_wordpress.jpg', alt: 'Medicinos Bankas' },
  { src: 'assets/banks/logo_nordaxbank_260x50px.jpg', alt: 'Nordax Bank' },
  { src: 'assets/banks/nordiska_wordpress.png', alt: 'Nordiska' },
  {
    src: 'assets/banks/north_channel_wordpress.png',
    alt: 'North Channel Bank',
  },
  { src: 'assets/banks/peac-finance_wordpress.png', alt: 'PEAC Bank' },
  { src: 'assets/banks/vfc_wordpress.png', alt: 'PayRay' },
  { src: 'assets/banks/podrovskabanka.png', alt: 'Podravska banka' },
  { src: 'assets/banks/rcb_wordpress.png', alt: 'RCB Bank' },
  { src: 'assets/banks/resurs_bank_wordpress.png', alt: 'Resurs Bank' },
  { src: 'assets/banks/river_bank_wordpress_2.png', alt: 'RiverBank' },
  {
    src: 'assets/banks/signal_iduna_wordpress-2.png',
    alt: 'SIGNAL IDUNA Bauspar AG',
  },
  {
    src: 'assets/banks/sberbank_wordpress-e1605177728807.png',
    alt: 'Sberbank Europe AG',
  },
  { src: 'assets/banks/solution_wordpress.png', alt: 'Solution Bank' },
  { src: 'assets/banks/tbi_id_primary-e1542886467135.jpg', alt: 'TBI Bank' },
  { src: 'assets/banks/tfbank_wordpress.png', alt: 'TF Bank' },

  {
    src: 'assets/banks/logo_unicreditbank_wordpress.jpg',
    alt: 'UniCredit Bank',
  },

  { src: 'assets/banks/vivibanca_wordpress.png', alt: 'ViViBanca' },

  { src: 'assets/banks/younited_wordpress.jpg', alt: 'Younited Credit' },
  { src: 'assets/banks/illimity_wordpress.png', alt: 'illimity Bank' },
  { src: 'assets/banks/imprebanca_wordpress.png', alt: 'imprebanca' },
  { src: 'assets/banks/solarisbank_wordpress.png', alt: 'solarisBank' },
  { src: 'assets/banks/siauliu_bankas_wordpress.png', alt: 'Šiaulių Bankas' },
];

const STAFF_LIST: Staff[] = [
  {
    name: 'Dr. Clemens Freund',
    position: 'Chief Executive Officer (CEO)  Gründer',
    image: 'dr-tamaz-georgadze.jpg',
  },
  {
    name: 'Dr. Adriana Slowloski',
    position: 'Chief Financial Officer (CFO) Gründer',
    image: 'dr-frank-freund.jpg',
  },
  {
    name: 'Stefanie Meier',
    position: 'Chief Operation Officer (COO) Gründer',
    image: 'michael-stephan.jpg',
  },
  {
    name: 'Sarah Jung',
    position: ' Vice President Finance',
    image: 'igor-bartkowiak.jpg',
  },
  {
    name: 'Sophie Aalbers',
    position: 'Director Information Technology',
    image: 'yuval-farkas.jpg',
  },
  {
    name: 'Felix Fromm',
    position: 'Chief Investment Officer (CIO)',
    image: 'kim-felix-fomm.jpg',
  },
  {
    name: 'Tina Saaber',
    position: 'Director Partner Bank Management  Operations',
    image: 'matthias-klaubert.jpg',
  },
  {
    name: 'Daniel Smith',
    position: 'Interim Chief Technology Officer (CTO)',
    image: 'daniel-smith.jpg',
  },
  {
    name: 'Katharina Lüth',
    position: 'Vice President Europe',
    image: 'katharina-lucc88th.jpg',
  },
  {
    name: 'Dr. Abe Roberts',
    position: 'General Counsel',
    image: 'dr-marc-roberts.jpg',
  },
  {
    name: 'Lea Meier',
    position: 'Vice President Talent  Culture',
    image: 'dr-lea-schroeder.jpg',
  },
  {
    name: 'Dr. Verena Thaler',
    position: 'Vice President of Strategy and Business Development',
    image: 'dr-verena-thaler.jpg',
  },
  {
    name: 'Lara Kadir',
    position: 'Vice President Business Clients  Partnerships',
    image: 'benedikt-voller.jpg',
  },
  {
    name: 'Steven Amos',
    position: 'Director Customer Service',
    image: 'steven-amos.jpg',
  },
];
//  Untill HERE ! 

const INVESTORS: Staff[] = [
  {
    name: 'Neil Rimer',
    position: '',
    image: 'neilrimer.png',
    website_link: 'https://www.indexventures.com',
    website: 'Indexventures.com',
    website_logo: 'indexventures_200x40.png',
  },
  {
    name: 'Micky Malka',
    position: '',
    image: 'mickymalka.png',
    website_logo: 'ribbitcapital_200x40.png',
    website_link: 'https://ribbitcap.com',
    website: 'Ribbitcap.com',
  },
];
