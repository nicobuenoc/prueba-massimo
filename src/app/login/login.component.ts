import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../core/models/user.model';
import { UsersService } from '../core/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  dataLoading = false;
  unregistered = false;
  invalid = false;

  constructor(private fb: FormBuilder, private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }

    const userLogin: Partial<User> = { username: this.loginForm.value.username };

    if (this.usersService.existsUser(userLogin)) {
      this.router.navigate(['/principal/ships']);
    } else {
      this.unregistered = true;
    }
  }
}
