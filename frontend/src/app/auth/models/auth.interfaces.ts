import {Observable} from 'rxjs';


export enum UserScope {
  create = 'user:create',
  read = 'user:read',
  write = 'user:write',
}

export interface OtpRequest {
  phone_number: string;
}

export interface OtpResponse {
  sid: string;
}

export interface TokenResponse {
  access_token: string;
  refresh_token?: string;
}

export enum TokenType {
  access = 'access',
  refresh = 'refresh',
}

enum UserRole {
  ADMIN = 0,
  CUSTOMER = 1
}

interface User {
  id: string;
  email: string;
  role: UserRole;
}

interface BaseToken {
  User: User;
}

export interface RawToken extends BaseToken {
  iat: number;
  exp: number;
}

export interface AccessToken extends BaseToken {
  iat: Date;
  exp: Date;
}

export interface RefreshToken extends BaseToken {
  iat: Date;
}

type AuthToken<T> = {
  token: string;
  data: T;
};

export interface AuthTokens {
  access: AuthToken<AccessToken>;
  refresh: AuthToken<RefreshToken>;
}

export interface PersistedAuthTokens {
  access: string;
  refresh: string;
  type: string;
}

export interface Countdown {
  readonly ended: boolean;
  readonly value: string;
  resume: () => Observable<number>;
  stop: () => void;
  start: () => void;
  onEnd: () => Observable<void>;
}
