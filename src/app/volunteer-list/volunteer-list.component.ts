import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../model/volunteer';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { VolunteerService } from '../service/volunteer.service';

@Component({
  selector: 'app-volunteer-list',
  standalone: true,
  templateUrl: './volunteer-list.component.html',
  styleUrl: './volunteer-list.component.css',
  imports: [VolunteerComponent]
})

export class VolunteerListComponent implements OnInit {
  constructor(private volunteerService: VolunteerService) {}
  volunteers: Volunteer[] = [];

  ngOnInit(): void {
    this.volunteerService.getVolunteers().subscribe({
      next: (volunteers) => {
        console.log("Volunteers loaded:", volunteers);
        this.volunteers = volunteers;
      },
      error: (err) => {
        console.error('Failed to get volunteers', err);
      }
    });
  }}