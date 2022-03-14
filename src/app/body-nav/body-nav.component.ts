import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-body-nav',
  templateUrl: './body-nav.component.html',
  styleUrls: ['./body-nav.component.css']
})
export class BodyNavComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.scrolling-navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse'); 
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
