export class AddTag {
  static readonly type = '[Tag] Add';
  constructor(public tag: string) {}
}

export class RemoveTag {
  static readonly type = '[Tag] Remove';
  constructor(public tag: string) {}
}