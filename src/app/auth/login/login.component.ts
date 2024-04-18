import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required] 
  });
  
  constructor(private fb: FormBuilder , private router: Router) {}

  ngOnInit(): void {
  }

 
  loading: boolean = false;

  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }

  onSubmit() {
     this.load()
     this.router.navigate(['/']);
    if (this.loginForm.valid) {
      
      this.router.navigate(['/']);
    } else {
      console.log('Form is invalid');
    }
  }
}
