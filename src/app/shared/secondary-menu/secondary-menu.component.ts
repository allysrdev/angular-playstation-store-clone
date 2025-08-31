import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-menu',
  templateUrl: './secondary-menu.component.html',
  styleUrls: ['./secondary-menu.component.css'],
})
export class SecondaryMenuComponent implements OnInit {
  secondaryMenuItems: string[] = [
    'Novidades',
    'Coleções',
    'Ofertas',
    'Assinaturas',
    'Navegar',
  ];

  constructor() {}

  ngOnInit(): void {}
}
