import { Component } from '@angular/core';
import { SelectColor } from '../select-color/select-color';

// ShoesAndBags has its own component and stylesheet.
  // It reuses SelectColor because Shoes & Bags also have colour options.
@Component({
    imports: [SelectColor],
  selector: 'app-shoes-and-bags',
  styleUrl: './shoes-and-bags.css',
  templateUrl: './shoes-and-bags.html',
})
export class ShoesAndBags {}
 