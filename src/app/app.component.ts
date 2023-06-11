import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './contentful.service';

import { Entry } from 'contentful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blog';
  entries: any[] = [];

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.contentfulService.getEntries()
      .then(entries => this.entries = entries)
  }

  onLog(index: number) {
    console.log(this.entries[index].fields.content)
  }
}
