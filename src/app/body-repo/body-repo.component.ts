import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { GitService } from '../apicalls/git.service';

@Component({
  selector: 'app-body-repo',
  templateUrl: './body-repo.component.html',
  styleUrls: ['./body-repo.component.css']
})
export class BodyRepoComponent implements OnInit {

  repo:Repository;
  myUserName = 'Mutugiii';
  retrievedData:string;
  constructor(public httpService:GitService) { }

  ngOnInit() {
    this.retrievedData = localStorage.getItem('name-data')
    this.httpService.repoRequest(this.retrievedData) 
  }

}
