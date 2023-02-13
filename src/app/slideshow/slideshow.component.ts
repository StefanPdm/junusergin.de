import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  images = [
    'img-01.jpg',
    'img-02.jpg',
    'img-03.jpg',
    'img-04.jpg',
    'img-05.jpg',
  ];

  image_text = [
    'Bring your personal nature to the next level 1',
    'Bring your personal nature to the next level 2',
    'Bring your personal nature to the next level 3',
    'Bring your personal nature to the next level 4',
    'Bring your personal nature to the next level 5',
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 1);
    }, 8000);
  }
}
