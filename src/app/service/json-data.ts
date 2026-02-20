import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrewModel, DestinationModel } from '../models/data-json';

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
}
