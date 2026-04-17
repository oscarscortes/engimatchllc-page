import { ServicesComponent } from './components/services/services.component';
import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SuccessStoryComponent } from './components/success-story/success-story.component';
import { AboutComponent } from './components/about/about.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { DigitalServicesComponent } from './components/digital-services/digital-services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    SuccessStoryComponent,
    AboutComponent,
    HowItWorksComponent,
    ContactComponent,
    FooterComponent,
    ServicesComponent,
    DigitalServicesComponent
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-services />
      <app-digital-services />
      <app-how-it-works />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class App {
  title = 'engimatch-landing';
}
