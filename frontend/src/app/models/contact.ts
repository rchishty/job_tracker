import { Company } from "./company";

export interface Contact {
    id?: number;
    name: string;
    email: string;
    phone: string;
    title: string;
    company: Company;
}