import { Injectable } from '@angular/core';

import { environment as env } from 'src/environments/environment';

const API = env.api;

@Injectable({
  providedIn: 'root',
})
export class UrlBuilder {
  constructor() {
  }

  documents(sid: string = '') {
    return `${API}${this.documents$(sid)}`.trim();
  }

  bank(sid: string = ''): string {
    return `${API}${this.bank$(sid)}`.trim();
  }

  user(sid: string = ''): string {
    return `${API}${this.user$(sid)}`.trim();
  }

  offer(sid: string = ''): string {
    return `${API}${this.offer$(sid)}`.trim();
  }

  auth(path: string = ''): string {
    return `${API}${this.auth$(path)}`.trim();
  }

  country(sid: string = ''): string {
    return `${API}${this.country$(sid)}`.trim();;
  }

  admin(path: string = ''): string {
    return `${API}${this.admin$(path)}`.trim();
  }

  refresh(): string {
    return '/refresh';
  }


  private admin$(path: string = '') {
    return `/admin${path !== '' ? `/${path}` : ''} `
  }

  private auth$(path: string = ''): string {
    return `/auth${path !== '' ? `/${path}` : ''} `;
  }

  private country$(sid: string = ''): string {
    return `/country${sid !== '' ? `/${sid}` : ''} `;
  }

  private documents$(sid: string = ''): string {
    return `/documents${sid !== '' ? `/${sid}` : ''} `;
  }

  private bank$(sid: string = ''): string {
    return `/banks${sid !== '' ? `/${sid}` : ''} `;
  }

  private user$(sid: string = ''): string {
    return `/users${sid !== '' ? `/${sid}` : ''} `;
  }

  private offer$(sid: string = ''): string {
    return `/offers${sid !== '' ? `/${sid}` : ''} `;
  }

  private messages$(sid: string = ''): string {
    return `/messages${sid !== '' ? `/${sid}` : ''} `;
  }


}
