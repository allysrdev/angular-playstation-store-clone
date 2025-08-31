import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/models/gamesModel';

@Component({
  selector: 'app-games-view',
  templateUrl: './games-view.component.html',
  styleUrls: ['./games-view.component.css'],
})
export class GamesViewComponent implements OnInit {
  jogos: IGame[] = [
    {
      id: '1',
      nome: 'EA SPORTS FC 25',
      preco: 'R$ 299,90',
      categoria: 'Esportes',
      imagem:
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/86a267ec44fc57124127eba46f25120813374317/capsule_616x353.jpg?t=1752681627',
    },
    {
      id: '2',
      nome: 'Resident Evil Village',
      preco: 'R$ 199,90',
      categoria: 'Ação e Aventura',
      imagem:
        'https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png',
    },
    {
      id: '3',
      nome: 'Grand Theft Auto V',
      preco: 'R$ 249,90',
      categoria: 'Ação e Aventura',
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8g9Mt2VIKMHfg25M7o05brAQ3hVpztWwtQ&s',
    },
    {
      id: '4',
      nome: 'DEATH STRANDING 2: ON THE BEACH',
      preco: 'R$ 349,90',
      categoria: 'Ação e Aventura',
      imagem:
        'https://image.api.playstation.com/vulcan/ap/rnd/202503/0316/ba08d42ca97ad050e653b7eda937dca69e560a707eb03dd4.jpg',
    },
    {
      id: '5',
      nome: 'Mortal Kombat 11',
      preco: 'R$ 179,90',
      categoria: 'Luta',
      imagem:
        'https://upload.wikimedia.org/wikipedia/pt/2/21/Mortal_Kombat_11_capa.jpg',
    },
    {
      id: '6',
      nome: 'Forza Horizon 5',
      preco: 'R$ 299,90',
      categoria: 'Corrida',
      imagem:
        'https://image.api.playstation.com/vulcan/ap/rnd/202502/1900/631436cfbc1d64659c778e3783f29fafad6022145e0ffec8.jpg',
    },
  ];

  jogosPorCategoria: { [categoria: string]: IGame[] } = {};

  objectKeys = Object.keys;

  constructor() {}

  ngOnInit(): void {
    this.agruparPorCategoria();
  }

  agruparPorCategoria(): void {
    this.jogosPorCategoria = this.jogos.reduce((acc, jogo) => {
      if (!acc[jogo.categoria]) {
        acc[jogo.categoria] = [];
      }
      acc[jogo.categoria].push(jogo);
      return acc;
    }, {} as { [categoria: string]: IGame[] });
  }
}
