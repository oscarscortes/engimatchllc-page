import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  form = {
    name: '',
    company: '',
    email: '',
    role: '',
    message: '',
  };

  loading = false;
  submitted = false;
  errorMsg = '';

  // ─── EmailJS Configuration ─────────────────────────────────────────────────
  // 1. Create a free account at https://www.emailjs.com/
  // 2. Create an Email Service and get your Service ID
  // 3. Create an Email Template and get your Template ID
  // 4. Get your Public Key from Account > API Keys
  // Replace the values below with your own credentials:
  private readonly EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
  private readonly EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  private readonly EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
  // ───────────────────────────────────────────────────────────────────────────

  async onSubmit() {
    this.loading = true;
    this.errorMsg = '';

    try {
      await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        {
          from_name:    this.form.name,
          from_company: this.form.company,
          from_email:   this.form.email,
          role:         this.form.role,
          message:      this.form.message,
        },
        this.EMAILJS_PUBLIC_KEY
      );

      this.submitted = true;
      this.form = { name: '', company: '', email: '', role: '', message: '' };
    } catch (err) {
      console.error('EmailJS error:', err);
      this.errorMsg = 'error';
    } finally {
      this.loading = false;
    }
  }
}
