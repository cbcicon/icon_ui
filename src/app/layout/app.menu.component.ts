import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { PrimeIcons, MenuItem } from 'primeng/api';
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
                icon: 'bar-chart',
                items: [
                    { label: 'Dashboard', icon: 'dashboard-icon', routerLink: ['/'] }
                ]
            },
            {
                label: 'Demand Management',
                collapsed: true,
                items: [
                    { label: 'Forecast', routerLink: ['/demand-management/order-list'] },
                    { label: 'New Study', routerLink: ['/demand-management/new-study'] },
                    { label: 'Live Study', routerLink: ['/pages/empty'] }
                ]
            },
            {
                label: 'Resource Planning',
                icon: 'people',
                items: [
                    { label: 'Resource Capacity', routerLink: ['/'] },
                    { label: 'Storage', icon: 'truck-icon', routerLink: ['/'] },
                ]
            },
            {
                label: 'Inventory Management',
                icon: 'receipt-icon',
                items: [
                    { label: 'Inventory', routerLink: ['/inventory-management/order-list'] },
                    { label: 'Purchase Orders', routerLink: ['/'] },
                    { label: 'Safty Stocks', routerLink: ['/pages/empty'] },
                    { label: 'Scarp', routerLink: ['/pages/empty'] },
                    { label: 'Configurations', routerLink: ['/pages/empty'] }
                ]
            },
            {
                label: 'MPS',
                icon: 'receipt-icon',
                items: [{ label: 'Schedule', icon: 'setting-icon', routerLink: ['/'] }]
            },
            {
                label: 'Reports',
                items: [
                    { label: 'Kit Reports', icon: 'setting-icon', routerLink: ['/'] }
                ]
            },
            { label: 'User Management', icon: 'setting-icon', routerLink: ['/'] },
            { label: 'Settings', icon: 'setting-icon', routerLink: ['/'] },
            { label: 'Sign Out', icon: 'signout-icon', routerLink: ['/'] }
        ];
    }
}
