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
                items: [
                    { label: 'Dashboard', icon: 'dashboard-icon', routerLink: ['/'] }
                ]
            },
            {
                label: 'Demand Management',
                icon: 'receipt-icon',
                items: [
                    { label: 'Forecast', icon: 'box-seam-icon', routerLink: ['/demand-management/order-list'] },
                    { label: 'New Study', icon: 'box-seam-icon', routerLink: ['/'] },
                    { label: 'Live Study', icon: 'box-seam-icon', routerLink: ['/pages/empty'] }
                ]
            },
            {
                label: 'Resource Planning',
                items: [
                    { label: 'Resource Capacity', icon: 'box-seam-icon', routerLink: ['/'] },
                    { label: 'Storage', icon: 'truck-icon', routerLink: ['/'] },
                ]
            },
            {
                label: 'Inventory Management',
                icon: 'receipt-icon',
                items: [
                    { label: 'Inventory', icon: 'box-seam-icon', routerLink: ['/demand-management/order-list'] },
                    { label: 'Purchase Orders', icon: 'box-seam-icon', routerLink: ['/'] },
                    { label: 'Safty Stocks', icon: 'box-seam-icon', routerLink: ['/pages/empty'] },
                    { label: 'Scarp', icon: 'box-seam-icon', routerLink: ['/pages/empty'] },
                    { label: 'Configurations', icon: 'box-seam-icon', routerLink: ['/pages/empty'] }
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
