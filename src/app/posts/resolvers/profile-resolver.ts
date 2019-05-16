import { Injectable } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ProfileResolver implements Resolve<any>{
    
    constructor( private postsService: PostsService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.postsService.getProfile(route.params['profileId']);
    }
}
