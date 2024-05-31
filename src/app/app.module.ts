import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { DemandManagementModule } from './components/demand-management/demand-management.module';
import { SharedModule } from './shared/shared.module';
import { UtilService } from './common/util';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from "ngx-ui-loader";

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
     SharedModule ,
     DragDropModule,
     NgxUiLoaderModule,
     NgxUiLoaderRouterModule,
     NgxUiLoaderHttpModule
    ],
  providers: [UtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
