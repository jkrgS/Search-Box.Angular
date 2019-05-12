import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/api/locations.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  search = ''; // user input
  searchRows: '6'; // returned length of rows from endpoint
  noResult = false; // no results trigger
  results: string[]; // results that returned from endpoint

  constructor(private locationsApiService: LocationsService) {}

  ngOnInit() {
    this.getLocations();
  }

  // getting location data (!) important => the provided endpoint is not stable (!), sometimes not returning any data
  getLocations() {
    if (this.search.length > 1) {
      const params = new HttpParams()
        .set('solrRows', this.searchRows)
        .set('solrTerm', this.search);

      this.locationsApiService.getLocations(params).subscribe(res => {
        this.results = [];

        // filling used data variable with returned data from endpoint
        for (const locations of res['results'].docs) {
          this.results.push(locations.name + ', ' + locations.country);
        }
      });
    } else {
      this.results = [];
    }
  }

  // when no results found
  typeaheadNoResults(event: boolean): void {
    this.noResult = event;
  }
}
