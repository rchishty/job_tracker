import { Application } from './application';

export interface ReportResponse {
    apps: Application[];
    total: number;
    acceptanceRate: number;
    avgResponseTimeDays: number;
    statusBreakdown: { [key: string]: number };
}
