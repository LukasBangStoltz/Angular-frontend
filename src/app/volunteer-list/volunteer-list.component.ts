import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../model/volunteer';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { VolunteerService } from '../service/volunteer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-list',
  standalone: true,
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.css'],
  imports: [VolunteerComponent]
})

export class VolunteerListComponent implements OnInit {
  volunteers: Volunteer[] = [];
  newVolunteer: Volunteer = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    fieldOfInterest: ''
  };

  constructor(private volunteerService: VolunteerService, private router: Router) {}

  ngOnInit(): void {
    this.loadVolunteers();
  }

  loadVolunteers(): void {
    this.volunteerService.getVolunteers().subscribe((volunteers) => {
      this.volunteers = volunteers;
      console.log(volunteers);
    });
  }
  createVolunteer() {
    this.router.navigate(["add-volunteer"])
  }
}