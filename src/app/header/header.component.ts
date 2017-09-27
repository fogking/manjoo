import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isToggle:boolean;
  headShow:HTMLObjectElement;

  @ViewChild("headToggle") headToggle;

  constructor() {
    this.isToggle =false;
    
  }

  ngOnInit() {
    this.headShow = this.headToggle.nativeElement;
  }

  menuClick() {
    if(this.isToggle == true) {
      this.isToggle = false;
    }else {
      this.isToggle = true;
    }

    this.headShow.hidden=this.isToggle;
  }


}
