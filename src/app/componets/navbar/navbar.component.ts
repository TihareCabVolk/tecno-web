import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  public isLoggedIn:boolean = false;

  public isOpen:boolean = false;
  public isOpenCart:boolean = false;
  public cantProduct:number = 1;

  public ngOnInit(): void {
    // Verificar si el token está en el localStorage
  }

  public toggleMenu():void{
    this.isOpen = !this.isOpen; 
   }

   public toggleCart():void{
    this.isOpenCart = !this.isOpenCart; 
   }

   @HostListener('document:click', ['$event'])
   public onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const isInsideButton = target.closest('button')?.contains(target);
    const isInsideDropdown = target.closest('.relative')?.contains(target);

    if (!isInsideButton && !isInsideDropdown) {
      this.isOpen = false;
      this.isOpenCart = false;
    }
  }

  public loggedIn(){
    this.isLoggedIn = !this.isLoggedIn;
    return !this.isLoggedIn;
  }
}
