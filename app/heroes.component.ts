import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService) { }
  getHeroes() {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
