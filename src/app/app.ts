import { Component, signal } from '@angular/core';
import { Laces } from './week-3-day-1/laces/laces';
import { ShoesAndBags } from './week-3-day-1/shoes-and-bags/shoes-and-bags';
import { Footer } from './week-3-day-2/footer/footer';
import { Login } from './week-3-day-2/login/login';

@Component({
  imports: [Laces, ShoesAndBags, Footer, Login],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-first-ecommerce');
}
