import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  // Array of image URLs
  slideIndex: number = 0;

  constructor() { }

  ngOnInit() {
    this.showSlides();
  }

  showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute("style", "display: none;");
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].setAttribute("style", "display: block;");
    dots[this.slideIndex - 1].className += " active";
    setTimeout(() => this.showSlides(), 2000); // Change image every 2 seconds
  }
}
