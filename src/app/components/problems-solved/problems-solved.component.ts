import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-problems-solved',
  templateUrl: './problems-solved.component.html',
  imports: [NgForOf, TranslatePipe],
  styleUrls: ['./problems-solved.component.css'],
})
export class ProblemsSolvedComponent {
  problems = [
    {
      icon: 'fa-solid fa-user-gear', // Lack of qualified technicians
      index: 0,
    },
    {
      icon: 'fa-solid fa-arrows-rotate', // High turnover in critical roles
      index: 1,
    },
    {
      icon: 'fa-solid fa-language', // Need for bilingual staff
      index: 2,
    },
    {
      icon: 'fa-solid fa-clock', // Urgent project staffing needs
      index: 3,
    },
    {
      icon: 'fa-solid fa-users', // Integration of specialized Mexican talent
      index: 4,
    },
    {
      icon: 'fa-solid fa-magnifying-glass-chart', // Difficulty assessing technical skills
      index: 5,
    },
    {
      icon: 'fa-solid fa-gauge', // Slow or inefficient internal processes (corregido)
      index: 6,
    },
    {
      icon: 'fa-solid fa-industry', // Lack of candidates with real manufacturing experience
      index: 7,
    },
  ];
}
