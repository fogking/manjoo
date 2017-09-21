import { Component, AfterViewInit } from '@angular/core';
import { MySpecialLoggerService } from "./service/my-special-logger.service";
// import { LogLevel } from './service/log-level.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fogking.github.io';
  userName = '';
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;
  // logLevel: LogLevel = LogLevel.DEBUG;
  // logger: MySpecialLoggerService;
  
  constructor(private logger: MySpecialLoggerService) { }


  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if(this.valid) return;
      // alert('이름을 입력해 주세요');
    }

    setTimeout(checkTouchedFn, AppComponent.CHK_KEYUP_WAIT_SEC);
  }

  onKeyUp(name) {
    this.valid = name.length > 0;
  }

  onChange() {
    this.valid = this.userName.length > 0;
  }


}
