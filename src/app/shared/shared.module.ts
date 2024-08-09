import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockTagComponent } from './block-tag/block-tag';
import { MsgRightSidebarComponent } from './msg-right-sidebar/msg-right-sidebar';
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
import { ArrowCardComponent } from './arrow-card/arrow-card';
import { TagModule } from 'primeng/tag';
import { VerticalStepperComponent } from './vertical-stepper/vertical-stepper';
import { MoveStockItemComponent } from './move-stock-item/move-stock-item';
import { CircularProgressComponent } from './circular-progress/circular-progress.component';
import { SmallCardComponent } from './small-card/small-card.component';

@NgModule({
  declarations: [
    BlockTagComponent ,
    MsgRightSidebarComponent,
    ArrowCardComponent ,
    VerticalStepperComponent ,
    MoveStockItemComponent,
    CircularProgressComponent,
    SmallCardComponent
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
  exports: [SmallCardComponent,CircularProgressComponent,BlockTagComponent , MsgRightSidebarComponent ,ArrowCardComponent , VerticalStepperComponent ,MoveStockItemComponent],
})
export class SharedModule {
  
}