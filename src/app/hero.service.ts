import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes'
import {Hero} from './hero'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes():Hero[]{
    return HEROES;
  }

  getHero(id:number):Hero{
    return HEROES.find(x=>x.id==id);
  }

}
