import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ContractComponent } from './contract/contract.component';
import { AppRoutingModule } from './app-routing.module';
import { EditcontractComponent } from './editcontract/editcontract.component';
import { ListcontractsComponent } from './listcontracts/listcontracts.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    ContractComponent,
    EditcontractComponent,
    ListcontractsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
