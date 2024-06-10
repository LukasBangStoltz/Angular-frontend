import { Component, Input, OnInit } from '@angular/core';
import { Volunteer } from '../model/volunteer';
import { VolunteerService } from '../service/volunteer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent implements OnInit {
  volunteers: Volunteer[] = [];
  constructor(private volunteerService: VolunteerService, private router: Router) {}
  ngOnInit() {
    this.volunteerService.getVolunteers().subscribe({
      next: (volunteers) => this.volunteers = volunteers,
      error: (err) => console.error('Failed to get volunteers', err)
    });
  }
  @Input() volunteer!: Volunteer;

  deleteVolunteer(): void {
    this.volunteerService.deleteVolunteer(this.volunteer.id).subscribe();
    }

    editVolunteer(id: number) {
      this.router.navigate(["edit-volunteer", id]);
    }

}








