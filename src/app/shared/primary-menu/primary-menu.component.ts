import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-menu',
  templateUrl: './primary-menu.component.html',
  styleUrls: ['./primary-menu.component.css'],
})
export class PrimaryMenuComponent implements OnInit {
  primaryMenuItems: string[] = [
    'Jogos',
    'PS5',
    'PS4',
    'Serviços',
    'Acessórios',
    'Notícias',
    'Loja',
    'Suporte',
  ];

  constructor() {}

  ngOnInit(): void {}
}
