import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { BodyComponent } from './body/body.component';
import { HonorPipe } from './pipe/honor.pipe';
import { MouseTrackZoneComponent } from './body/mouse-track-zone/mouse-track-zone.component';
import { MySpecialLoggerService } from "./service/my-special-logger.service";
import { AnotherLoggerService } from "./service/another-logger.service";
import { LogLevel } from "./service/log-level.enum";
import { LOG_LEVEL_TOKEN } from "./app.token";
import { BlockGameComponent } from './body/block-game/block-game.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    BodyComponent,
    HonorPipe,
    MouseTrackZoneComponent,
    BlockGameComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // MySpecialLoggerService, {provide: LOG_LEVEL_TOKEN , useValue: LogLevel.INFO},
    MySpecialLoggerService,
    AnotherLoggerService, {provide: LOG_LEVEL_TOKEN , useValue: LogLevel.INFO}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
