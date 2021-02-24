import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractComponent } from './contract/contract.component';
import { EditcontractComponent } from './editcontract/editcontract.component';
import { HomeComponent } from './home/home.component';
import { ListcontractsComponent } from './listcontracts/listcontracts.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path:'', component:SigninComponent },
  { path:'signin', component:SigninComponent },
  { path:'contract', component:ContractComponent },
  { path: 'editcontract' , component:EditcontractComponent },
  { path:'home', component:HomeComponent },
  { path:'listcontracts', component:ListcontractsComponent },
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
