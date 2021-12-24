import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import LanguageEnum from "../models/api/language.enum";

@Injectable()
export class LanguageService {
  constructor(private translateService: TranslateService) {
    this.translateService.use(this.getCurrentLanguage());
  }

  public getCurrentLanguage(): string {
    return localStorage.getItem(LanguageEnum.LANG) || LanguageEnum.DE;
  }

  public setLanguage(lang: string): void {
    localStorage.removeItem(LanguageEnum.LANG);
    localStorage.setItem(LanguageEnum.LANG, lang);
    this.translateService.use(lang);
  }
}
