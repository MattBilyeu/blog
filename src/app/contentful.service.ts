import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'd9e6gx7fskz3',
  accessToken:
    'Uhbufe-W1kNRMzZVJgM9zSio3jMwUTPMf2YlkA4w9Q8',

  contentTypeIds: {
    blogPost: 'blogPost',
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getBlogPosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.blogPost
    }, query)).then(res => res.items)

    // return this.client.getEntries(Object.assign({
    //   content_type: CONFIG.contentTypeIds.blogPost
    // }, query)).then(res => res.items);
  }
}