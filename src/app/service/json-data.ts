import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DestinationModel } from '../models/data-json';

@Injectable({
  providedIn: 'root',
})
export class JsonDataService {
  
  constructor(private http: HttpClient) {}

  getDestinations() {
    return this.http.get<DestinationModel>('assets/data.json')
  }
}
