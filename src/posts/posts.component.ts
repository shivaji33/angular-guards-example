import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PostsComponent implements OnInit {
  posts:any[] = [];
  constructor(private postsService: PostsService, private router: Router, private userService: UserService) {
    this.posts = this.postsService.getPosts();
   }

  ngOnInit() {
  }
  routeToPost({id}) {
    this.router.navigate(['/posts', id], {
      queryParams: {userState: +id % 2 === 0 ? 'Active': 'InActive'}
    });
  }

  logout() {
    this.userService.logout();
  }

  addPost() {
    this.router.navigate(['add-post']);
  }
}