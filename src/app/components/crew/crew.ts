import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JsonDataService } from '../../service/json-data';
import { CrewJson } from '../../models/data-json';

@Component({
  selector: 'app-crew',
  imports: [RouterLink, CommonModule],
  templateUrl: './crew.html',
  styleUrl: './crew.css',
})
export class Crew implements OnInit {

  crewData = inject(JsonDataService)
  crewArray: CrewJson[] = [];
  selectedCrew: CrewJson | undefined
  isLoading = true

  ngOnInit(): void {
    this.getCrewData()
  }

  getCrewData() {
    this.crewData.getCrews()
    .subscribe(res => {
      this.crewArray = res.crew;

      if(this.crewArray.length > 0) {
        this.selectedCrew = this.crewArray[0]
      }

      this.isLoading = false

    })
  }

  dotsSelect(crew: CrewJson) {
    this.selectedCrew = crew
  }

}
