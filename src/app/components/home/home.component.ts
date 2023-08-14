import { DogsApiService } from './../../services/dogs-api.service';
import { Component, OnInit } from '@angular/core';
import { IFakeDogs } from '../interfaces/FakeDogs.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dogs: Array<IFakeDogs> = [];

  constructor(private dogsApiService: DogsApiService, private router: Router) {}
  ngOnInit(): void {
    this.getDogs();
  }

  getDogs() {

    this.dogsApiService.findAll(8, "DESC").subscribe({
      next: (response) => {
        this.dogs = response;
      },
      error: (err) => {
        console.log('[ERROR]:', err);
      },
      complete: () => console.log('[COMPLETE]: Requisição concluida com sucesso'),
    })
  }
}
