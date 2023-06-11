import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blog';
  entries: any[] = [];
  mobileNavHidden: boolean = true;

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.contentfulService.getEntries()
      .then(entries => this.entries = entries)
  }

  toggleMobileNav() {
    this.mobileNavHidden = !this.mobileNavHidden;
    console.log('Hide Nav? ', this.mobileNavHidden);
  }
}
