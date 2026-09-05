import { Component, signal } from '@angular/core';
import { Laces } from './laces/laces';
import { ShoesAndBags } from './shoes-and-bags/shoes-and-bags'; 

@Component({
  imports: [Laces, ShoesAndBags],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-first-ecommerce');
}
