import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    return value + (value * args[0] / 100);
  }

}
