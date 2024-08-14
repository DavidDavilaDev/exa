import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'student-list',
    pathMatch: 'full'
  },
  {
    path: 'student-register',
    loadChildren: () => import('./register/student-register/student-register.module').then( m => m.StudentRegisterPageModule)
  },
  {
    path: 'student-list',
    loadChildren: () => import('./list/student-list/student-list.module').then( m => m.StudentListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
