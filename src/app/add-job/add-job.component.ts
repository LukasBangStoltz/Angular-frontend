import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../model/job';
import { JobService } from '../service/job.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']  
})

export class AddJobComponent implements OnInit {
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
      employeId: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['id'];
    this.initializeForm();
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
  
    createJob(): void {
      console.log('Form submission triggered');
      if (this.jobForm.valid) {
        console.log("Job ID HERE: " + this.jobId)
        this.jobService.createJob(this.jobForm.value).subscribe({
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

