import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarosuelComponent } from '../../components/carosuel/carosuel.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CategoryComponent } from "../../components/category/category.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CarosuelComponent, CommonModule, FooterComponent, CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
