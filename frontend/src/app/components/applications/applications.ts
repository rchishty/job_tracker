import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Application } from '../../models/application';
import { Company } from '../../models/company';
import { Status } from '../../models/status';
import { ApplicationService } from '../../services/applicationService';
import { CompanyService } from '../../services/companyService';
import { StatusService } from '../../services/statusService';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './applications.html',
  styleUrl: './applications.css'
})
export class ApplicationsComponent implements OnInit {
  applications: Application[] = [];
  companies: Company[] = [];
  statuses: Status[] = [];

  showForm = false;
  isEditing = false;
  editingId: number | null = null;

  formData = {
    positionTitle: '',
    dateApplied: '',
    salary: null as number | null,
    notes: '',
    statusId: null as number | null,
    companyId: null as number | null
  };

  constructor(
    private appService: ApplicationService,
    private companyService: CompanyService,
    private statusService: StatusService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadApplications();
    this.loadCompanies();
    this.loadStatuses();
  }

  loadApplications() {
    this.appService.getAll().subscribe(data => { this.applications = data; this.cdr.detectChanges(); });
  }

  loadCompanies() {
    this.companyService.getAll().subscribe(data => { this.companies = data; this.cdr.detectChanges(); });
  }

  loadStatuses() {
    this.statusService.getAll().subscribe(data => { this.statuses = data; this.cdr.detectChanges(); });
  }

  openCreateForm() {
    this.isEditing = false;
    this.editingId = null;
    this.formData = { positionTitle: '', dateApplied: '', salary: null, notes: '', statusId: null, companyId: null };
    this.showForm = true;
  }

  openEditForm(app: Application) {
    this.isEditing = true;
    this.editingId = app.id!;
    this.formData = {
      positionTitle: app.positionTitle,
      // Convert date to YYYY-MM-DD string for the date input
      dateApplied: app.dateApplied ? new Date(app.dateApplied).toISOString().split('T')[0] : '',
      salary: app.salary,
      notes: app.notes,
      statusId: app.status?.id ?? null,
      companyId: app.company?.id ?? null
    };
    this.showForm = true;
  }

  cancelForm() {
    this.showForm = false;
  }

  // Build the full Application object from the flat form data before sending to API
  buildPayload(): Application {
    return {
      id: this.editingId ?? 0,
      positionTitle: this.formData.positionTitle,
      dateApplied: this.formData.dateApplied ? new Date(this.formData.dateApplied) : new Date(),
      salary: this.formData.salary ?? 0,
      notes: this.formData.notes,
      status: this.statuses.find(s => s.id === Number(this.formData.statusId)) ?? { id: 0, name: '' },
      company: this.companies.find(c => c.id === Number(this.formData.companyId)) ?? { id: 0, name: '', location: '', industry: '' }
    };
  }

  save() {
    const payload = this.buildPayload();
    if (this.isEditing && this.editingId !== null) {
      this.appService.update(this.editingId, payload).subscribe(() => {
        this.loadApplications();
        this.showForm = false;
      });
    } else {
      this.appService.create(payload).subscribe(() => {
        this.loadApplications();
        this.showForm = false;
      });
    }
  }

  delete(id: number) {
    if (confirm('Delete this application?')) {
      this.appService.delete(id).subscribe(() => this.loadApplications());
    }
  }
}