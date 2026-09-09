import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-select-color',
  styleUrl: './select-color.css',
  templateUrl: './select-color.html',
})
export class SelectColor {
  // These colours are stored in one reusable componet.
  // Both Laces and Shoes& Bags can use the same colour Selector.
  colours = [
    'aqua',
    'green',
    'pink',
    'khaki',
    'black',
    'lightgray',
    'salmon',
    'orange',
    'darkred',
    'red',
    'beige',
    'gray',
    'purple',
    'gold',
    'lime',
    'violet',
    'yellow',
    'blue',
    'lightgreen',
    'turquoise',
    'indigo',
    'skyblue',
    'lightblue',
    'teal',
    'cyan',
    'white',
    'maroon',
    'olive',
  ];
}
