import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(private cdr: ChangeDetectorRef) {}

  crewData = inject(JsonDataService)
  crewArray: CrewJson[] = [];
  selectedCrew: CrewJson | undefined;
  isLoading = true;

  // Crew Image
  currentPng = 0;
  pngSlide: any;

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
      this.cdr.detectChanges()

      this.slider()
    })
  }

  dotsSelect(crew: CrewJson) {
    this.selectedCrew = crew
  }


  // Auto Crew Content Slider
  slider() {
    this.pngSlide = setInterval(() => {
      this.currentPng++;

      if(this.currentPng >= this.crewArray.length) {
        this.currentPng = 0
      }

      this.selectedCrew = this.crewArray[this.currentPng];
      this.cdr.detectChanges();

    }, 10000)
  }

}
