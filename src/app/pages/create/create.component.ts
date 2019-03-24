import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

import v4 from 'uuid';

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  //title: any = "";
  //description: any = "";
  todos;

  constructor(public router: Router, public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: [""],
      description: [""]
    });
  }

  ngOnInit() {}

  createTodo() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.todos.push({
      id: v4(),
      title: this.form.controls['title'].value,
      description: this.form.controls['description'].value
    });
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.router.navigate([""]);
  }
}
