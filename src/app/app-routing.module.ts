import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './modules/demo/components/notfound/notfound.component';
import { AppLayoutComponent } from './modules/layout/app.layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: 'dashboard',
                    component: AppLayoutComponent,
                    children: [
                        { path: '', loadChildren: () => import('./modules/demo/components/dashboard/dashboard.module').then((m) => m.DashboardModule) },
                        { path: 'suppliers', loadChildren: () => import('./modules/suppliers/suppliers.module').then((m) => m.SuppliersModule) },
                        { path: 'uikit', loadChildren: () => import('./modules/demo/components/uikit/uikit.module').then((m) => m.UIkitModule) },
                        { path: 'utilities', loadChildren: () => import('./modules/demo/components/utilities/utilities.module').then((m) => m.UtilitiesModule) },
                        { path: 'blocks', loadChildren: () => import('./modules/demo/components/primeblocks/primeblocks.module').then((m) => m.PrimeBlocksModule) },
                        { path: 'pages', loadChildren: () => import('./modules/demo/components/pages/pages.module').then((m) => m.PagesModule) },
                    ],
                },
                { path: 'landing', loadChildren: () => import('./modules/demo/components/landing/landing.module').then((m) => m.LandingModule) },
                { path: 'notfound', component: NotfoundComponent },
                { path: '', loadChildren: () => import('./modules/demo/components/auth/auth.module').then((m) => m.AuthModule) },
                { path: '**', redirectTo: '/notfound' },
            ],
            { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' },
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
