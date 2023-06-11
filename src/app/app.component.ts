import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './contentful.service';
import { Observable, from } from 'rxjs';

import { Entry } from 'contentful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blog';
  entries: Entry<any>[] = [];
  blogPosts: Observable<any> | undefined;

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit() {
    const promise = this.contentfulService.getBlogPosts();
    this.blogPosts = from(promise)
    // const promise = this.contentfulService.getBlogPosts()
    //   .then(entries => this.entries = entries)
      }
  

  onLog() {
    console.log(this.entries[0])
  }
}