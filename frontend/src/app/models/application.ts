import { Company } from "./company";
import { Status } from "./status";

export interface Application {
    id: number;
    positionTitle: string;
    dateApplied: Date;
    salary: number;
    notes: string;
    status?: Status;
    company?: Company;
}
