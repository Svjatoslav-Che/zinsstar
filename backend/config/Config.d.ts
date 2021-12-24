/* tslint:disable */
/* eslint-disable */
declare module "node-config-ts" {
  interface IConfig {
    application: Application
    db: Db
    mail: Mail
  }
  interface Mail {
    url: string
    host: string
    port: string
    user: string
    password: string
    from: string
    confirmation: string
    contact: Contact
  }
  interface Contact {
    phone: Phone
    email: Email
    company: Company
  }
  interface Company {
    city: string
    country: string
    zip: string
    street: string
  }
  interface Email {
    service: string
    href: string
  }
  interface Phone {
    number: string
    href: string
    template: string
  }
  interface Db {
    mysql: Mysql
  }
  interface Mysql {
    synchronize: boolean
    logging: boolean
    database: string
    port: string
    host: string
    username: string
    password: string
  }
  interface Application {
    env: string
    port: number
    jwt: Jwt
    domain: string
    apiUrl: string
  }
  interface Jwt {
    secret: string
    verification: string
    emailExpiration: string
    expiresIn: string
    adminExpiresIn: string
  }
  export const config: Config
  export type Config = IConfig
}
