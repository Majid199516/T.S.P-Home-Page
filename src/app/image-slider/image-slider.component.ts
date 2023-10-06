import { Component, OnInit, ViewChild } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit {
  ngOnInit() {}
  public slides = [
    {
      src: 'assets/shared/images/Image-slider01.webp',
    },
    {
      src: 'assets/shared/images/Image-slider02.webp',
    },
  ];
}
