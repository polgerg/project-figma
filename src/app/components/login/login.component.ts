import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
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
    return this.myForm.get('password') as FormControl
  }

  onSubmit(){
    console.log(this.myForm.value)
    if(this.myForm.valid){
    this.router.navigate(['/gallery'])
    }
  }
}
