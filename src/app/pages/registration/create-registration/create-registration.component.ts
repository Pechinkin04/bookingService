import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../../core/services/registration.service';
import { RegistrationStatus } from '../../../core/models/registration.model'; // Импортируем перечисление

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.css']
})
export class CreateRegistrationComponent {
  eventId: number | undefined;
  clientName: string | undefined;
  email: string | undefined;
  ticketCount: number | undefined;
  status: RegistrationStatus | undefined; // Используем перечисление вместо строки
  registrationStatusOptions: string[]; // Массив доступных статусов

  constructor(private registrationService: RegistrationService, private router: Router) {
    // Создаем массив доступных статусов из перечисления RegistrationStatus
    this.registrationStatusOptions = Object.values(RegistrationStatus);
  }

  onSubmit(): void {
    if (this.eventId && this.clientName && this.email && this.ticketCount && this.status) {
      this.registrationService.createRegistration({
        id: 0, // Мы автоматически присвоим ID при сохранении
        eventId: this.eventId,
        clientName: this.clientName,
        email: this.email,
        ticketCount: this.ticketCount,
        status: this.status
      });
      this.router.navigate(['/registration-list']);
    }
  }
}
