import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Volunteer } from '../model/volunteer'; 

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
private baseUrl: string = "https://localhost:7013"; 

  constructor(private http: HttpClient) { }

  getVolunteers(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(`${this.baseUrl}/Volunteer`);
  }

  // Get a single volunteer by ID
  getVolunteer(id: number): Observable<Volunteer> {
    return this.http.get<Volunteer>(`${this.baseUrl}/Volunteer/${id}`);
  }
    
  createVolunteer(volunteer: Volunteer): Observable<any> {
      return this.http.post(`${this.baseUrl}/Volunteer`, volunteer);
      }

  // Delete a volunteer by ID
  deleteVolunteer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Volunteer/${id}`);
  }

  // Update a volunteer
  updateVolunteer(volunteer: Volunteer): Observable<any> {
    return this.http.put(`${this.baseUrl}/Volunteer/${volunteer.id}`, volunteer);
  }
}
