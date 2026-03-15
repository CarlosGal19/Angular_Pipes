import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Basic pipes',
    loadComponent:() => import('./pages/basic-page/basic-page'),
  },
  {
    path: 'numeric',
    title: 'Numeric pipes',
    loadComponent:() => import('./pages/numbers-page/numbers-page'),
  },
  {
    path: 'custom',
    title: 'Custom pipes',
    loadComponent:() => import('./pages/custom-page/custom-page'),
  },
  {
    path: 'uncommon',
    title: 'Uncommon pipes',
    loadComponent:() => import('./pages/uncommon-page/uncommon-page'),
  },
  {
    path: '**',
    redirectTo: 'basic'
  }
];
