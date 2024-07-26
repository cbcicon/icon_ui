import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];
    constructor(public layoutService: LayoutService) { }
    ngOnInit() {
        this.model = [
            {
                label: 'Main',
                icon: 'bi bi-columns-gap mx-2',
                items: [
                    { label: 'Dashboard', icon: 'dashboard-icon', routerLink: ['/'] }
                ]
            },
            {
                label: 'Demand Management',
                icon:"bi bi-bar-chart mx-2",
                collapsed: true,
                items: [
                    { label: 'Master Demand Plan', routerLink: ['/demand-management/master-demand-plan'] },
                    { label: 'Forecast', routerLink: ['/demand-management/forecast'] },
                    { label: 'New Study', routerLink: ['/demand-management/new-study'] },
                    { label: 'Live Study', routerLink: ['/pages/empty'] },
                    { label: 'Configurations', routerLink: ['/pages/empty'] }
                ]
            },
            {
                label: 'Resource Planning',
                icon: 'bi bi-people-fill mx-2',
                items: [
                    { label: 'Person hours', routerLink: ['/'] },
                    { label: 'Storage', icon: 'truck-icon', routerLink: ['/'] },
                ]
            },
            {
                label: 'Revenue Management',
                icon: 'bi bi-currency-dollar mx-2',
                items: [
                    { label: 'Revenue', routerLink: ['/'] },
                    { label: 'Configurations', icon: 'truck-icon', routerLink: ['/'] },
                ]
            },
            {
                label: 'Inventory Management',
                icon: 'bi bi-clipboard-data',
                items: [
                    { label: 'Inventory', routerLink: ['/inventory-management/order-list'] },
                    { label: 'Purchase Orders', routerLink: ['/inventory-management/inventory-purchase-order'] },
                    { label: 'Saftey Stocks', routerLink: ['/inventory-management/safety-stock'] },
                    { label: 'Scrap', routerLink: ['/inventory-management/scrap'] },
                    { label: 'Configurations', routerLink: ['/inventory-management/inventory-configuration'] }
                ]
            },
            {
                label: 'MPS',
                icon: 'bi bi-clipboard-data mx-2',
                items: [{ label: 'Schedule', icon: 'setting-icon', routerLink: ['/'] }]
            },
            {
                label: 'What-if Scenarios',
                icon:'bi bi-question-circle mx-2',
                items: [
                    { label: 'Kit Reports', icon: 'setting-icon', routerLink: ['/'] }
                ]
            },
            { label: 'Analytics', icon: 'bi bi-graph-up-arrow mx-2', routerLink: ['/'] },

            { label: 'Report', icon:  'bi bi-file-spreadsheet mx-2', routerLink: ['/'] },

            { label: 'Sign Out', icon: 'signout-icon', routerLink: ['/'] }
        ];
    }
}