import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../../../core/models/event.model';
import { EventService } from '../../../core/services/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  event: Event = {
    id: 0,
    title: '',
    date: new Date(),
    time: '',
    location: '',
    description: '',
    organizerId: 0
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    const eventId = +this.route.snapshot.paramMap.get('id')!;
    const events = this.eventService.getEvents();
    this.event = events.find(event => event.id === eventId)!;
  }

  onSubmit(): void {
    this.eventService.updateEvent(this.event);
    this.location.back(); // Вернуться на предыдущую страницу
  }
}
