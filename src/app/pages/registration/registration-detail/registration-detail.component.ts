import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Registration } from '../../../core/models/registration.model';
import { RegistrationService } from '../../../core/services/registration.service';

@Component({
  selector: 'app-registration-detail',
  templateUrl: './registration-detail.component.html',
  styleUrls: ['./registration-detail.component.css']
})
export class RegistrationDetailComponent implements OnInit {
  registration: Registration | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private registrationService: RegistrationService
  ) {}

  ngOnInit(): void {
    this.getRegistration();
  }

  getRegistration(): void {
    const registrationId = +this.route.snapshot.paramMap.get('id')!;
    this.registration = this.registrationService.getRegistration(registrationId);
  }

  goBack(): void {
    this.location.back();
  }

  editRegistration(): void {
    const registrationId = this.registration?.id;
    if (registrationId) {
      this.router.navigate(['/edit-registration', registrationId]);
    }
  }
}
