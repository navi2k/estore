import { Routes } from '@angular/router';
import { Home } from './components/Home/home/home';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
{
    path:'home',
    component:Home
},
{
    path:'',
    component:Home
},
{
    path:"**",
    component:Notfound,
}


];
