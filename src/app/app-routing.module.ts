import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './pages/event/create-event/create-event.component';
import { EventListComponent } from './pages/event/event-list/event-list.component';
import { EditEventComponent } from './pages/event/edit-event/edit-event.component'; // Импортируем компонент
import { RegistrationListComponent } from './pages/registration/registration-list/registration-list.component';
import { RegistrationDetailComponent } from './pages/registration/registration-detail/registration-detail.component';
import { EditRegistrationComponent } from './pages/registration/edit-registration/edit-registration.component';
import { DeleteRegistrationComponent } from './pages/registration/delete-registration/delete-registration.component';
import { CreateOrganizerComponent } from './pages/organizer/create-organizer/create-organizer.component';
import { EditOrganizerComponent } from './pages/organizer/edit-organizer/edit-organizer.component';
import { OrganizerListComponent } from './pages/organizer/organizer-list/organizer-list.component';
import { CreateRegistrationComponent } from './pages/registration/create-registration/create-registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  
  { path: 'events', component: EventListComponent },
  { path: 'create', component: CreateEventComponent },
  { path: 'edit/:id', component: EditEventComponent }, // Добавляем маршрут для редактирования мероприятия

  { path: 'create-organizer', component: CreateOrganizerComponent },
  { path: 'edit-organizer/:id', component: EditOrganizerComponent },
  { path: 'organizer-list', component: OrganizerListComponent },

  { path: 'registration-list', component: RegistrationListComponent },
  { path: 'registration-detail/:id', component: RegistrationDetailComponent },
  { path: 'edit-registration/:id', component: EditRegistrationComponent },
  { path: 'delete-registration/:id', component: DeleteRegistrationComponent },
  { path: 'create-registration', component: CreateRegistrationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
