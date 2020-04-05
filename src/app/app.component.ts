import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'nnn';
  constructor() {
    this.changeName('ggg');
  }
  changeName(name: string) {
    this.name = name;
  }
}
