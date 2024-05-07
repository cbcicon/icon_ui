import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { }

    get getComments(): boolean {
        let chatData = JSON.parse(localStorage.getItem('comments') || '[]');
      
        if (chatData.length > 0) {
          return chatData.some((comment:any) => !comment.read);
        } else {
          return false; 
        }
      }


      handleReadComments(){
        const existingComments =JSON.parse(localStorage.getItem('comments') || '[]');

        const updatedComments = existingComments.map((comment:any )=> {
            comment.read = true;
          return comment;
        });
        localStorage.setItem('comments', JSON.stringify(updatedComments));
      }

}
