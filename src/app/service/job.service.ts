import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../model/job'; 

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl: string = "https://localhost:7013";

  constructor(private http: HttpClient) { }

  authHeader: string = "Basic am9obi5kb2U6VmVyeVNlY3JldCE=";

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.baseUrl}/Job`, {
      headers: {
        "Authorization": this.authHeader
      }
      });
  }

  // Get a single job by ID
  getJob(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.baseUrl}/Job/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
      });
  }
    
  createJob(job: Job): Observable<any> {
      return this.http.post(`${this.baseUrl}/Job`, job, {
        headers: {
          "Authorization": this.authHeader
        }
        });
      }

  // Delete an job by ID
  deleteJob(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Job/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
      });
  }

  // Update an job
  updateJob(id: number, job: Job): Observable<any> {
    job.id = id;
    return this.http.put(`${this.baseUrl}/Job`, job, {
      headers: {
        "Authorization": this.authHeader
      }
      });
  }
}
