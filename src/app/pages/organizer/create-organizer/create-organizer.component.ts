import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Organizer } from '../../../core/models/organizer.model';
import { OrganizerService } from '../../../core/services/organizer.service';

@Component({
  selector: 'app-create-organizer',
  templateUrl: './create-organizer.component.html',
  styleUrls: ['./create-organizer.component.css']
})
export class CreateOrganizerComponent {
  organizer: Organizer = {
    id: 0,
    name: '',
    contact: '',
    events: [] 
  };

  eventsString = '';

  constructor(private organizerService: OrganizerService) {}

  onSubmit(organizerForm: NgForm): void {
    if (organizerForm.invalid) {
      return;
    }
    
    // Преобразуем строку индексов мероприятий в массив чисел
    if (this.eventsString) {
      this.organizer.events = this.eventsString.split(',').map(index => +index.trim());
    }
    
    this.organizerService.createOrganizer(this.organizer);
    organizerForm.resetForm();
    this.organizer = { id: 0, name: '', contact: '', events: [] };
  }
}
