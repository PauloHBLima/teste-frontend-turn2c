import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LimitParams } from './types/DogsParams.type';
import { IFakeDogs } from '../components/interfaces/FakeDogs.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsApiService {
  private BASE_URL: string = 'https://api.thedogapi.com/v1/images/search?';
  private DEFAULT_LIMIT: number = 8;

  constructor(private http: HttpClient) { }

  findAll(limit?: number, order?: LimitParams):
    Observable<IFakeDogs[]> {
      let params = new HttpParams();

      limit ? limit : (limit = this.DEFAULT_LIMIT);
      order ? order : (order = 'DESC');

      params.set('limit', limit).set("order", order);

      return this.http.get<IFakeDogs[]>(`${this.BASE_URL}/`, {
        params,
      })
    }
}
