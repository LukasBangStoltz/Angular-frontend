import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employer } from '../model/employer'; 

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
private baseUrl: string = "https://localhost:7013"; 

  constructor(private http: HttpClient) { }

  getEmployers(): Observable<Employer[]> {
    return this.http.get<Employer[]>(`${this.baseUrl}/Employer`);
  }

  // Get a single employer by ID
  getEmployer(id: number): Observable<Employer> {
    return this.http.get<Employer>(`${this.baseUrl}/Employer/${id}`);
  }
    
  createEmployer(employer: Employer): Observable<any> {
      return this.http.post(`${this.baseUrl}/Employer`, employer);
      }

  // Delete an employer by ID
  deleteEmployer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Employer/${id}`);
  }

  // Update an employer
  updateEmployer(id: number, employer: Employer): Observable<any> {
    return this.http.put(`${this.baseUrl}/Employer`, employer);
  }
}
