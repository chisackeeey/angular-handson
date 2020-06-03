export class Todo {
  id: number;
  title: string;
  done: boolean;

  constructor() {
    this.id = 0;
    this.title = '';
    this.done = false;
  }
}
