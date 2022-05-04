import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  choosenIndex: number = -1;

  btnClicked(index) {
    if (this.selectedIn(index)) {
      this.choosenIndex = -1;
    } else {
      this.choosenIndex = index;
    }
  }
  selectedIn(index) {
    return this.choosenIndex === index;
  }
  dis() {
    return this.choosenIndex !== -1;
  }
  getButtonText(index) {
    if (this.selectedIn(index)) {
      return 'Unvote';
    } else {
      return 'Vote';
    }
  }
}
