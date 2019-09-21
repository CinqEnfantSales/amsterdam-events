import { Component } from '@angular/core';
import {event} from "././components/models/a-event";

@Component({
  selector: 'event-list',
  templateUrl: './components.mainpage.event-list.html',
  styleUrls: ['./components.mainpage.event-list.css']
})

export class AppComponent {
events: event[] = [
  new event('penis')
];
}
