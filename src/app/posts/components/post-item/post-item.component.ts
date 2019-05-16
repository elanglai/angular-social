import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  template: `
    <!-- The row and the col make sure the content is always centered -->
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <!-- The card is where the message is shown -->
        <div class="card">
          <div class="card-body">
            <!-- We use the Bootstrap 'media' component to show an avatar with content -->
            <div class="media">
              <img class="avatar mr-3 rounded" [attr.src]="post?.profile?.avatar">
              <div class="media-body">
                <!-- The full name of the author is used to navigate to the post detail -->
                <h5>
                  <a [routerLink]="post?.profile?.id"> {{post?.profile?.fullName}} </a>
                  <span class="date float-right text-muted">
                    {{ post.date }}
                  </span>
                </h5>
                <!-- The text of the post is shown in a simple paragraph tag-->
                <p>{{post?.text}}</p>
              </div>
            </div> <!-- End media -->
          </div>
        </div> <!-- End card -->
      </div>
    </div> <!-- End row-->
  `,
 styles: [`
  img.avatar {
    height: 60px;
    width: 60px;
  }
  span.date {
    font-size: small;
  }
`],

})
export class PostItemComponent implements OnInit {

  constructor() { }
  
  @Input() 
  post: any;

  ngOnInit() {
  }

}
