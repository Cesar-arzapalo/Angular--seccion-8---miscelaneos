import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';


export const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    // tslint:disable-next-line: max-line-length
    {path: 'usuario/:id', component: UsuarioComponent, loadChildren: () => import('../app/components/usuario/usuario.module').then( m  => m.UsuarioModule)},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
