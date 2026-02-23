import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { JsonDataService } from '../../service/json-data';
import { TechJson } from '../../models/data-json';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technology',
  imports: [RouterLink, CommonModule],
  templateUrl: './technology.html',
  styleUrl: './technology.css',
})
export class Technology implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  techData = inject(JsonDataService)
  techArray: TechJson[] = [];
  selectedTech: TechJson | undefined;
  isLoading = true

  ngOnInit(): void {
    this.getTechData()
  }

  getTechData() {
    this.techData.getTechs()
    .subscribe(res => {
      this.techArray = res.technology
      
      if(this.techArray.length > 0) {
        this.selectedTech = this.techArray[0]
      }

      this.isLoading = false
      this.cdr.detectChanges()

    })
  }

  ulSelect(tech: TechJson) {
    this.selectedTech = tech
  }

}
