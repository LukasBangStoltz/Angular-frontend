import { Component, Input, OnInit } from '@angular/core';
import { Volunteer } from '../model/volunteer';
import { VolunteerService } from '../service/volunteer.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  @Input() id!: number;
  volunteer!: Volunteer;

  // Proper form control initialization

  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]); // Added email validator

  // Corrected form group assignments
  volunteerFormGroup: FormGroup = new FormGroup({
    email: this.emailFormControl,
  });

  constructor(private volunteerService: VolunteerService, private router: Router) {}  // Added closing parenthesis and curly brackets

  ngOnInit() {
    this.volunteerService.getVolunteer(this.id).subscribe((volunteer) => {
      this.volunteer = volunteer;
      this.emailFormControl.setValue(this.volunteer.email);
    });
  }

  updateVolunteer() {
    if (!this.volunteerFormGroup.valid) {
      console.log('Data not valid');
      return;
    }
    this.volunteerService.updateVolunteer(this.volunteer).subscribe(() => {
      this.router.navigate(["volunteers"]);
    });
  }
}
