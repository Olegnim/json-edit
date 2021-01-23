import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {
  DataForm: any = {
    text: '',
  }
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  GetDataForm(){
    var obj = JSON.parse(this.DataForm.text);
    var formatstr = JSON.stringify(obj, undefined, 2);
    // alert(String(formatstr))
    this.DataForm.text = String(formatstr)
    // this.router.navigate(['/show']);
  }
}
