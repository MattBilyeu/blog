import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../contentful.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  entries: Entry<any>[] = [];
  safeXML: SafeHtml;

  constructor(private contentfulService: ContentfulService,
              private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.contentfulService.getEntries()
      .then(entries => {
        this.entries = entries;
        this.safeXML = this.generateRssXml()
      });
  }

  generateRssXml(): SafeHtml {
    const rssContentPreamble = "<?xml version='1.0' encoding='UTF-8'?><rss version='2.0'><channel><title>Sound Faith Consulting Blog</title><link>https://soundfaithconsulting-development.netlify.app</link><description>The finger on the pulse of Christian philosophy, theology, and apologetics.</description><language>en-us</language>"
    let rssContentMain: string = ''
    for(let i = 0; i<this.entries.length; i++) {
      const baseUrl = 'https://soundfaithconsulting-development.netlify.app/blog/';
      const title: string = this.entries[i].fields['title'].toString();
      const link: string = baseUrl.concat(this.entries[i].sys.id);
      const description: string = this.entries[i].fields['slug'].toString();
      rssContentMain = rssContentMain.concat("<item>").concat(title).concat("<link>").concat(link).concat("</link>").concat("<description>")
        .concat(description).concat("</description></item>")
    }
    const combined = rssContentPreamble.concat(rssContentMain);
    return this.sanitizer.bypassSecurityTrustHtml(combined)
  }
}
