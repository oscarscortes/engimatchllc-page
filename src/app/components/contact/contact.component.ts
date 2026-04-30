import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileModel } from '../../../utils/file.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  maxSize = 10;
  PDF = 'application/pdf';

  @ViewChild('inputFile', { static: false })
  fileInput?: ElementRef<HTMLInputElement>;

  form = {
    name: '',
    company: '',
    email: '',
    role: '',
    message: '',
    inquiryType: '',
    resume: null as FileModel | null,
  };

  loading = false;
  submitted = false;
  errorMsg = '';

  constructor(
    protected httpClient: HttpClient,
    private translate: TranslateService
  ) {}

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
    const url = 'http://localhost:8888/.netlify/functions/send-email';
    const url2 = '.netlify/functions/send-email';
    return this.httpClient.post(url2, {
      name: this.form.name,
      company: this.form.company,
      email: this.form.email,
      role: this.form.role,
      message: this.form.message,
      inquiryType: this.form.inquiryType,
      resume: this.form.resume,
    });
  }

  onFileChange(files: FileList | null): void {
    if (files && files.length === 1) {
      const file = files[0];
      const size = file.size / 1024 / 1024;
      if (size > this.maxSize) {
        const errorEn = `El archivo excede el tamaño máximo permitido de ${this.maxSize} MB.`;
        this.translate.get('contact.form.errorText', { error: errorEn }).subscribe((translatedMsg) => {
          this.errorMsg = translatedMsg;
        });
        this.form.resume = null;
        return;
      } else {
        if (file.type !== this.PDF) {
          this.errorMsg = 'El archivo debe ser PDF';
          this.form.resume = null;
          return;
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (event: any) => {
          const base64Data = event.target.result.substr(
            event.target.result.indexOf('base64,') + 'base64,'.length,
          );
          const archivo = new FileModel();
          archivo.archivo = base64Data;
          archivo.archivoContentType = file.type;
          archivo.nombre = file.name;
          this.form.resume = archivo;
          this.errorMsg = '';
        };
      }
    }
  }

  selectFile(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  changeFile(): void {
    this.deleteFile();
    this.selectFile();
  }

  deleteFile(): void {
    this.form.resume = null;
    this.loading = false;
  }
}
