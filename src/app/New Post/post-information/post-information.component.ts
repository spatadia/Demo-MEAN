import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-post-information',
  templateUrl: './post-information.component.html',
  styleUrls: ['./post-information.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: InformationService) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
