import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JsonDataService } from '../../service/json-data';
import { DesJson } from '../../models/data-json';

@Component({
  selector: 'app-destination',
  imports: [RouterLink, CommonModule],
  templateUrl: './destination.html',
  styleUrl: './destination.css',
})
export class Destination implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

    destinationData = inject(JsonDataService);
    destinationArray: DesJson[] = [];
    selectedDestination: DesJson | undefined;
    isLoading = true;
    mobileMenu = false;


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

        this.isLoading = false;
        this.cdr.detectChanges()

      })
    }

    selectDestinationData(destination: DesJson) {
      this.selectedDestination = destination;
    }

    toggleMobileMenu(): void {
    this.mobileMenu = !this.mobileMenu
    }

}
