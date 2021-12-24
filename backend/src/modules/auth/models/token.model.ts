export class ITokenPayload {
  access: string;
  refresh: string;
  type: string;
}
export interface VerificationTokenPayload {
  email: string;
}
