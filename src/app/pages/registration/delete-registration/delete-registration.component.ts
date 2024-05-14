import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Registration } from '../../../core/models/registration.model';
import { RegistrationService } from '../../../core/services/registration.service';

@Component({
  selector: 'app-delete-registration',
  templateUrl: './delete-registration.component.html',
  styleUrls: ['./delete-registration.component.css']
})
export class DeleteRegistrationComponent implements OnInit {
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

  cancel(): void {
    this.location.back();
  }

  delete(): void {
    if (this.registration) {
      this.registrationService.deleteRegistration(this.registration.id);
      this.router.navigate(['/registration-list']);
    }
  }
}
