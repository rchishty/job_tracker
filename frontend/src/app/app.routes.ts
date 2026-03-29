import { Routes } from '@angular/router';
import { ApplicationsComponent } from './components/applications/applications';
import { ReportComponent } from './components/report/report';
import { ApplicationDetailComponent } from './components/application-detail/application-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'applications', pathMatch: 'full' },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'applications/:id', component: ApplicationDetailComponent },
  { path: 'report', component: ReportComponent }
];
