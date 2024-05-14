import { Component, OnInit } from '@angular/core';
import { EventService } from './core/services/event.service';
import { RegistrationService } from './core/services/registration.service';
import { OrganizerService } from './core/services/organizer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'booking-service';

  constructor(private eventService: EventService, private organizerService: OrganizerService, private registartionService: RegistrationService) {}

  ngOnInit(): void {
    // Загрузка данных при инициализации приложения
    this.eventService.loadEvents();
    this.organizerService.loadOrganizers();
    this.registartionService.loadRegistration();
  }
}
