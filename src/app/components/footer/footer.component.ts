import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  links = [
    { href: '#home', label: 'nav.home' },
    { href: '#problems-solved', label: 'nav.solved' },
    { href: '#about', label: 'nav.about' },
    { href: '#services', label: 'nav.services' },
    { href: '#digital-services', label: 'nav.digitalServices' },
    { href: '#why-us', label: 'nav.whyUs' },
    { href: '#contact', label: 'nav.contact' },
  ];
}
