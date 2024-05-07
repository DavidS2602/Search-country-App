import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('../app/shared/pages/home-page/home-page.component')
  },
  {
    path: 'about',
    loadComponent: () => import('../app/shared/pages/about-page/about-page.component')
  },
  {
    path: 'contact',
    loadComponent: () => import('../app/shared/pages/contact-page/contact-page.component')
  }
];
