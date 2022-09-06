import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() type?:string
  @Input() id?:string
  @Input() controlName?:string
  @Input() name?:string
  @Input() imgUrl?: string;
  @Input() label?: string;

  @Input() control!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }



}
