import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  mobileOpen = false;
  currentLang = 'en';

  navLinks = [
    { href: '#home', label: 'nav.home' },
    { href: '#about', label: 'nav.about' },
    { href: '#services', label: 'nav.services' },
    { href: '#digital-services', label: 'nav.digitalServices' },
    { href: '#why-us', label: 'nav.whyUs' },
    { href: '#contact', label: 'nav.contact' },
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 20;
  }

  toggleLang() {
    this.currentLang = this.currentLang === 'en' ? 'es' : 'en';
    this.translate.use(this.currentLang);
  }
}
