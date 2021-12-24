import { UserDocument } from "src/app/dashboard/models/user-doc.model";
import { UserOffer } from "src/app/dashboard/services/dashboard.service";


export class UserModelApi {
    id: string;
    email: string;
    first_name: string;
    availableBalance: number;
    totalBalance: number;
    last_name: string;
    isEmailConfirmed: boolean;
    verified: boolean;
    phone: string;
    dob: string;
    role: number;
    gender: string;
    street: string = "";
    house: string = "";
    zip: string = "";
    referenceCode: string = "";
    country: string = "";
    city: string = "";
    birth_city;
    docs: UserDocument;
    birth_country;
    nationality;
    nationality2;
    social_status;
    academic_position;
    us_citizen: boolean;
    iban: string;
    offers?: UserOffer[];
    acc_holder: string
    bic: string;
    created: Date;
    updated: Date;
}


export class UserModel {
    id: string;
    email: string;
    full_name: string;
    isEmailConfirmed: boolean;
    verified: boolean;
    phone: string;
    docs: UserDocument;
    dob: string;
    gender: string;
    address: UserAddress;
}

export class UserAddress {
    street: string = "";
    house: string = "";
    zip: string = "";
    country: string = "";
    city: string = "";
}


export interface Meta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}

export interface Links {
    first: string;
    previous: string;
    next: string;
    last: string;
}

export interface UserEntriesPageable {
    items: UserModelApi[];
    meta: Meta;
    links: Links;
}
export class Bank {
    name: string;
}
export class Offer {
    id: number;
    oid: string;
    currency: string;
    bank: Bank;
}

export class UserOfferModel {
    id: number;
    status: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    offer: Offer;
    bankDetails: string;
}
export class BankDetails {
    iban: string; bic: string; acc_holder: string;
}
