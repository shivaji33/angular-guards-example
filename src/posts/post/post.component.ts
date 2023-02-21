import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PostComponent implements OnInit {
  post: any = {};
  status: 'Active' | 'Inactive' | null;
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    // this.getParams();
    this.getQueryParams();
  }
  getParams() {
    this.route.params.subscribe((res:any) => {
      const {postId} = res;
      this.post = this.postsService.getPost(+postId);
    });
  }

  getQueryParams() {
     this.route.queryParams.subscribe((res:any) => {
       const {userState} = res;
       this.status = userState;
    });

    this.route.data.subscribe(res => {
      const {post} = res;
      this.post = post;
    })
  }
}