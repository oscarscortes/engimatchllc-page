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
    this.sendEmail().subscribe((res) => {
      this.successSendEmail(res);
    });
  }

  successSendEmail(res: any): void {
    if (res) {
      console.log('Email enviado con éxito:', Observable);
      this.submitted = true;
      this.loading = false;
    } else {
      console.error('Error al enviar el email:', Observable);
      this.errorMsg = 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
      this.loading = false;
      this.submitted = false;
    }
  }

  sendEmail(): Observable<any> {
    const url = "http://localhost:8888/.netlify/functions/send-email";
    const url2 = ".netlify/functions/send-email";
    return this.httpClient.post(url, {
      name: this.form.name,
      company: this.form.company,
      email: this.form.email,
      role: this.form.role,
      message: this.form.message
    });
  }

}
