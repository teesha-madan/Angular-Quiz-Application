import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultFormat',
  standalone: true
})
export class ResultPipe implements PipeTransform {
  transform(value: number): string {
    return `Your score: ${value}`;
  }
}
