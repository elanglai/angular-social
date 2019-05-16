import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './containers/posts/posts.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';
import { PostsResolver } from './resolvers/posts-resolver';
import { ProfileResolver } from './resolvers/profile-resolver';

@NgModule({
  declarations: [PostsComponent, ProfileComponent, PostListComponent, PostItemComponent, ProfileItemComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  providers: [
    PostsResolver,
    ProfileResolver
  ]
})
export class PostsModule { }
