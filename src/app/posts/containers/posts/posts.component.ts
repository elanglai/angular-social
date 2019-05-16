import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  template: `
    <app-post-list [posts]="$posts | async"></app-post-list>
  `,
  styles: []
})
export class PostsComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  // public posts = [];
  public $posts = null;

  ngOnInit() {
    // this.postsService.getPosts()
    //   .pipe(map(res => res['items']))
    //   .subscribe( (result: any) => this.posts = result)
    // this.route.data
    //   .pipe(map( data => data['posts']), map(posts => posts['items']))
    //   .subscribe( result => this.posts = result);

    this.$posts = this.route.data
      .pipe(map( data => data['posts']), map(posts => posts['items']));
  }

}
