import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DestinationModel } from '../models/data-json';

@Injectable({
  providedIn: 'root',
})
export class JsonDataService {
  
  constructor(private http: HttpClient) {}

  getDestinations():Observable<DestinationModel> {
    return this.http.get<DestinationModel>('assets/data.json')
  }
}
