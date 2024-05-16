import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockTagComponent } from './block-tag/block-tag.component';
import { MsgRightSidebarComponent } from './msg-right-sidebar/msg-right-sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { OrderListModule } from 'primeng/orderlist';
import { AvatarModule } from 'primeng/avatar';
import { ArrowCardComponent } from './arrow-card/arrow-card.component';
import { TagModule } from 'primeng/tag';
import { VerticalStepperComponent } from './vertical-stepper/vertical-stepper.component';

@NgModule({
  declarations: [
    BlockTagComponent ,
    MsgRightSidebarComponent,
    ArrowCardComponent ,
    VerticalStepperComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    RouterModule,
    DividerModule ,
    ButtonModule ,
    TabViewModule,
    OrderListModule ,
    AvatarModule  ,
    TagModule
  ],
  exports: [BlockTagComponent , MsgRightSidebarComponent ,ArrowCardComponent , VerticalStepperComponent],
})
export class SharedModule {
  
}