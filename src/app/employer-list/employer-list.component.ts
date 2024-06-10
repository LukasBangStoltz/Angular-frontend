import { Component, OnInit } from '@angular/core';
import { Employer } from '../model/employer';
import { EmployerComponent } from '../employer/employer.component';
import { EmployerService } from '../service/employer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-list',
  standalone: true,
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css'],
  imports: [EmployerComponent]
})

export class EmployerListComponent implements OnInit {
  employers: Employer[] = [];
  newEmployer: Employer = {
    id: 0,
    firstName: '',
    lastName: '',
    organisation: '',
    email: ''
  };

  constructor(private employerService: EmployerService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployers();
  }

  loadEmployers(): void {
    this.employerService.getEmployers().subscribe((employers) => {
      this.employers = employers;
      console.log(employers);
    });
  }
  createEmployer() {
    this.router.navigate(["add-employer"])
  }
  // createEmployer(): void {
  //   this.employerService.createEmployer(this.newEmployer).subscribe((employer) => {
  //     this.employers.push(employer);
  //     this.newEmployer = {  id: 0,
  //       firstName: '',
  //       lastName: '',
  //       organisation: '',
  //       email: '' };
  //   });
  }

