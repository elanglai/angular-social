import { Injectable } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Resolve } from '@angular/router';

@Injectable()
export class PostsResolver implements Resolve<any>{
    
    constructor( private postsService: PostsService) {}

    resolve() {
        return this.postsService.getPosts();
    }
}
