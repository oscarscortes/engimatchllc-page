import { ServicesComponent } from './components/services/services.component';
import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { DigitalServicesComponent } from './components/digital-services/digital-services.component';
import { WhyUsComponent } from './components/why-us/why-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ServicesComponent,
    DigitalServicesComponent,
    WhyUsComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-services />
      <app-digital-services />
      <app-why-us />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class App {
  title = 'engimatch-landing';
}
