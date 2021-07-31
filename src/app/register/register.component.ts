import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../core/models/user.model';
import { UsersService } from '../core/services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  dataLoading = false;

  constructor(private fb: FormBuilder, private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registerUser() {
    if (this.registerForm.invalid) {
      return;
    }

    const userLogin: User = this.registerForm.value;
    this.usersService.registerUser(userLogin);
    this.router.navigate(['/principal/ships']);
  }
}
