class Todo {
  //todo object should have an id and text field

  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = new Date().toISOString();
    this.text = todoText;
  }
}

export default Todo;
