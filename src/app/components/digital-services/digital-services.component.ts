import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-digital-services',
  templateUrl: 'digital-services.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class DigitalServicesComponent {
  digitalServices = [
    {
      icon: 'digital-twin',
      faIcon: 'fa-solid fa-cube',
      index: 0,
    },
    {
      icon: 'data-analytics',
      faIcon: 'fa-solid fa-chart-line',
      index: 1,
    },
    {
      icon: 'predictive-maintenance',
      faIcon: 'fa-solid fa-screwdriver-wrench',
      index: 2,
    },
    {
      icon: 'remote-monitoring',
      faIcon: 'fa-solid fa-eye',
      index: 3,
    },
    {
      icon: 'process-optimization',
      faIcon: 'fa-solid fa-gears',
      index: 4,
    },
    {
      icon: 'quality-control',
      faIcon: 'fa-solid fa-shield-halved',
      index: 5,
    },
    {
      icon: 'energy-management',
      faIcon: 'fa-solid fa-bolt',
      index: 6,
    },
  ];

  webPackages = [
    {
      index: 0,
      features: [{ index: 0 }, { index: 1 }, { index: 2 }, { index: 3 }],
    },
    {
      index: 1,
      features: [{ index: 0 }, { index: 1 }, { index: 2 }, { index: 3 }],
    },
    {
      index: 2,
      features: [{ index: 0 }, { index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }],
    },
  ];
}
