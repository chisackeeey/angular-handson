export class Todo {
  id?: number;
  title?: string;
  done?: boolean;

  constructor(init?: Partial<Todo>) {
    Object.assign(this, init);
  }
}
