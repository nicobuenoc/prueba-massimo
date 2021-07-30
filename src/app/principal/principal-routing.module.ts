import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from '../components/page-one/page-one.component';
import { PageTwoComponent } from '../components/page-two/page-two.component';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
      { path: 'ships', loadChildren: () => import(`../ships/ships.module`).then(m => m.ShipsModule)},
      { path: 'pageOne', component: PageOneComponent },
      { path: 'pageTwo', component: PageTwoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalComponentsRoutingModule {}
