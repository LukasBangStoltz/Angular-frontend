import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../model/job';
import { JobService } from '../service/job.service';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input() job!: Job;

  constructor(private jobService: JobService, private router: Router) {}

  deleteJob(): void {
    this.jobService.deleteJob(this.job.id).subscribe({
      next: () => {
        this.reloadCurrentRoute() 
      },
      error: (error) => {
        console.error('Error updating job', error);
      }
    });
  }

  updateJob(id: number) {
    this.router.navigate(["edit-job", id])
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}

