import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level',
})
export class LevelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
