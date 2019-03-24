import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  todos: string[];
  tempTodos: any;

  constructor() {
    if (localStorage.getItem("todos")) {
      this.todos = JSON.parse(localStorage.getItem("todos"));
    }
  }

  ngOnInit() {}

  done(id) {
    this.tempTodos = JSON.parse(localStorage.getItem('todos'));
    this.tempTodos = this.tempTodos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(this.tempTodos));
    this.todos = this.tempTodos;
  }
}
