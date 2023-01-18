import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  exports:[
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PagesModule { }
