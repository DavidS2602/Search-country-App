import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full'
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
      },
      {
        path: '**',
        redirectTo: 'by-capital',
        pathMatch: 'full'
      }
    ]
  }
];
