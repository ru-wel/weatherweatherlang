import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  public weatherData: any;

  constructor(private weatherService: SearchService, private router: Router){}

  searchWeather(form: NgForm){
    if(form.value.location){
      // this.weatherService.getCurrentWeather(form.value.location).subscribe((data) => {
      //   this.weatherData = data;
      // })
      this.router.navigate(['/results', form.value.location]);
    } else { console.log('Please enter a location') }
  }
}
