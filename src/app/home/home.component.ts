import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  entries: any[] = [];

  constructor(private contentfulService: ContentfulService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.contentfulService.getEntries()
      .then(entries => this.entries = entries)
  }

  onNavigate(id: string) {
    this.router.navigate([id], {relativeTo: this.route})
  }
}