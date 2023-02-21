import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { InputDataGuard } from './input-data.guard';
import { LoginComponent } from './login/login.component';
import { App } from './main';
import { NoAuthGuard } from './no-auth.guard';
import { PostResolverService } from './post-resolver.service';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: '',
    component: App,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'add-post',
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'posts/:postId',
        component: PostComponent,
        resolve: {post: PostResolverService},
      },
      {
        path: 'add-post',
        component: AddPostComponent,
        canDeactivate: [InputDataGuard]
      },
    ],
  },
];
