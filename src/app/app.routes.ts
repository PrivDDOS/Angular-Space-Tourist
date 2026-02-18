import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { Destination } from './components/destination/destination';
import { Crew } from './components/crew/crew';
import { Technology } from './components/technology/technology';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'destination',
        component: Destination,
    },
    {
        path: 'crew',
        component: Crew
    },
    {
        path: 'technology',
        component: Technology
    }
];
