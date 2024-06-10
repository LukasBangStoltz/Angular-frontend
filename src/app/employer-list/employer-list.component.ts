import { Component, OnInit } from '@angular/core';
import { Employer } from '../model/employer';
import { EmployerComponent } from '../employer/employer.component';
import { EmployerService } from '../service/employer.service';

@Component({
  selector: 'app-employer-list',
  standalone: true,
  templateUrl: './employer-list.component.html',
  styleUrl: './employer-list.component.css',
  imports: [EmployerComponent]
})

export class EmployerListComponent implements OnInit {
  constructor(private employerService: EmployerService) {}
  employers: Employer[] = [];

  ngOnInit(): void {
    this.employerService.getEmployers().subscribe((employers) => {
        this.employers = employers;
    });
  }}