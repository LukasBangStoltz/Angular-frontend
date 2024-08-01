import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job';
import { JobComponent } from '../job/job.component';
import { JobService } from '../service/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  imports: [JobComponent]
})

export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  newJob: Job = {
    id: 0,
    title: '',
    type: '',
    organisation: '',
    email: ''
  };

  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
      console.log(jobs);
    });
  }
  createJob() {
    this.router.navigate(["add-job"])
  }}