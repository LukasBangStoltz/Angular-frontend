import { Component, Input, OnInit } from '@angular/core';
import { Employer } from '../model/employer';
import { EmployerService } from '../service/employer.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-employer',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-employer.component.html',
  styleUrls: ['./edit-employer.component.css']  
})

export class EditEmployerComponent implements OnInit {
  employerId!: number;
  employerForm: FormGroup;

  constructor(
    private employerService: EmployerService,
    private fb: FormBuilder, // Added FormBuilder to constructor
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.employerForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      organisation: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
    this.employerId = this.route.snapshot.params['id'];
    this.initializeForm();
    this.loadEmployerData();
  }

  private initializeForm(): void {
    this.employerForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      organisation: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
    private loadEmployerData(): void {
      this.employerService.getEmployer(this.employerId).subscribe({
        next: (employer) => {
          this.employerForm.patchValue(employer);
        },
        error: (error) => {
          console.error('Error loading employer data', error);
          // Optionally handle user feedback here
        }
      });
    }
    updateEmployer(): void {
      console.log('Form submission triggered');
      if (this.employerForm.valid) {
        this.employerService.updateEmployer(this.employerId, this.employerForm.value).subscribe({
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

