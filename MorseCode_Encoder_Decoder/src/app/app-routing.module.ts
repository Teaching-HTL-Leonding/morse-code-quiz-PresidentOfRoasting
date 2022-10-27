import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecodeComponent } from './decode/decode.component';
import { EncodeComponent } from './encode/encode.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'Decode'},
  {path: 'decoder', component: DecodeComponent},
  {path: 'encoder', component: EncodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
