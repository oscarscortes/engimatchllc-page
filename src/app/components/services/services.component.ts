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
      faIcon: 'fa-solid fa-screwdriver-wrench', // Industrial Assembly
      index: 0,
    },
    {
      faIcon: 'fa-solid fa-screwdriver', // Equipment Maintenance
      index: 1,
    },
    {
      faIcon: 'fa-solid fa-industry', // Production Operations
      index: 2,
    },
    {
      faIcon: 'fa-solid fa-shield-halved', // Quality Assurance
      index: 3,
    },
    {
      faIcon: 'fa-solid fa-gears', // Process Optimization
      index: 4,
    },
    {
      faIcon: 'fa-solid fa-user-gear', // Technical Supervision
      index: 5,
    },
    {
      faIcon: 'fa-solid fa-robot', // Mechatronics Technicians & Technologists
      index: 6,
    },
    {
      faIcon: 'fa-solid fa-flask-vial', // STEM Engineers (TN‑Eligible)
      index: 7,
    },
    {
      faIcon: 'fa-solid fa-cogs', // Mechanical Engineering
      index: 8,
    },
    {
      faIcon: 'fa-solid fa-bolt', // Electrical Engineering
      index: 9,
    },
    {
      faIcon: 'fa-solid fa-helmet-safety', // Industrial Engineering
      index: 10,
    },
    {
      faIcon: 'fa-solid fa-sitemap', // Manufacturing Engineering
      index: 11,
    },
    {
      faIcon: 'fa-solid fa-user-graduate', // Engineering Technologists
      index: 12,
    },
    {
      faIcon: 'fa-solid fa-microchip', // Mechatronics Engineering (classified under Engineering Technologist for TN)
      index: 13,
    },
  ];

  skills = [
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
    {
      index: 5,
    },
    {
      index: 6,
    }
  ];
}
