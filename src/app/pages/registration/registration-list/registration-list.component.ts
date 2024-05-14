import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../../../core/models/registration.model';
import { RegistrationService } from '../../../core/services/registration.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {
  registrations: Registration[] = [];
  filteredRegistrations: Registration[] = [];
  filterStatus: string = '';
  searchClientName: string = '';

  constructor(private router: Router, private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.getRegistrations();
  }

  getRegistrations(): void {
    this.registrations = this.registrationService.getRegistrations();
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredRegistrations = this.registrations.filter(registration => {
      return registration.status.toLowerCase().includes(this.filterStatus.toLowerCase()) &&
             registration.clientName.toLowerCase().includes(this.searchClientName.toLowerCase());
    });
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }
}
