import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddPostComponent } from './posts/add-post/add-post.component';

@Injectable()
export class InputDataGuard implements CanDeactivate<AddPostComponent> {

canDeactivate(component: AddPostComponent,currentRoute: ActivatedRouteSnapshot,currentState: RouterStateSnapshot,nextState: RouterStateSnapshot): boolean|UrlTree|Observable<boolean|UrlTree>|Promise<boolean|UrlTree> {
  return component.formElm.touched ? component.canExit() : true;
}
  
}
