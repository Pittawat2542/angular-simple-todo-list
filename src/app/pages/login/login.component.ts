import { Component, OnInit } from "@angular/core";

import { FormGroup, FormBuilder } from "@angular/forms";

import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loggedIn: boolean = false;
  form: FormGroup;
  email: any = '';
  password: any = '';

  constructor(public router: Router, public formBuilder: FormBuilder) {
    this.loggedIn = !!localStorage.getItem("auth");
    this.form = this.formBuilder.group({
      email: [""],
      password: [""]
    });
  }

  ngOnInit() {}

  login() {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        status: true
      })
    );
    this.router.navigate([""]);
  }

  logout() {
    localStorage.removeItem("auth");
    this.router.navigate(["login"]);
  }
}
