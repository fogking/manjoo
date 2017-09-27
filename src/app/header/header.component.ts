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
    this.isToggle =true;
    
  }

  ngOnInit() {
    this.headShow = this.headToggle.nativeElement;
    this.headShow.hidden = this.isToggle;
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
