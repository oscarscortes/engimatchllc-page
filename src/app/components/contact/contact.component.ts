import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {

  constructor(
    protected httpClient: HttpClient
  ) {}

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

  onSubmit(): void {
    this.loading = true;
    this.errorMsg = '';
    this.sendEmail().subscribe(this.successSendEmail.bind(this), (error) => {
      console.error('Error al enviar el email:', error);
      this.errorMsg = 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
      this.loading = false;
    });
  }

  successSendEmail(Observable: Observable<any>): void {
    Observable.subscribe({
      next: (response) => {
        console.log('Email enviado con éxito:', response);
        this.submitted = true;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al enviar el email:', error);
        this.errorMsg = 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
        this.loading = false;
      }
    });
  }

  sendEmail(): Observable<any> {
    return this.httpClient.post('/.netlify/functions/send-email', {
      name: this.form.name,
      company: this.form.company,
      email: this.form.email,
      role: this.form.role,
      message: this.form.message
    });
  }

}
