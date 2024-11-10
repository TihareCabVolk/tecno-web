import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})
export class FormLoginComponent implements OnDestroy {
  
  public loginForm!:FormGroup; 
  public message:string | null = '';
  public subscribe!:Subscription | null;
  public timeout:any;

  constructor(private auth:AuthService, private router:Router){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  };

  public onSubmitLogin(): void {
    const email: string = this.loginForm.get('email')?.value || '';
    const password: string = this.loginForm.get('password')?.value || '';
  
    this.auth.login(email, password).subscribe({
      next: (response) => {
        localStorage.setItem('token','true')
        if(response?.isAdmin){
          this.router.navigate(['/admin'])  
        }else{
          this.router.navigate(['/home'])
        }
        
      },
      error: (error) => {
        this.showError(error.error.message || 'Error desconocido');
      }
    });    
  };
  
  showError(message: string): void {
    this.message = message;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.closeError(), 5000); // El mensaje desaparece después de 5 segundos
  }

  closeError(): void {
    this.message = null;
    clearTimeout(this.timeout);
  }

  public ngOnDestroy(): void {
      if(this.subscribe) this.subscribe.unsubscribe()
  };
}
