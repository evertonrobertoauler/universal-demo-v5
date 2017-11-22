import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CookiesService } from './cookies.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal-demo-v5' }),
    HttpClientModule,
    BrowserTransferStateModule
  ],
  providers: [CookiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
