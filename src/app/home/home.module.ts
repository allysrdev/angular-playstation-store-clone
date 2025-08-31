import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { SharedModule } from '../shared/shared.module';
import { GamesViewComponent } from './components/games-view/games-view.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { GameCardComponent } from './components/games-view/components/game-card/game-card.component';

@NgModule({
  declarations: [BannerComponent, GamesViewComponent, GameCardComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule, RouterModule],
  exports: [BannerComponent, GamesViewComponent],
})
export class HomeModule {}
