import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { WeatherComponent } from './components/weather/weather.component';

export const routes: Routes = [
    { path: '', component: SearchComponent},
    { path: 'results/:location', component: WeatherComponent},
];
