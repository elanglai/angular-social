import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { UiService } from '../../../ui/services/ui.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  template: `
    <app-profile-item [profile]="$profile | async" > </app-profile-item>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute, private uiService: UiService) { }

  public profile = { id: null};
  public $profile = null;

  ngOnInit() {
    // // We must subscribe to the Observable.  The arrow function will get triggered on param change
    // this.route.params.subscribe( resource => {
    //   this.profile.id = `profileId = ${resource['profileId']}`
    // });
    // // We should implment the onDestory event and take care on unsubcribing on the event.

    // this.postsService.getProfile(this.route.snapshot.params['profileId'])
    //   .subscribe((result: any) => { this.profile = result} );

      // this.route.data
      //   .pipe(map (data => data['profile']))
      //   .subscribe(result => this.profile = result);

      this.$profile = this.route.data
        .pipe(map (data => data['profile']), map(profile => this.setMetaData(profile)));
    }

    setMetaData(profile) {
      const { fullName, posts } = profile;
      const description = `${fullName} posted ${posts.length} posts`;
      const title = `Possts by ${fullName}`;
      this.uiService.setMetaData( { description, title} );
      return profile;
    }
  
}
