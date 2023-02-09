import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CardsResponseComponent } from './components/shared/cards-response/cards-response.component';
import { BoxContainerComponent } from './components/shared/box-container/box-container.component';
import { LeftSideComponent } from './components/layout/left-side/left-side.component';
import { RightSideComponent } from './components/layout/right-side/right-side.component';
import { YellowCardsComponent } from './components/yellow-cards/yellow-cards.component';
import { RedCardsComponent } from './components/red-cards/red-cards.component';
import { ErrorHandlerComponent } from './components/shared/error-handler/error-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CardsResponseComponent,
    BoxContainerComponent,
    LeftSideComponent,
    RightSideComponent,
    YellowCardsComponent,
    RedCardsComponent,
    ErrorHandlerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
