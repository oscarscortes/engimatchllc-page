import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  pillars = [
    { icon: '🎯', index: 0 },
    { icon: '🤝', index: 1 },
    { icon: '🌎', index: 2 },
    { icon: '💻', index: 3 },
    { icon: '🔍', index: 4 }
  ];
}
