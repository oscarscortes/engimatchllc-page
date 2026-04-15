import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  links = [
    { href: '#home',         label: 'nav.home' },
    { href: '#success',      label: 'nav.success' },
    { href: '#about',        label: 'nav.about' },
    { href: '#how-it-works', label: 'nav.howItWorks' },
    { href: '#contact',      label: 'nav.contact' },
  ];
}
