import { Component } from '@angular/core';

@Component({
  selector: 'headerC',
  templateUrl: './components.mainpage.header.html',
  styleUrls: ['./components.mainpage.header.css']
})

export class Header {
dateNow : Date = new Date();
dateNowISO = this.dateNow.toISOString();
}
