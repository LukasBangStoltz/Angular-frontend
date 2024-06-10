import { RouterModule, Routes } from '@angular/router';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { EditVolunteerComponent } from './edit-volunteer/edit-volunteer.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { EditEmployerComponent } from './edit-employer/edit-employer.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: "", redirectTo: "/volunteers", pathMatch: "full" },
    { path: "volunteers", component: VolunteerListComponent },
    { path: "edit-volunteer/:id", component: EditVolunteerComponent },
    { path: "employers", component: EmployerListComponent },
    { path: "jobs", component: EditVolunteerComponent },
    { path: "edit-employer/:id", component: EditEmployerComponent },
    { path: "**", component: VolunteerListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }