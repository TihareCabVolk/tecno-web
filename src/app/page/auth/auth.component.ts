import { Component } from '@angular/core';

import { NgClass, NgStyle } from '@angular/common';
import { FormLoginComponent } from "../../components/form-login/form-login.component";
import { FormRegisterComponent } from "../../components/form-register/form-register.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NgClass, NgStyle, FormLoginComponent, FormRegisterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  isActive:boolean = false;
  
  toggleActive(){
    this.isActive = !this.isActive
  }
}
