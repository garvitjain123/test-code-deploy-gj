import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Sample Angular App</h1>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Lol-update'];
}