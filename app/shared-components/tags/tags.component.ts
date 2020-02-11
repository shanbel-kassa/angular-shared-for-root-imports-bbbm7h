import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { TagsState } from '../tags.state';
import { AddTag, RemoveTag } from '../tags.actions';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  @Select(TagsState.tags)
  tags$: Observable<string[]>;

  constructor(private store: Store) {}

  addTag(tag: string) {
    this.store.dispatch(new AddTag(tag));
  }

  removeTag(tag: string) {
    this.store.dispatch(new RemoveTag(tag));
  }

}