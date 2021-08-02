import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from '../core/services/users/users.service';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  const usersServiceMock = {
    existsUser() {},
    registerUser() {}
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [FormsModule, RouterTestingModule.withRoutes([]), ReactiveFormsModule],
        providers: [{ provide: UsersService, useFactory: () => usersServiceMock }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid the form when fields are empty', () => {
    component.loginForm.controls.username.setValue('');
    component.loginForm.controls.password.setValue('');

    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('username field validity', () => {
    const username = component.loginForm.controls.username;
    expect(username.valid).toBeFalsy();

    username.setValue('');
    expect(username.hasError('required')).toBeTruthy();

    username.setValue('12');
    expect(username.valid).toBeFalsy();

    username.setValue('123');
    expect(username.valid).toBeTruthy();
  });

  it('password field validity', () => {
    const password = component.loginForm.controls.password;
    expect(password.valid).toBeFalsy();

    password.setValue('');
    expect(password.hasError('required')).toBeTruthy();

    password.setValue('12345');
    expect(password.valid).toBeFalsy();

    password.setValue('123456');
    expect(password.valid).toBeTruthy();
  });

  it('should not call loginUser method when the login button is clicked and form is invalid', () => {
    const spyLoginUser = jest.spyOn(component, 'loginUser');
    const spyRouterNavigate = jest.spyOn((component as any).router, 'navigate');

    const registerButton = fixture.debugElement.query(By.css('#login-button')).nativeElement;
    registerButton.click();

    expect(spyLoginUser).not.toHaveBeenCalled();
    expect(component.unregistered).toBeFalsy();
    expect(spyRouterNavigate).not.toHaveBeenCalledWith(['/principal/ships']);
  });

  it('form should be valid', () => {
    component.loginForm.controls.username.setValue('1324');
    component.loginForm.controls.password.setValue('1324567');

    expect(component.loginForm.valid).toBeTruthy();
  });
});
