import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailValid',
})
export class EmailValidPipe implements PipeTransform {

  transform(value: string): boolean {
    // Check whether the value has a valid email format.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(value);
  }
}