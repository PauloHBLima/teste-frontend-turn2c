import { Component, OnInit } from '@angular/core';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  faCameraRetro = faCameraRetro;
ngOnInit(): void {

}

constructor(){}

}
