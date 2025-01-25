import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  public weatherData: any;

  constructor(private weatherService: SearchService){}

  searchWeather(form: NgForm){
    if(form.value.location){
      this.weatherService.getCurrentWeather(form.value.location).subscribe((data) => {
        this.weatherData = data;
      })
    }
  }
}
