import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { InventoryManagementModule } from './components/inventory-management/inventory-management.module';
import { DemandManagementModule } from './components/demand-management/demand-management.module';

const routes: Routes = [
  
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'documentation', loadChildren: () => import('./components/documentation/documentation.module').then(m => m.DocumentationModule) },
            { path: 'pages', loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule) } ,
            { path: 'demand-management', loadChildren: () => import('./components/demand-management/demand-management.module').then(m => m.DemandManagementModule) },
            { path: 'inventory-management', loadChildren: () => import('./components//inventory-management/inventory-management.module').then(m => m.InventoryManagementModule) },
        
        ]
    },
  
    { path: 'notfound', component: NotfoundComponent },
    { path: '**', redirectTo: '/notfound' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
