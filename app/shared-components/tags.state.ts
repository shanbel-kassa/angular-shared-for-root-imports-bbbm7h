import { State, Action, Selector, StateContext } from '@ngxs/store';
import { AddTag, RemoveTag } from './tags.actions';

export interface TagsStateModel {
  tags: string[];
}

@State<TagsStateModel>({
  name: 'tags',
  defaults: {
    tags: []
  }
})
export class TagsState {

  constructor() {
    console.log('constructor TagsState');
  }

  @Selector()
  static tags(state: TagsStateModel) {
    return state.tags;
  }

  @Action(AddTag)
  addTag(sc: StateContext<TagsStateModel>, action: AddTag) {
    console.log('TagsState.addTag:', action.tag);
    const state = sc.getState();
    sc.setState({
      tags: [...state.tags, action.tag]
    });
  }

  @Action(RemoveTag)
  removeTag(sc: StateContext<TagsStateModel>, action: AddTag) {
    console.log('TagsState.removeTag:', action.tag);
    const state = sc.getState();
    sc.setState({
      tags: [...state.tags.filter(t => t !== action.tag)]
    });
    
  }

}
