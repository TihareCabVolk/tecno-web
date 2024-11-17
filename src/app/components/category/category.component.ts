import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Category } from '../../interfaces/Category';
import { WcdonaldsService } from '../../services/wcdonalds.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterOutlet],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {

  public categories!:Category[];
  @Input() public mode!:string;

  constructor(private wdService:WcdonaldsService){}

  ngOnInit(): void {
    this.wdService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data.splice(0, 6);
      },
      error: (err) => {
      }
    });   
  }

}
