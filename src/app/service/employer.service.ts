import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employer } from '../model/employer'; 

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  private baseUrl: string = "https://localhost:7013";

  constructor(private http: HttpClient) { }

  authHeader: string = "Basic am9obi5kb2U6VmVyeVNlY3JldCE=";

  getEmployers(): Observable<Employer[]> {
    return this.http.get<Employer[]>(`${this.baseUrl}/Employer`, {
      headers: {
        "Authorization": this.authHeader
      }
      });
  }

  // Get a single employer by ID
  getEmployer(id: number): Observable<Employer> {
    return this.http.get<Employer>(`${this.baseUrl}/Employer/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
      });
  }
    
  createEmployer(employer: Employer): Observable<any> {
      return this.http.post(`${this.baseUrl}/Employer`, employer, {
        headers: {
          "Authorization": this.authHeader
        }
        });
      }

  // Delete an employer by ID
  deleteEmployer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Employer/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
      });
  }

  // Update an employer
  updateEmployer(id: number, employer: Employer): Observable<any> {
    employer.id = id;
    return this.http.put(`${this.baseUrl}/Employer`, employer, {
      headers: {
        "Authorization": this.authHeader
      }
      });
  }
}
