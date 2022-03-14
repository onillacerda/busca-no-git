import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Busca no Github';
  constructor(private ngxService: NgxUiLoaderService) { }

  ngOnInit(){
    this.ngxService.start();
    // Para o carregamento em primeiro plano após 5s
    setTimeout(() => {
      this.ngxService.stop();
    }, 1500);
  }
} 
