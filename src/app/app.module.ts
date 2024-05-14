import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EventListComponent } from './pages/event/event-list/event-list.component';
import { CreateEventComponent } from './pages/event/create-event/create-event.component';
import { EditEventComponent } from './pages/event/edit-event/edit-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateOrganizerComponent } from './pages/organizer/create-organizer/create-organizer.component';
import { OrganizerListComponent } from './pages/organizer/organizer-list/organizer-list.component';
import { EditOrganizerComponent } from './pages/organizer/edit-organizer/edit-organizer.component';
import { EditRegistrationComponent } from './pages/registration/edit-registration/edit-registration.component';
import { RegistrationListComponent } from './pages/registration/registration-list/registration-list.component';
import { RegistrationDetailComponent } from './pages/registration/registration-detail/registration-detail.component';
import { DeleteRegistrationComponent } from './pages/registration/delete-registration/delete-registration.component';
import { CreateRegistrationComponent } from './pages/registration/create-registration/create-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    CreateEventComponent,
    EditEventComponent,
    CreateOrganizerComponent,
    OrganizerListComponent,
    EditOrganizerComponent,
    EditRegistrationComponent,
    RegistrationListComponent,
    RegistrationDetailComponent,
    DeleteRegistrationComponent,
    CreateRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
