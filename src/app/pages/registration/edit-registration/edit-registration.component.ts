import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Registration } from '../../../core/models/registration.model';
import { RegistrationService } from '../../../core/services/registration.service';
import { RegistrationStatus } from '../../../core/models/registration.model'; // Импортируем перечисление

@Component({
  selector: 'app-edit-registration',
  templateUrl: './edit-registration.component.html',
  styleUrls: ['./edit-registration.component.css']
})
export class EditRegistrationComponent implements OnInit {
  registration: Registration = {
    id: 0,
    eventId: 0,
    clientName: '',
    email: '',
    ticketCount: 0,
    status: RegistrationStatus.Registered
  };
  registrationStatusOptions: string[]; // Массив доступных статусов

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private registrationService: RegistrationService
  ) {
    // Создаем массив доступных статусов из перечисления RegistrationStatus
    this.registrationStatusOptions = Object.values(RegistrationStatus);
  }

  ngOnInit(): void {
    const registrationId = +this.route.snapshot.paramMap.get('id')!;
    this.registration = this.registrationService.getRegistration(registrationId) || {
      id: registrationId,
      eventId: 0,
      clientName: '',
      email: '',
      ticketCount: 0,
      status: RegistrationStatus.Registered
    };
  }

  onSubmit(): void {
    this.registrationService.updateRegistration(this.registration);
    this.location.back();
  }
}
