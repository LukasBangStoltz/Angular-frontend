import { Component, Input, OnInit } from '@angular/core';
import { Volunteer } from '../model/volunteer';
import { VolunteerService } from '../service/volunteer.service';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent {
  @Input() volunteer!: Volunteer;

  constructor(private volunteerService: VolunteerService, private router: Router) {}

  deleteVolunteer(): void {
    this.volunteerService.deleteVolunteer(this.volunteer.id).subscribe({
      next: () => {
        this.reloadCurrentRoute() 
      },
      error: (error) => {
        console.error('Error updating volunteer', error);
      }
    });
  }

  updateVolunteer(id: number) {
    this.router.navigate(["edit-volunteer", id])
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }


}
