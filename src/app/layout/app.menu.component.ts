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
                    { label: 'Dashboard', icon: 'dashboard-icon', routerLink: ['/'] },
                    { label: 'Forecast', icon: 'forecaste', routerLink: ['/'] },
                    
                ]
            },
            {
                label: 'Material Resource Planning',
                items: [
                    
                    {
                        label: 'Orders',
                        icon: 'receipt-icon',
                        routerLink: ['/demand-management/order-list']
                    },
                    {
                        label: 'Inventory',
                        icon: 'inventory-icon',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Procure',
                        icon: 'handbag-icon',
                        routerLink: ['/pages/empty']
                    },
                    {
                        label: 'Make',
                        icon: 'stopwatch-icon',
                        routerLink: ['/pages/empty']
                    },
                    {
                        label: 'Manufacturers',
                        icon: 'people-icon',
                        routerLink: ['/pages/empty']
                    },
                    {
                        label: 'Capacity',
                        icon: 'battery-half-icon',
                        routerLink: ['/pages/empty']
                    },
                    {
                        label: 'What If?',
                        icon: 'question-circle-icon',
                        routerLink: ['/pages/empty']
                    },
                    {
                        label: 'Reports',
                        icon: 'bar-chart-icon',
                        routerLink: ['/pages/empty']
                    },
                ]
            } ,
            {
                label: 'Others',
                items: [
                    { label: 'Suppliers', icon: 'box-seam-icon', routerLink: ['/'] },
                    { label: 'Logistics', icon: 'truck-icon', routerLink: ['/'] },
                ]
            },
            {
                items: [
                    { label: 'Settings', icon: 'setting-icon', routerLink: ['/'] },
                    { label: 'Sign Out', icon: 'signout-icon', routerLink: ['/'] },
                ]
            },
        ];
    }
}
