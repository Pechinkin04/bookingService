import { Component, OnInit } from '@angular/core';
import { Organizer } from '../../../core/models/organizer.model';
import { OrganizerService } from '../../../core/services/organizer.service';

@Component({
  selector: 'app-organizer-list',
  templateUrl: './organizer-list.component.html',
  styleUrls: ['./organizer-list.component.css']
})
export class OrganizerListComponent implements OnInit {
  organizers: Organizer[] = [];

  constructor(private organizerService: OrganizerService) {
    this.loadOrganizers();
  }

  loadOrganizers(): void {
    this.organizers = this.organizerService.getOrganizers();
  }
  ngOnInit(): void {
    
  }


  onDelete(organizerId: number): void {
    const organizerTitle = this.organizers.find(organizer => organizer.id === organizerId)?.name;
    const isConfirmed = confirm(`Вы уверены, что хотите удалить организатора "${organizerTitle}"?`);
    if (isConfirmed) {
      this.organizerService.deleteOrganizer(organizerId);
      this.saveOrganizationsToFile();
    }
  }

  saveOrganizationsToFile(): void {
    this.organizerService.saveOrganizer();
    this.loadOrganizers(); // Обновляем список событий после сохранения данных в файл
  }
  
}
