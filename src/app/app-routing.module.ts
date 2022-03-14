import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyUserComponent } from './body-user/body-user.component';
import { BodyRepoComponent } from './body-repo/body-repo.component';
import { BodyStarComponent } from './body-star/body-star.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';


const routes: Routes = [
  {path:'user', component: BodyUserComponent},
  {path:'repos', component: BodyRepoComponent},
  {path:'star', component: BodyStarComponent},
  { path: '', redirectTo:"/user", pathMatch:"full"},
  {path: '**', component: WrongRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 