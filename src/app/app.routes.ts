import { Routes } from '@angular/router';
import { ReviewPage } from '../page/review-page/review-page';
import { MainLayout } from '../layout/main-layout/main-layout';
import { Header } from '../layout/header/header';
import { DashboardPage } from '../page/dashboard-page/dashboard-page';
export const routes: Routes = [
    {
        path: '',
        component:MainLayout,
        children: [
            {path:'',component:ReviewPage},
            {path:'dashboard',loadComponent : () => import('../page/dashboard-page/dashboard-page').then(m => m.DashboardPage)},
        ]
    }
];
