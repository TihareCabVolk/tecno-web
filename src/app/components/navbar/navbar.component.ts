import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public isOpen:boolean = false;
  public isOpenCart:boolean = false;
  public cantProduct:number = 1;

  public toggleMenu():void{
    this.isOpen = !this.isOpen; 
   }

   public toggleCart():void{
    this.isOpenCart = !this.isOpenCart; 
   }

}
