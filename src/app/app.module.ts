import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ContentfulService } from './contentful.service';
import { HomeComponent } from './home/home.component';
import { ToHtmlPipe } from './to-html.pipe';
import { FeedComponent } from './feed/feed.component';
import { BlogredirectComponent } from './blogredirect/blogredirect.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
    ToHtmlPipe,
    FeedComponent,
    BlogredirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
