import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { DemandManagementModule } from './components/demand-management/demand-management.module';
import { InventoryManagementModule } from './components/inventory-management/inventory-management.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule ,
     AuthModule,
     AppRoutingModule , 
     AppLayoutModule, 
     BrowserAnimationsModule ,
     FormsModule ,
     DemandManagementModule,
     InventoryManagementModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
