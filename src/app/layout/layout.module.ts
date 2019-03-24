import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "../app.material.module";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { CreateComponent } from "../pages/create/create.component";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "create", component: CreateComponent }
    ]
  }
];

@NgModule({
  declarations: [HomeComponent, CreateComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule {}
