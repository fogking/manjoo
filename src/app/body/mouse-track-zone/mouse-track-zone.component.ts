import { Component, OnInit, Host, Optional } from '@angular/core';
import { MySpecialLoggerService } from "../../service/my-special-logger.service";
import { AnotherLoggerService } from "../../service/another-logger.service";
import { LoggerService } from "../../service/logger-service";
import { LogLevel } from "../../service/log-level.enum";
import { LOG_LEVEL_TOKEN } from "../../app.token";


@Component({
  selector: 'app-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css'],
  // providers: [MySpecialLoggerService, {provide:LOG_LEVEL_TOKEN, useValue:LogLevel.DEBUG}]
})
export class MouseTrackZoneComponent implements OnInit {
  logger: LoggerService;
  constructor(
    @Host() @Optional() mySpecialLogger: MySpecialLoggerService,
    anotherLogger: AnotherLoggerService    
  ) {
      this.logger = mySpecialLogger ? mySpecialLogger : anotherLogger;
  }

  ngOnInit() { }

  captureMousePos($event: MouseEvent) {
    this.logger.debug('click event occured');
    const pos = [$event.clientX, $event.clientY];
    this.logger.info(`x:${pos[0]} y:${pos[1]}`);
    alert(`x:${pos[0]} y:${pos[1]}`);
  }

}