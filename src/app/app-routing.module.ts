import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
