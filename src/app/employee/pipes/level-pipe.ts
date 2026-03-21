import { Pipe, PipeTransform } from '@angular/core';
import { Level } from '../models/level.model';

const LEVELSMAP: Record<Level, string> = {
  J: 'Junior',
  S: 'Senior',
  M: 'Manager',
};

@Pipe({
  name: 'level',
})
export class LevelPipe implements PipeTransform {
  transform(value: Level): string {
    return LEVELSMAP[value];
  }
}
