import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  locationsUrl = environment.locationsApiUrl;

  constructor(private http: HttpClient) {}

  getLocations(params: HttpParams): Observable<any[]> {
    return this.http.get<any[]>(this.locationsUrl, { params: params });
  }
}
