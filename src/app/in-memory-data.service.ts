import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Zavala', class: 'Titan' },
      { id: 2, name: 'Ikora Rey', class: 'Warlock' },
      { id: 3, name: 'Caid-6', class: 'Hunter' },
      { id: 4, name: 'FellWinter', class: 'Warlock' },
      { id: 5, name: 'Saint-14', class: 'Titan' },
      { id: 6, name: 'Drifter', class: 'Unknow' },
      { id: 7, name: 'Crow', class: 'Hunter' },
      { id: 8, name: 'Lord Saladino', class: 'Titan' },
      { id: 9, name: 'Eris Morn', class: 'Unknow' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
