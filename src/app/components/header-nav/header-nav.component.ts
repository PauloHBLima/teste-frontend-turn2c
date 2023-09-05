import { Component, OnInit } from '@angular/core';
import {  faUser, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

faUser =  faUser;
faHouse = faHouse;
showPerfil = 'showPerfil'
showHome = 'showHome'


    constructor() {}

  ngOnInit(): void {}

  handleTradeNav(): void {

  }

}

