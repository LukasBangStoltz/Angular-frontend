import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Volunteer } from '../model/volunteer'; 

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  private baseUrl: string = "https://localhost:7013";

  constructor(private http: HttpClient) { }

  authHeader: string = "Basic am9obi5kb2U6VmVyeVNlY3JldCE=";

  getVolunteers(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(`${this.baseUrl}/Volunteer`, {
        headers: {
          "Authorization": this.authHeader
        }
      });
   }

  // Get a single volunteer by ID
  getVolunteer(id: number): Observable<Volunteer> {
    return this.http.get<Volunteer>(`${this.baseUrl}/Volunteer/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }
    
  createVolunteer(volunteer: Volunteer): Observable<any> {
    return this.http.post(`${this.baseUrl}/Volunteer`, volunteer, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  // Delete an volunteer by ID
  deleteVolunteer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Volunteer/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  // Update an volunteer
  updateVolunteer(id: number, volunteer: Volunteer): Observable<any> {
    volunteer.id = id;
    return this.http.put(`${this.baseUrl}/Volunteer`, volunteer, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }
}
