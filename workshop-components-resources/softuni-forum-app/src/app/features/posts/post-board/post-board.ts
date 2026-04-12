import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../../core/services';
import { Post } from '../../../models';
import { Subscription } from 'rxjs';
import { PostItem } from "../post-item/post-item";

@Component({
  selector: 'app-post-board',
  imports: [PostItem],
  templateUrl: './post-board.html',
  styleUrl: './post-board.css',
})
export class PostBoard implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  posts: Post[] = [];

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.postService.getLatestPosts().subscribe((posts) => {
        this.posts = posts;

        console.log('oninit posts');
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
