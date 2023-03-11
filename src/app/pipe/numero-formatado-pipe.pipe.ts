import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeroFormatadoPipe'
})
export class NumeroFormatadoPipePipe implements PipeTransform {

  transform(value: number): string {
    const unidades = ['', 'mil', 'milhões', 'bilhões', 'trilhões', 'quatrilhões', 'quintilhões'];
    let index = 0;

    while (value >= 1000 && index < unidades.length - 1) {
      value = value / 1000;
      index++;
    }

    return value.toFixed(0) + ' ' + unidades[index];
  }

}
