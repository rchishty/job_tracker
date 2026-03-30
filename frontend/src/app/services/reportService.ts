import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ReportResponse } from '../models/reportResponse';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ReportService {
    private baseUrl = `${environment.apiUrl}/api/report`;

    constructor(private http: HttpClient) {}

    getReport(startDate?: string, endDate?: string, companyId?: number, statusId?: number) {
        let params = new HttpParams();
        if (startDate) params = params.set('startDate', startDate);
        if (endDate) params = params.set('endDate', endDate);
        if (companyId) params = params.set('companyId', companyId.toString());
        if (statusId) params = params.set('statusId', statusId.toString());
        return this.http.get<ReportResponse>(this.baseUrl, { params });
    }
}
