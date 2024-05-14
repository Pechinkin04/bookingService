import { Component } from '@angular/core';
import { Event } from '../../../core/models/event.model';
import { EventService } from '../../../core/services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  newEvent: Event = {
    id: 0,
    title: '',
    date: new Date(), // Присваиваем текущую дату по умолчанию
    time: '',
    location: '',
    description: '',
    organizerId: 0
  };

  constructor(private eventService: EventService) { }

  onSubmit(): void {
    this.eventService.createEvent(this.newEvent);
    // Сбросить форму после отправки
    this.newEvent = {
      id: 0,
      title: '',
      date: new Date(),
      time: '',
      location: '',
      description: '',
      organizerId: 0
    };
  }
}
