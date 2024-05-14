import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registrations: Registration[] = [];
  private registrationsUrl = 'assets/registrations.json'; // Путь к JSON файлу

  constructor(private http: HttpClient) {
    this.loadRegistration();
  }

  loadRegistration(): void {
    
    const storedData = localStorage.getItem('registrationsBooking');

      if (storedData !== null) {
        this.registrations = JSON.parse(storedData)
      } else {
        this.http.get<Registration[]>(this.registrationsUrl)
      .subscribe(registrations => this.registrations = registrations);
      }
  }

  createRegistration(registration: Registration): void {
    registration.id = this.generateRegistrationId();
    this.registrations.push(registration);
    this.saveRegistration();
  }

  private generateRegistrationId(): number {
    return this.registrations.length + 1;
  }

  getRegistrations(): Registration[] {
    return this.registrations;
  }

  getRegistration(registrationId: number): Registration | undefined {
    return this.registrations.find(registration => registration.id === registrationId);
  }

  updateRegistration(updatedRegistration: Registration): void {
    const index = this.registrations.findIndex(registration => registration.id === updatedRegistration.id);
    if (index !== -1) {
      this.registrations[index] = updatedRegistration;
      this.saveRegistration();
    }
  }

  deleteRegistration(registrationId: number): void {
    this.registrations = this.registrations.filter(registration => registration.id !== registrationId);
    this.saveRegistration();
  }

  saveRegistration(): void {
    localStorage.setItem('registrationsBooking', JSON.stringify(this.registrations));
  }
}
