import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { EmployerComponent } from "./employer/employer.component";
import { EmployerListComponent } from './employer-list/employer-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HttpClientModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSlideToggle, RouterModule, RouterOutlet, VolunteerComponent, VolunteerListComponent, EmployerComponent, EmployerListComponent]
})
export class AppComponent {
  title = 'AngularExam';
    isEmployer: boolean = false;
  
    toggleRole() {
      this.isEmployer = !this.isEmployer;
    }
}
