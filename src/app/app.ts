import { Component, signal } from '@angular/core';
import { Laces } from './laces/laces';
import { ShoesAndBags } from './shoes-and-bags/shoes-and-bags'; 
import { Footer } from './footer/footer';
import { Login } from './login/login';

@Component({
  imports: [Laces, ShoesAndBags, Footer, Login],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-first-ecommerce');
}
