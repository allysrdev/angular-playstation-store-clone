import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
