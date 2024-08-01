import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../model/job';
import { JobService } from '../service/job.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-job',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']  
})

export class EditJobComponent implements OnInit {
  jobId!: number;
  jobForm: FormGroup;

  constructor(
    private jobService: JobService,
    private fb: FormBuilder, // Added FormBuilder to constructor
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.jobForm = new FormGroup({
      title: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      organisation: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      employerId: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['id'];
    this.initializeForm();
    this.loadJobData();
  }

  private initializeForm(): void {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      organisation: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      employerId: ['', Validators.required],

    });
  }
    private loadJobData(): void {
      this.jobService.getJob(this.jobId).subscribe({
        next: (job) => {
          this.jobForm.patchValue(job);
          console.log(job)
        },
        error: (error) => {
          console.error('Error loading job data', error);
          // Optionally handle user feedback here
        }
      });
    }
    updateJob(): void {
      console.log('Form submission triggered');
      if (this.jobForm.valid) {
        console.log("Job ID HERE: " + this.jobId)
        this.jobService.updateJob(this.jobId, this.jobForm.value).subscribe({
          next: () => {
            this.router.navigate(['/jobs']); // Navigate to the list of jobs
          },
          error: (error) => {
            console.error('Error updating job', error);
            // Optionally handle user feedback here
          }
        });
    }
  }
}

