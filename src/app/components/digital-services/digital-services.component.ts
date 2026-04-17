import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-digital-services',
  templateUrl: 'digital-services.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class DigitalServicesComponent {
  digitalServices = [
    {
      icon: 'digital-twin',
      index: 0,
    },
    {
      icon: 'data-analytics',
      index: 1,
    },
    {
      icon: 'predictive-maintenance',
      index: 2,
    },
    {
      icon: 'remote-monitoring',
      index: 3,
    },
    {
      icon: 'process-optimization',
      index: 4,
    },
    {
      icon: 'quality-control',
      index: 5,
    },
    {
      icon: 'energy-management',
      index: 6,
    }
  ];
}
