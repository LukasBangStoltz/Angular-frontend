import { Component, Input, OnInit } from '@angular/core';
import { Employer } from '../model/employer';
import { EmployerService } from '../service/employer.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-employer',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.css']  
})

export class AddEmployerComponent implements OnInit {
  employerId!: number;
  employerForm: FormGroup;

  constructor(
    private employerService: EmployerService,
    private fb: FormBuilder, // Added FormBuilder to constructor
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.employerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      organisation: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
    this.employerId = this.route.snapshot.params['id'];
    this.initializeForm();
  }

  private initializeForm(): void {
    this.employerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      organisation: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
    createEmployer(): void {
      console.log('Form submission triggered');
      if (this.employerForm.valid) {
        console.log("EMPLOYEE ID HERE: " + this.employerId)
        this.employerService.createEmployer(this.employerForm.value).subscribe({
          next: () => {
            this.router.navigate(['/employers']); // Navigate to the list of employers
          },
          error: (error) => {
            console.error('Error updating employer', error);
            // Optionally handle user feedback here
          }
        });
    }
  }
}

