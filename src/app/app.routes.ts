import { RouterModule, Routes } from '@angular/router';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { EditVolunteerComponent } from './edit-volunteer/edit-volunteer.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { EditEmployerComponent } from './edit-employer/edit-employer.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { NgModule } from '@angular/core';
import { AddVolunteerComponent } from './add-volunteer/add-volunteer.component';
import { JobListComponent } from './job-list /job-list.component';
import { AddJobComponent } from './add-job/add-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';

export const routes: Routes = [
    { path: "", redirectTo: "/volunteers", pathMatch: "full" },
    { path: "volunteers", component: VolunteerListComponent },
    { path: "edit-volunteer/:id", component: EditVolunteerComponent },
    { path: "add-volunteer", component: AddVolunteerComponent },
    { path: "employers", component: EmployerListComponent },
    { path: "jobs", component: JobListComponent },
    { path: "edit-job/:id", component: EditJobComponent },
    { path: "add-job", component: AddJobComponent },
    { path: "edit-employer/:id", component: EditEmployerComponent },
    { path: "add-employer", component: AddEmployerComponent },
    { path: "**", component: VolunteerListComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }