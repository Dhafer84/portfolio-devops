import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
})
export class ContactComponent {
  lang: 'fr' | 'en' = 'fr';
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      message: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  switchLang() {
    this.lang = this.lang === 'fr' ? 'en' : 'fr';
  }

  submitForm() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.invalid) return;

    this.loading = true;

    this.http.post('http://localhost:3000/api/contact', this.contactForm.value).subscribe({
      next: () => {
        this.successMessage =
          this.lang === 'fr'
            ? '✅ Votre message a été envoyé avec succès !'
            : '✅ Your message has been sent successfully!';
        this.contactForm.reset();
        this.submitted = false;
        this.loading = false;
        setTimeout(() => (this.successMessage = ''), 4000);
      },
      error: () => {
        this.errorMessage =
          this.lang === 'fr'
            ? "❌ Une erreur s'est produite. Veuillez réessayer."
            : '❌ Something went wrong. Please try again.';
        this.loading = false;
        setTimeout(() => (this.errorMessage = ''), 4000);
      },
    });
  }
}
