import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-success-story',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './success-story.component.html'
})
export class SuccessStoryComponent {
  challengeItems = [
    'success.challengeItems.0',
    'success.challengeItems.1',
    'success.challengeItems.2',
  ];
}
