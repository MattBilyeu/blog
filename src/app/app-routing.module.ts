import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path: '', component: AppComponent, pathMatch: 'full'},
  // {path: '/:id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
