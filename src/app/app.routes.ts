import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('@shared/pages/home-page/home-page.component')
  },
  {
    path: 'about',
    loadComponent: () => import('@shared/pages/about-page/about-page.component')
  },
  {
    path: 'contact',
    loadComponent: () => import('@shared/pages/contact-page/contact-page.component')
  },
  {
    path: 'countries',
    children:[
      {
        path: 'by-capital',
        loadComponent: () => import('@countries/pages/by-capital-page/by-capital-page.component')
      },
      {
        path: 'by-region',
        loadComponent: () => import('@countries/pages/by-region-page/by-region-page.component')
      },
      {
        path: 'by-country',
        loadComponent: () => import('@countries/pages/by-country-page/by-country-page.component')
      },
      {
        path: 'by/:id',
        loadComponent: () => import('@countries/pages/country-page/country-page.component')
      }
    ]
  }
];
