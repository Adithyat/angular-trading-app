import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from'./home/home.component';
import { AssetsComponent } from'./assets/assets.component';
import { DetailsComponent } from'./details/details.component';


const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'assets-component', component: AssetsComponent },
  { path: 'details-component', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
