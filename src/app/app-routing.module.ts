import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { FeedComponent } from './feed/feed.component';
import { BlogredirectComponent } from './blogredirect/blogredirect.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path: 'feed', component: FeedComponent, pathMatch: 'full'},
  {path: '#/feed', component: FeedComponent},
  {path: ':id', component: PostComponent},
  {path: '**', component: BlogredirectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
