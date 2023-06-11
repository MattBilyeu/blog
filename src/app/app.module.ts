import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ContentfulService } from './contentful.service';
import { HomeComponent } from './home/home.component';
import { ToHtmlPipe } from './to-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
    ToHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
