import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {
  hidePassword: boolean = true;
  signupForm: FormGroup;
  hideconfirmPassword: boolean = true
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    }
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  toggleConfrimPasswordVisibility() {
    this.hideconfirmPassword = !this.hideconfirmPassword;
  }
}
