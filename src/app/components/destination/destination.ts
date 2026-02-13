import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JsonDataService } from '../../service/json-data';
import { DesJson, DestinationModel } from '../../models/data-json';

@Component({
  selector: 'app-destination',
  imports: [RouterLink],
  templateUrl: './destination.html',
  styleUrl: './destination.css',
})
export class Destination implements OnInit {

    destinationData = inject(JsonDataService);
    destinationArray: DesJson[] = [];
    selectedDestination!: DesJson


    ngOnInit(): void {
      this.getDestinationData()
    } 
    
    //* Read the data inside data.json file
    getDestinationData() {
      this.destinationData.getDestinations().subscribe((res:DestinationModel) => {
        this.destinationArray = res.destinations;

        this.selectedDestination = this.destinationArray[0]
        console.log(this.destinationArray)
      })
    }

    selectDestinationData(destination: DesJson) {
      this.selectedDestination = destination;
    }

    

}
