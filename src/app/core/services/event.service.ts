import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = 'assets/events.json';
  private events: Event[] = [];

  constructor(private http: HttpClient) {
    this.loadEvents();
  }

  loadEvents(): void {

      const storedData = localStorage.getItem('eventsBooking');

      if (storedData !== null) {
        this.events = JSON.parse(storedData)
      } else {
        this.http.get<Event[]>(this.eventsUrl)
              .subscribe(events => this.events = events);
      }
  }

  getEvents(): Event[] {
    return this.events;
  }

  createEvent(event: Event): void {
    event.id = this.generateEventId();
    this.events.push(event);
    this.saveEvents();
  }

  updateEvent(event: Event): void {
    const index = this.events.findIndex(e => e.id === event.id);
    if (index !== -1) {
      this.events[index] = event;
      this.saveEvents();
    }
  }

  deleteEvent(eventId: number): void {
    this.events = this.events.filter(e => e.id !== eventId);
    this.saveEvents();
  }

  private generateEventId(): number {
    return this.events.length + 1;
  }

  saveEvents(): void {
    this.http.put(this.eventsUrl, this.events).subscribe();
    localStorage.setItem('eventsBooking', JSON.stringify(this.events));
  }
}
