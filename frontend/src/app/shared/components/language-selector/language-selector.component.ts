import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../../services/language.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  public selectedLanguage = this.languageService.getCurrentLanguage();

  public constructor(
    private translateService: TranslateService,
    private languageService: LanguageService,
    ) {
  }

  public ngOnInit(): void {
  }

  public geti18nKey(): string {
    return `navbar.languages.${this.selectedLanguage}`;
  }

  public selectLanguage(lang: string): void {
    this.selectedLanguage = lang;
    this.languageService.setLanguage(lang);
  }
}
