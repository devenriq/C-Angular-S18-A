import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  input!:string[]

  constructor(public data:DataService){}

  ngOnInit(): void {
    this.data.getAll().subscribe(data=>this.input=data)
  }

}
