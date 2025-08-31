import { Component, Input, OnInit } from '@angular/core';
import { IGame } from 'src/app/models/gamesModel';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input() jogo!: IGame;
  constructor() {}

  ngOnInit(): void {}
}
