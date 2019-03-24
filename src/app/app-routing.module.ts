import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guard/auth.guard";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./layout/layout.module#LayoutModule",
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
