import { Component, Input, OnInit } from '@angular/core';
import { Volunteer } from '../model/volunteer';
import { VolunteerService } from '../service/volunteer.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-volunteer',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-volunteer.component.html',
  styleUrls: ['./edit-volunteer.component.css']  
})

export class EditVolunteerComponent implements OnInit {
  volunteerId!: number;
  volunteerForm: FormGroup;

  constructor(
    private volunteerService: VolunteerService,
    private fb: FormBuilder, // Added FormBuilder to constructor
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.volunteerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      fieldOfInterest: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.volunteerId = this.route.snapshot.params['id'];
    this.initializeForm();
    this.loadVolunteerData();
  }

  private initializeForm(): void {
    this.volunteerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fieldOfInterest: ['', [Validators.required]]
    });
  }
    private loadVolunteerData(): void {
      this.volunteerService.getVolunteer(this.volunteerId).subscribe({
        next: (volunteer) => {
          this.volunteerForm.patchValue(volunteer);
          console.log(volunteer)
        },
        error: (error) => {
          console.error('Error loading volunteer data', error);
          // Optionally handle user feedback here
        }
      });
    }
    updateVolunteer(): void {
      console.log('Form submission triggered');
      if (this.volunteerForm.valid) {
        console.log("VOLUNTEER ID HERE: " + this.volunteerId)
        this.volunteerService.updateVolunteer(this.volunteerId, this.volunteerForm.value).subscribe({
          next: () => {
            this.router.navigate(['/volunteers']); // Navigate to the list of volunteers
          },
          error: (error) => {
            console.error('Error updating volunteer', error);
            // Optionally handle user feedback here
          }
        });
    }
  }
}