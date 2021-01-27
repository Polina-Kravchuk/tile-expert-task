import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tile-expert';

  isExpanded: boolean;
  isExpandedMobile: boolean;
  openTime: Date;
  openTimeMobile:Date;

  switch() {
    this.isExpanded = !this.isExpanded;
    this.openTime = new Date();
  }

  switchMobile() {
    this.isExpandedMobile = !this.isExpandedMobile;
    this.openTimeMobile = new Date();
  }

  closeIfNeededMobile() {
    const now = new Date();
    const diff_ms = 300;
    // check if clicked before and check double click
    if (this.openTimeMobile && this.checkIfNewClick(this.openTimeMobile, now, diff_ms)) {
      this.isExpandedMobile = false;
    }
  }

  closeIfNeeded() {
    const now = new Date();
    const diff_ms = 300;
    // check if clicked before and check double click
    if (this.openTime && this.checkIfNewClick(this.openTime, now, diff_ms)) {
      this.isExpanded = false;
    }
  }

  checkIfNewClick(date1: Date, date2: Date, diff_ms: number): boolean {
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    return difference_ms > diff_ms;
  }
}
