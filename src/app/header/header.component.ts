import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isToggle:boolean;

  constructor() {
    this.isToggle =false;
   }

  ngOnInit() {
    
  }

  menuClick(){
    if(this.isToggle == true) {
      this.isToggle = false;
    }else {
      this.isToggle = true;
    }

    alert(this.isToggle);
  }

}
