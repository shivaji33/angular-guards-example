import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostsService } from './posts.service';

@Injectable()
export class PostResolverService implements Resolve<any> {
  constructor(private postsService: PostsService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const postId = route.paramMap.get('postId');
    return of(this.postsService.getPost(+postId));
  }
}
