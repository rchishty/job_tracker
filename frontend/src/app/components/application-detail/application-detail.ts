import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Application } from '../../models/application';
import { Interview } from '../../models/interview';
import { ApplicationService } from '../../services/applicationService';
import { InterviewService } from '../../services/interviewService';

@Component({
  selector: 'app-application-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './application-detail.html',
  styleUrl: './application-detail.css'
})
export class ApplicationDetailComponent implements OnInit {
  application: Application | null = null;
  interviews: Interview[] = [];
  appId!: number;

  showForm = false;
  isEditing = false;
  editingId: number | null = null;

  formData = {
    interviewDate: '',
    interviewType: '',
    notes: ''
  };

  interviewTypes = ['phone', 'virtual', 'onsite'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService: ApplicationService,
    private interviewService: InterviewService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.appId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadApplication();
    this.loadInterviews();
  }

  loadApplication() {
    this.appService.getById(this.appId).subscribe(data => {
      this.application = data;
      this.cdr.detectChanges();
    });
  }

  loadInterviews() {
    this.interviewService.getByApplicationId(this.appId).subscribe(data => {
      this.interviews = data;
      this.cdr.detectChanges();
    });
  }

  openAddForm() {
    this.isEditing = false;
    this.editingId = null;
    this.formData = { interviewDate: '', interviewType: '', notes: '' };
    this.showForm = true;
  }

  openEditForm(interview: Interview) {
    this.isEditing = true;
    this.editingId = interview.id!;
    this.formData = {
      interviewDate: interview.interviewDate
        ? String(interview.interviewDate).slice(0, 16)
        : '',
      interviewType: interview.interviewType,
      notes: interview.notes
    };
    this.showForm = true;
  }

  cancelForm() {
    this.showForm = false;
  }

  save() {
    const payload: Interview = {
      id: this.editingId ?? 0,
      application: this.application!,
      interviewDate: this.formData.interviewDate as any,
      interviewType: this.formData.interviewType,
      notes: this.formData.notes,
      contact: null as any
    };

    if (this.isEditing && this.editingId !== null) {
      this.interviewService.update(this.editingId, payload).subscribe(() => {
        this.loadInterviews();
        this.showForm = false;
      });
    } else {
      this.interviewService.create(payload).subscribe(() => {
        this.loadInterviews();
        this.showForm = false;
      });
    }
  }

  delete(id: number) {
    if (confirm('Delete this interview?')) {
      this.interviewService.delete(id).subscribe(() => this.loadInterviews());
    }
  }

  back() {
    this.router.navigate(['/applications']);
  }
}
