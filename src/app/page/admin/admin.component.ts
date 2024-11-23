import { Component } from '@angular/core';
import { WcdonaldsService } from '../../services/wcdonalds.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  constructor(private wdService:WcdonaldsService){}

  public isSidebarActive: boolean = true;

  onSidebarToggle(isActive: boolean) {
    this.isSidebarActive = isActive;
  }
}
