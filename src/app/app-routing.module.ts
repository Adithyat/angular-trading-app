import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent,AssetsComponent,DetailsComponent } from './components';


const routes: Routes = [

  { path: 'home-component', component: HomeComponent },
  { path: 'assets-component', component: AssetsComponent },
  { path: 'details-component', component: DetailsComponent },
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
