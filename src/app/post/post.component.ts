import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { ToHtmlPipe } from '../to-html.pipe';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  entry;
  publishedDate: string;
  entries: any[] = [];
  postId: string;

  constructor(private contentfulService: ContentfulService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    const params = this.route.params.subscribe(
      (params: Params) => {
        this.postId = params['id']
      }
    );
    this.contentfulService.getEntries()
      .then(entries => {
        this.entries = entries;
        for(let i = 0; i < entries.length; i++) {
          if (this.entries[i].sys.id === this.postId) {
            this.entry = this.entries[i];
          }
        }
    });
  }

  onReturn() {
    this.router.navigate([''])
  }
}
