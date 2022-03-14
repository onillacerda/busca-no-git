import { Component, OnInit } from '@angular/core';
import { Starred } from '../starred';
import { GitService } from '../apicalls/git.service';

@Component({
  selector: 'app-body-star',
  templateUrl: './body-star.component.html',
  styleUrls: ['./body-star.component.css']
})
export class BodyStarComponent implements OnInit {

  star:Starred;
  myUserName = 'Mutugiii';
  retrievedData:string;
  constructor(public httpService:GitService) { }

  ngOnInit() {
    this.retrievedData = localStorage.getItem('name-data')
    this.httpService.starRequest(this.retrievedData)
  }

}
 