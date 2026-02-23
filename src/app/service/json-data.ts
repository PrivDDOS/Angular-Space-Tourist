import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrewModel, DestinationModel, TechModel } from '../models/data-json';

@Injectable({
  providedIn: 'root',
})
export class JsonDataService {
  
  constructor(private http: HttpClient) {}

  getDestinations() {
    return this.http.get<DestinationModel>('assets/data.json')
  }

  getCrews() {
    return this.http.get<CrewModel>('assets/data.json')
  }

  getTechs() {
    return this.http.get<TechModel>('assets/data.json')
  }
}
