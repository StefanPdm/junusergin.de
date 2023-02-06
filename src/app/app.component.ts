import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 images = ['img-01.jpg', 'img-02.jpg', 'img-03.jpg', 'img-04.jpg', 'img-05.jpg'];
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
  }, 10);
}, 8000);
}

}
 