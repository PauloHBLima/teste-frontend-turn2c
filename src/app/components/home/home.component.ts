import { LimitParams } from './../../services/types/DogsParams.type';
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

  
  name: string = 'Dogs';
  page = 1;
  dogs: IFakeDogs[] = [];

  constructor(private dogsApiService: DogsApiService, private router: Router) {}
  ngOnInit(): void {
    this.getDogs(
      this.page,
      8,
      'DESC'
    );

  }

  getDogs(page: number, limit: number, order: LimitParams) {

    this.dogsApiService.findAll(page, limit, order ).subscribe({
      next: (response) => {
        this.dogs = response;
      },
      error: (err) => {
        console.log('[ERROR]:', err);
      },
      complete: () => console.log('[COMPLETE]: Requisição concluida com sucesso'),
    })
  }

nextPage() {
  this.page++;
  this.getDogs(this.page, 8, 'DESC')
}

}
