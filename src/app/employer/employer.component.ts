import { Component, Input, OnInit } from '@angular/core';
import { Employer } from '../model/employer';
import { EmployerService } from '../service/employer.service';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-employer',
  standalone: true,
  imports: [],
  templateUrl: './employer.component.html',
  styleUrl: './employer.component.css'
})
export class EmployerComponent {
  @Input() employer!: Employer;

  constructor(private employerService: EmployerService, private router: Router) {}

  deleteEmployer(): void {
    this.employerService.deleteEmployer(this.employer.id).subscribe({
      next: () => {
        this.reloadCurrentRoute() 
      },
      error: (error) => {
        console.error('Error updating employer', error);
      }
    });
  }

  updateEmployer(id: number) {
    this.router.navigate(["edit-employer", id])
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}


