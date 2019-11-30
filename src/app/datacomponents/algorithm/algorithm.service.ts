import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAlgorithm } from './algorithm.model';

@Injectable({
  providedIn: 'root'
})

export class AlgorithmService {
  API_KEY = 'YOUR_API_KEY';

  private _url = '';

  constructor(private httpClient: HttpClient) { }

  getAlgorithm(): Observable<IAlgorithm[]> {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get<IAlgorithm[]>(this._url);
  }
}
