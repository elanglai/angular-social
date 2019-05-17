import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { UiService } from '../../../ui/services/ui.service';

//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { parseSelectorToR3Selector } from '@angular/compiler/src/core';

@Component({
  selector: 'app-posts',
  template: `
    <app-post-list [posts]="$posts | async"></app-post-list>
  `,
  styles: []
})
export class PostsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private uiService: UiService) { }

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
      .pipe(map( data => data['posts']), map(posts => this.setMetaData(posts)), map(posts => posts['items']));
  }

  setMetaData(posts) {
    const { itemsPerPage, itemsTotal } = posts['counters'];
    const description = `Showing ${itemsPerPage} of ${itemsTotal} posts`;
    const title = 'Posts List';
    this.uiService.setMetaData( { description, title} );
    return posts;
  }

}
