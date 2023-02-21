import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './Router';
import { PostsService } from './posts.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { NoAuthGuard } from './no-auth.guard';
import { PostResolverService } from './post-resolver.service';
import { InputDataGuard } from './input-data.guard';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    PostsService,
    UserService,
    AuthGuard,
    NoAuthGuard,
    PostResolverService,
    InputDataGuard,
    importProvidersFrom(RouterModule.forRoot(APP_ROUTES))
  ]
});
