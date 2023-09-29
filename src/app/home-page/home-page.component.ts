import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  rotateChavron1st = false;
  showPh1st = false;
  rotateChavron2nd = false;
  showPh2nd = false;
  rotateChavron3rd = false;
  showPh3rd = false;
  rotateChavron4th = false;
  showPh4th = false;
  rotateChavron5th = false;
  showPh5th = false;
  onshowPh1st(event: Event) {
    if (this.showPh1st === false) {
      this.showPh1st = true;
      this.rotateChavron1st = true;
    } else {
      this.showPh1st = false;
      this.rotateChavron1st = false;
    }
  }
  onshowPh2nd(event: Event) {
    if (this.showPh2nd === false) {
      this.showPh2nd = true;
      this.rotateChavron2nd = true;
    } else {
      this.showPh2nd = false;
      this.rotateChavron2nd = false;
    }
  }
  onshowPh3rd(event: Event) {
    if (this.showPh3rd === false) {
      this.showPh3rd = true;
      this.rotateChavron3rd = true;
    } else {
      this.showPh3rd = false;
      this.rotateChavron3rd = false;
    }
  }
  onshowPh4th(event: Event) {
    if (this.showPh4th === false) {
      this.showPh4th = true;
      this.rotateChavron4th = true;
    } else {
      this.showPh4th = false;
      this.rotateChavron4th = false;
    }
  }
  onshowPh5th(event: Event) {
    if (this.showPh5th === false) {
      this.showPh5th = true;
      this.rotateChavron5th = true;
    } else {
      this.showPh5th = false;
      this.rotateChavron5th = false;
    }
  }
}
