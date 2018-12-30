import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.less']
})
export class HeroTableComponent implements OnInit {
  heroes: Hero[] = [];
  heroKeys: any[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(
      heroes => {
        this.heroes = heroes;
        if (heroes.length != 0) {
          this.heroKeys = Object.keys(heroes[0]);
        }
      }
    );
  }

}
