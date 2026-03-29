import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportResponse } from '../../models/reportResponse';
import { Company } from '../../models/company';
import { Status } from '../../models/status';
import { ReportService } from '../../services/reportService';
import { CompanyService } from '../../services/companyService';
import { StatusService } from '../../services/statusService';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './report.html',
  styleUrl: './report.css'
})
export class ReportComponent implements OnInit {
  companies: Company[] = [];
  statuses: Status[] = [];
  report: ReportResponse | null = null;
  hasSearched = false;

  filters = {
    startDate: '',
    endDate: '',
    companyId: null as number | null,
    statusId: null as number | null
  };

  constructor(
    private reportService: ReportService,
    private companyService: CompanyService,
    private statusService: StatusService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.companyService.getAll().subscribe(data => { this.companies = data; this.cdr.detectChanges(); });
    this.statusService.getAll().subscribe(data => { this.statuses = data; this.cdr.detectChanges(); });
  }

  runReport() {
    this.reportService.getReport(
      this.filters.startDate || undefined,
      this.filters.endDate || undefined,
      this.filters.companyId ?? undefined,
      this.filters.statusId ?? undefined
    ).subscribe(data => {
      this.report = data;
      this.hasSearched = true;
      this.cdr.detectChanges();
    });
  }

  clearFilters() {
    this.filters = { startDate: '', endDate: '', companyId: null, statusId: null };
    this.report = null;
    this.hasSearched = false;
  }

  statusBreakdownEntries(): { name: string; count: number }[] {
    if (!this.report) return [];
    return Object.entries(this.report.statusBreakdown).map(([name, count]) => ({ name, count }));
  }
}
