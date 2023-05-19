import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CofettiSlowComponent } from './components/cofetti-slow/cofetti-slow.component';
import { CofettiFastComponent } from './components/cofetti-fast/cofetti-fast.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { NinjaComponent } from './components/ninja/ninja.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CofettiSlowComponent,
    CofettiFastComponent,
    LoadingComponent,
    CountdownComponent,
    NinjaComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
