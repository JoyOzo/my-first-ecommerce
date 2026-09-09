import { Component } from '@angular/core';
import { SelectColor } from '../select-color/select-color';
// Laces has its own component and stylesheet.
// It reuses SelectColor because laces also have different colour options.
@Component({
  // Selector is reused here because the Laces page needs colour selection functionality, which is provided by the SelectColor component. 
  imports: [SelectColor],
  selector: 'app-laces',
  styleUrl: './laces.css',
  templateUrl: './laces.html',
})
export class Laces {}
