import { AfterViewInit, Component, OnInit } from '@angular/core';
import { faAngleDown as FaArrowDown, faAngleUp as FaArrowUp } from '@fortawesome/free-solid-svg-icons'
import {LanguageService} from "../../services/language.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-base-header',
  templateUrl: './base-header.component.html',
  styleUrls: ['./base-header.component.scss']
})
export class BaseHeaderComponent implements OnInit, AfterViewInit {
  public selectedLanguage = this.languageService.getCurrentLanguage();

  faArrowDown = FaArrowDown;
  faArrowUp = FaArrowUp;

  isCollapse1 = true;
  isCollapse2 = true;
  isCollapse3 = true;

  constructor(
      private translateService: TranslateService,
      private languageService: LanguageService,
  ) {
  }

  ngOnInit(): void {
  }

  public geti18nKey(): string {
    return `navbar.languages.${this.selectedLanguage}`;
  }

  public selectLanguage(lang: string): void {
    this.selectedLanguage = lang;
    this.languageService.setLanguage(lang);
  }

  onHover(event): void {
    try {
      event.toggle();
    } catch (e) {

    }

  }

  ngAfterViewInit(): void {
  }

}
