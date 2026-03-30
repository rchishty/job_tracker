import { Application } from './application';
import { Contact } from './contact';

export interface Interview {
    id?: number;
    application: Application;
    interviewDate: Date;
    interviewType: string;
    notes: string;
    contact: Contact;
}