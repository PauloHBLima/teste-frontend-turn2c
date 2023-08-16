import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LimitParams } from './types/DogsParams.type';
import { IFakeDogs } from '../components/interfaces/FakeDogs.interface';
import { Head, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsApiService {
  private BASE_URL: string = 'https://api.thedogapi.com/v1/images/search';
  private DEFAULT_LIMIT: number = 8;

  headers: HttpHeaders = new HttpHeaders()
  api_token: string = 'live_hbKNXq1vYHowMmSfSAF0fLo5yoSVR9v5W7fi9DrYwkS8obFK4zY8UxhoM7mc0jqw'

  constructor(private http: HttpClient) { }

  findAll(page: number, limit?: number, order?: LimitParams):

  Observable<IFakeDogs[]> {
    let params = new HttpParams();

    console.log(limit)
    console.log(order)

      limit ? limit : (limit = this.DEFAULT_LIMIT);
      order ? order : (order = 'DESC');

      params.append('limit', limit);
      params.append('order', order);

      return this.http.get<IFakeDogs[]>(`${this.BASE_URL}?limit=${limit}&order=${8}page=${page -1}`, {
        headers: this.headers.append('x-api-key', this.api_token)
      },)
    }
}

/* this.headers.append('x-api-key', this.api_token
 */
