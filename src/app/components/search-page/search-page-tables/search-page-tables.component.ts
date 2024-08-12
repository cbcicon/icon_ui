import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page-tables',
  templateUrl: './search-page-tables.component.html',
  styleUrls:['./search-page-tables.component.scss']
})
export class SearchPageTablesComponent {

  searchQuery:any

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'];
       
    });
    
  }

}
