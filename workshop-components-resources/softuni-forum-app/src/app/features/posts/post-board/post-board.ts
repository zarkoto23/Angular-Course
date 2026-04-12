import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../../core/services';
import { Post } from '../../../models';
import { Observable, Subscription } from 'rxjs';
import { PostItem } from '../post-item/post-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-board',
  imports: [PostItem, CommonModule],
  templateUrl: './post-board.html',
  styleUrl: './post-board.css',
})
export class PostBoard {
  subscriptions: Subscription[] = [];

  posts$: Observable<Post[]>;


  constructor(private postService: PostsService) {
    this.posts$ = this.postService.getLatestPosts();
  }
}
