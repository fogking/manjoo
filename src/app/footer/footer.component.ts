import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div>
      <p>
        &copy; Copyright 2017 fogking.github.io all right reserved.
      </p>
    </div>
  `,
  styles: ['p {text-align:center}',' div{background-color: lightblue};']
})

export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
