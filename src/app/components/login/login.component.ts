import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  isInputClicked: boolean = false;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }

  get username(): FormControl {
    return this.myForm.get('username') as FormControl
  }
  get password(): FormControl {
    return this.myForm.get('username') as FormControl
  }

  onSubmit(){
    console.log(this.myForm)
  }
}
