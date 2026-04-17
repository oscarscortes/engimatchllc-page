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
      index: 0,
    },
    {
      icon: 'maintenance',
      index: 1,
    },
    {
      icon: 'production',
      index: 2,
    },
    {
      icon: 'quality',
      index: 3,
    },
    {
      icon: 'process',
      index: 4,
    },
    {
      icon: 'supervision',
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
