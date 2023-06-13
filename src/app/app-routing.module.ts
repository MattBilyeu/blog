import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path: 'feed', component: FeedComponent, pathMatch: 'full'},
  {path: ':id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
