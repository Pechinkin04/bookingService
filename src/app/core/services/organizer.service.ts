import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organizer } from '../models/organizer.model';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {
  private organizersUrl = 'assets/organizers.json';
  private organizers: Organizer[] = [];

  constructor(private http: HttpClient) {
    this.loadOrganizers();
  }

  loadOrganizers(): void {
    

      const storedData = localStorage.getItem('organizersBooking');

      if (storedData !== null) {
        this.organizers = JSON.parse(storedData)
      } else {
        this.http.get<Organizer[]>(this.organizersUrl)
      .subscribe(organizers => this.organizers = organizers);
      }
  }

  createOrganizer(organizer: Organizer): void {
    organizer.id = this.generateOrganizerId();
    console.log(organizer);
    this.organizers.push(organizer);
    this.saveOrganizer();
    console.log(this.organizers);
    this.loadOrganizers();
  }

  private generateOrganizerId(): number {
    return this.organizers.length + 1;
  }

  getOrganizers(): Organizer[] {
    return this.organizers;
  }

  deleteOrganizer(organizerId: number): void {
    this.organizers = this.organizers.filter(org => org.id !== organizerId);
    this.saveOrganizer();
  }

  updateRegistration(updatedOrganizer: Organizer): void {
    const index = this.organizers.findIndex(organizer => organizer.id === updatedOrganizer.id);
    if (index !== -1) {
      this.organizers[index] = updatedOrganizer;
      this.saveOrganizer();
    }
  }

  saveOrganizer(): void {
    this.http.put(this.organizersUrl, this.organizers).subscribe();
    localStorage.setItem('organizersBooking', JSON.stringify(this.organizers));
  }
}