import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services = [
    {
      icon: 'assembly',
      faIcon: 'fa-solid fa-screwdriver-wrench',
      index: 0,
    },
    {
      icon: 'maintenance',
      faIcon: 'fa-solid fa-tools',
      index: 1,
    },
    {
      icon: 'production',
      faIcon: 'fa-solid fa-industry',
      index: 2,
    },
    {
      icon: 'quality',
      faIcon: 'fa-solid fa-shield-halved',
      index: 3,
    },
    {
      icon: 'process',
      faIcon: 'fa-solid fa-gears',
      index: 4,
    },
    {
      icon: 'supervision',
      faIcon: 'fa-solid fa-user-tie',
      index: 5,
    },
  ];

  benefits = [
    {
      index: 0,
    },
    {
      index: 1,
    },
    {
      index: 2,
    },
    {
      index: 3,
    },
    {
      index: 4,
    },
  ];
}
