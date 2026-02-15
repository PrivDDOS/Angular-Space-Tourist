import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JsonDataService } from '../../service/json-data';
import { DesJson, DestinationModel } from '../../models/data-json';

@Component({
  selector: 'app-destination',
  imports: [RouterLink, CommonModule],
  templateUrl: './destination.html',
  styleUrl: './destination.css',
})
export class Destination implements OnInit {

    destinationData = inject(JsonDataService);
    destinationArray: DesJson[] = [];
    selectedDestination: DesJson | undefined


    ngOnInit(): void {
      this.getDestinationData()
    } 
    
    //* Read the data inside data.json file
    getDestinationData() {
      this.destinationData.getDestinations()
      .subscribe(res => {
        this.destinationArray = res.destinations;

        if(this.destinationArray.length > 0) {
          this.selectedDestination = this.destinationArray[0]
        }
      })
    }

    selectDestinationData(destination: DesJson) {
      this.selectedDestination = destination;
    }

    

}
