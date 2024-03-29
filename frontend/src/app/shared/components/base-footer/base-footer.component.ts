import {AfterViewInit, Component, OnInit} from '@angular/core';
import {faEnvelope as FaEnvelope, faPhone as FaPhone} from '@fortawesome/free-solid-svg-icons'
import {environment as env} from 'src/environments/environment';
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-base-footer',
  templateUrl: './base-footer.component.html',
  styleUrls: ['./base-footer.component.scss']
})
export class BaseFooterComponent implements OnInit, AfterViewInit {
public selectedLanguage = this.languageService.getCurrentLanguage();

  // Unternehmen & Team
  menuCol1: FooterMenu[] = [
    {title: 'about_zinsunion', route: '/ueber-zinsunion'},
    {title: 'welcome_bonus', route: '/willkommenspraemie'},
  ];
  // Private customers
  menuCol2: FooterMenu[] = [
    {title: 'fixed_term_deposit', route: '/festgeld'},
    {title: 'call_money', route: '/tagesgeld'},
  ];
  // Hilfe & Kontakt Help & contact
  menuCol3: FooterMenu[] = [
    {title: 'contact', route: '/kontakt'},
    {title: 'faq', route: '/faqs'},
  ];
  date: Date = new Date();
  faTelephone = FaPhone;
  faEnvelope = FaEnvelope;

  public geti18nKey(): string {
    return `navbar.languages.${this.selectedLanguage}`;
  }

  public selectLanguage(lang: string): void {
    this.selectedLanguage = lang;
    this.languageService.setLanguage(lang);
  }

  constructor(
      private translateService: TranslateService,
      private languageService: LanguageService,
  ) {
  }

  get contacts() {
    return env.contact;
  }

  get emails() {
    return env.emails;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
}


export interface FooterMenu {
  title: string;
  route: string;
}
