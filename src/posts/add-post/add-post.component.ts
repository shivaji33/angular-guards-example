import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  standalone: true,
  imports: [FormsModule, RouterModule],
})
export class AddPostComponent implements OnInit {
  postData: any = {};
  @ViewChild('f') formElm: NgForm;
  constructor() {}

  ngOnInit() {}

  onSubmit(f: NgForm) {

  }

  canExit(): boolean {
    if (window.confirm('Are you sure')) {
      return true;
    }
    return false;
  }
}
