import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { Destination } from './components/destination/destination';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'destination',
        component: Destination,
    }
];
