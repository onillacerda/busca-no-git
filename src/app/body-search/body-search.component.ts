import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OtherUser } from '../other-user';

@Component({
  selector: 'app-body-search',
  templateUrl: './body-search.component.html',
  styleUrls: ['./body-search.component.css']
})
export class BodySearchComponent implements OnInit {

  user = new OtherUser('');
  constructor() {}

  ngOnInit() {
  }  

  newUser: string = ""

  submitName(){ 
    if(this.newUser == "") {
      localStorage.setItem('name-data', this.user.userName)
    }
  }
}
