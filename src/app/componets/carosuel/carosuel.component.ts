import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carosuel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carosuel.component.html',
  styleUrl: './carosuel.component.scss'
})
export class CarosuelComponent {
  images = [
    'https://media.revistagq.com/photos/6490312847440fcd9be41fb7/master/pass/flash.jpg',
    'https://media.revistagq.com/photos/6490312847440fcd9be41fb7/master/pass/flash.jpg',
    'https://media.revistagq.com/photos/6490312847440fcd9be41fb7/master/pass/flash.jpg'
  ];
  
  currentSlide = 0;

  showSlide(index: number) {
    const slides = this.images.length;
    this.currentSlide = (index + slides) % slides;
  }

  prevSlide() {
    this.showSlide(this.currentSlide - 1);
  }

  nextSlide() {
    this.showSlide(this.currentSlide + 1);
  }

  goToSlide(index: number) {
    this.showSlide(index);
  }
}
