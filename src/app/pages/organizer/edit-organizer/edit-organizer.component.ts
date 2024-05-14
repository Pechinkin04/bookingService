import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Organizer } from '../../../core/models/organizer.model';
import { OrganizerService } from '../../../core/services/organizer.service';

@Component({
  selector: 'app-edit-organizer',
  templateUrl: './edit-organizer.component.html',
  styleUrls: ['./edit-organizer.component.css']
})
export class EditOrganizerComponent implements OnInit {
  organizer: Organizer = {
    id: 0,
    name: '',
    contact: '',
    events: []
  };

  eventsString = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private organizerService: OrganizerService
  ) {}

  ngOnInit(): void {
    const organizerId = +this.route.snapshot.paramMap.get('id')!;
    this.organizer = this.organizerService.getOrganizers().find(org => org.id === organizerId)!;
    this.eventsString = this.organizer.events.join(', ')
  }

  onSubmit(): void {
    if (this.eventsString) {
      this.organizer.events = this.eventsString.split(',').map(index => +index.trim());
    }
    
    this.organizerService.updateRegistration(this.organizer);
    this.location.back();
  }
}
