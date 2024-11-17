  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
  import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
  import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-form-register',
    standalone: true,
    imports: [CommonModule,ReactiveFormsModule],
    templateUrl: './form-register.component.html',
    styleUrl: './form-register.component.scss'
  })
  export class FormRegisterComponent {
    public registerForm!: FormGroup;
    public message:string | null='';
    public timeout:any;

    constructor(private auth:AuthService, private router:Router) {
      this.registerForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(3)]), // Username is required and must be at least 3 characters
        email: new FormControl('', [Validators.required, Validators.email]), // Email is required and must be valid
        password: new FormControl('', [Validators.required, Validators.minLength(8)]), // Password is required with a minimum length of 8
      });
    }

    public onSubmitRegister():void {
      const username:string = this.registerForm.get('username')?.value || '';
      const email: string = this.registerForm.get('email')?.value || '';
      const password: string = this.registerForm.get('password')?.value || '';

      this.auth.register(username,email,password).subscribe({
        next: (response) => {
          this.router.navigate(['/home'])
          sessionStorage.setItem('user',JSON.stringify(response.user));
        },
        error: (error) => {
          this.showError(error.error.message || 'Error desconocido');
        }
      })
    }

    public showError(message: string): void {
      this.message = message;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => this.closeError(), 5000); // El mensaje desaparece después de 5 segundos
    }
  
    public closeError(): void {
      this.message = null;
      clearTimeout(this.timeout);
    }

    
  }
