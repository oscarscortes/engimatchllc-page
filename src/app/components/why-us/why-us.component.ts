import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class WhyUsComponent {
  steps = [0, 1, 2, 3, 4, 5];
}
