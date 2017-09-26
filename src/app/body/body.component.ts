import { Component, OnInit, OnDestroy  } from '@angular/core';
import { MySpecialLoggerService } from "../service/my-special-logger.service";


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  // host: {'class': 'col-12 col-sm-6 col-md-4 col-lg-3 '}
  
})
export class BodyComponent implements OnInit {


  constructor(private logger: MySpecialLoggerService) { }

  ngOnInit() {
    
   }

  // TODO : 앞으로는 어디로 갈지 정해야 함.
  startManjoo(){
    alert("만주의 첫번째 이야기가 곧 시작합니다!");
  }



  

}
