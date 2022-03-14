import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../user';
import { GitService } from '../apicalls/git.service';

@Component({
  selector: 'app-body-user',
  templateUrl: './body-user.component.html',
  styleUrls: ['./body-user.component.css']
})
export class BodyUserComponent implements OnInit {

  user: User;
  retrievedData:string;
  customData:string;
  persistedArr:any;
  @ViewChild("myComponent")divView:ElementRef;
  constructor(private httpService:GitService) {}

  ngOnInit() {
    this.retrievedData = localStorage.getItem('name-data')
    // let parsedData= JSON.stringify(retrievedData);
    this.httpService.userRequest(this.retrievedData);
    this.user = this.httpService.user
    
    // recarregar quando o armazenamento local for alterado
    let setItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function() {
      setItem.apply(this, arguments);
      location.reload();
   };
  } 

  ngAfterViewInit(){
    if(this.retrievedData == ''){
      this.divView.nativeElement.innerHTML = "Desculpe, digite algum texto";
    } else if(this.user.userName == null) {
      this.divView.nativeElement.innerHTML = "O usuário não pode ser encontrado";
    }
  }
}