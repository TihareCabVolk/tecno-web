import { Component } from '@angular/core';
import { NavbarComponent } from '../../componets/navbar/navbar.component';
import { CarosuelComponent } from '../../componets/carosuel/carosuel.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../componets/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CarosuelComponent,CommonModule,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
