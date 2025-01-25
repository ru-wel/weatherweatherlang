import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  private apiUrl = 'http://localhost:3000/api/weather';

  constructor(private http: HttpClient) {}

  getCurrentWeather(location: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/${location}`)
  }
}
