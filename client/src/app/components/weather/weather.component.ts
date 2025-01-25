import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})

export class WeatherComponent implements OnInit{
  location: string = '';
  public weatherData: any;

  constructor(private route: ActivatedRoute, private searchService: SearchService){}

  ngOnInit(){
    this.location = this.route.snapshot.paramMap.get('location') || '';
    this.searchService.getCurrentWeather(this.location).subscribe((data) => {
        this.weatherData = data;
      })
  }
}
