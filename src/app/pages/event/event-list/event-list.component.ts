import { Component } from '@angular/core';
import { Event } from '../../../core/models/event.model';
import { EventService } from '../../../core/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  events: Event[] = [];

  constructor(private eventService: EventService) {
    this.loadEvents();
  }

  loadEvents(): void {
    this.events = this.eventService.getEvents();
  }

  deleteEvent(eventId: number): void {
    const eventTitle = this.events.find(event => event.id === eventId)?.title;
    const isConfirmed = confirm(`Вы уверены, что хотите удалить мероприятие "${eventTitle}"?`);
    
    if (isConfirmed) {
      this.eventService.deleteEvent(eventId);
      this.saveEventsToFile();
    }
  }

  saveEventsToFile(): void {
    this.eventService.saveEvents();
    this.loadEvents(); // Обновляем список событий после сохранения данных в файл
  }
}
