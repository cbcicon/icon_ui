import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { DemandManagementModule } from './components/demand-management/demand-management.module';
import { RevenueManagementModule } from './components/revenue-management/revenue-management.module';
import { SharedModule } from './shared/shared.module';
import { UtilService } from './common/util';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { TableDataService } from './common/table-data/table-data.service';
import { ImportsModule } from './import';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule ,
     AuthModule,
     AppRoutingModule , 
     AppLayoutModule, 
     BrowserAnimationsModule ,                  
     FormsModule ,
     DemandManagementModule ,
     RevenueManagementModule,
     SharedModule ,
     DragDropModule,
     ImportsModule,
     NgxUiLoaderModule,
     NgxUiLoaderRouterModule,
     NgxUiLoaderHttpModule
    ],
  providers: [UtilService , TableDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
