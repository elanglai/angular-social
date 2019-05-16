import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-item',
  template: `
  <div class="row">
  <div class="col-md-8 offset-md-2">
    <div class="card mb-3" *ngFor="let post of profile.posts">
      <div class="card-body">
        <div class="media">
          <img class="avatar mr-3 rounded" [attr.src]="profile?.avatar">
          <div class="media-body">
            <h5>
              <a [routerLink]="profile?.id"> {{profile?.fullName}} </a>
              <span class="date float-right text-muted">
 
              </span>
            </h5>
            <p>{{post?.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class ProfileItemComponent implements OnInit {

  constructor() { }

  @Input()
  profile: any;

  ngOnInit() {
  }

}
