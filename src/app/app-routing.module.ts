import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { GitBasicComponent } from './git-basic/git-basic.component';
import { GitDeployComponent } from './git-deploy/git-deploy.component';

const routes: Routes = [

  {
    path: 'git-deploy',
    component: GitDeployComponent
  },
  {
    path: 'git-basic',
    component: GitBasicComponent
  },
  {
    path: '',
    component: DashboardComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'Git',
    component: HeroesComponent
  },

  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }

];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
