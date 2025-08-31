import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PrimaryMenuComponent } from './primary-menu/primary-menu.component';
import { SecondaryMenuComponent } from './secondary-menu/secondary-menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ButtonComponent,
    PrimaryMenuComponent,
    SecondaryMenuComponent,
    FooterComponent,
  ],
  imports: [CommonModule, AppRoutingModule, RouterModule],
  exports: [
    ButtonComponent,
    PrimaryMenuComponent,
    SecondaryMenuComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
