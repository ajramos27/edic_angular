import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISpecies } from './species.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SpeciesService {

  API_KEY = 'YOUR_API_KEY';

  private _url = 'http://api.gbif.org/v1/species/suggest?datasetKey=d7dddbf4-2cf0-4f39-9b2a-bb099caae36c&q=Puma%20con';

  constructor(private httpClient: HttpClient) { }

  getSpecies(): Observable<ISpecies[]> {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get<ISpecies[]>(this._url);
  }
}

