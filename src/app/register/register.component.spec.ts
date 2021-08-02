import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';
import { UsersService } from '../core/services/users/users.service';
import { By } from '@angular/platform-browser';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  const usersServiceMock = {
    existsUser() {},
    registerUser() {}
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RegisterComponent],
        imports: [FormsModule, RouterTestingModule.withRoutes([]), ReactiveFormsModule],
        providers: [{ provide: UsersService, useFactory: () => usersServiceMock }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid the form when fields are empty', () => {
    component.registerForm.controls.first_name.setValue('');
    component.registerForm.controls.last_name.setValue('');
    component.registerForm.controls.username.setValue('');
    component.registerForm.controls.email.setValue('');

    expect(component.registerForm.invalid).toBeTruthy();
  });

  it('first_name field validity', () => {
    const first_name = component.registerForm.controls.first_name;
    expect(first_name.valid).toBeFalsy();

    first_name.setValue('');
    expect(first_name.hasError('required')).toBeTruthy();

    first_name.setValue('12');
    expect(first_name.valid).toBeFalsy();

    first_name.setValue('123');
    expect(first_name.valid).toBeTruthy();
  });

  it('last_name field validity', () => {
    const last_name = component.registerForm.controls.last_name;
    expect(last_name.valid).toBeFalsy();

    last_name.setValue('');
    expect(last_name.hasError('required')).toBeTruthy();

    last_name.setValue('12');
    expect(last_name.valid).toBeFalsy();

    last_name.setValue('123');
    expect(last_name.valid).toBeTruthy();
  });

  it('username field validity', () => {
    const username = component.registerForm.controls.username;
    expect(username.valid).toBeFalsy();

    username.setValue('');
    expect(username.hasError('required')).toBeTruthy();

    username.setValue('12');
    expect(username.valid).toBeFalsy();

    username.setValue('123');
    expect(username.valid).toBeTruthy();
  });

  it('email field validity', () => {
    const email = component.registerForm.controls.email;
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();

    email.setValue('12345');
    expect(email.valid).toBeFalsy();

    email.setValue('123456');
    expect(email.valid).toBeTruthy();
  });

  it('should not call registerUser method when the cancel button is clicked', () => {
    const spyRegisterUser = jest.spyOn(component, 'registerUser');
    const spyRegisterUserService = jest.spyOn((component as any).usersService, 'registerUser');
    const spyRouterNavigate = jest.spyOn((component as any).router, 'navigate');

    const cancelButton = fixture.debugElement.query(By.css('#cancel-button')).nativeElement;
    cancelButton.click();

    expect(spyRegisterUser).not.toHaveBeenCalled();
    expect(spyRegisterUserService).not.toHaveBeenCalled();
    expect(spyRouterNavigate).not.toHaveBeenCalled();
  });

  it('should not call registerUser method when the register button is clicked and form is invalid', () => {
    const spyRegisterUser = jest.spyOn(component, 'registerUser');
    const spyRegisterUserService = jest.spyOn((component as any).usersService, 'registerUser');
    const spyRouterNavigate = jest.spyOn((component as any).router, 'navigate');

    const registerButton = fixture.debugElement.query(By.css('#register-button')).nativeElement;
    registerButton.click();

    expect(spyRegisterUser).not.toHaveBeenCalled();
    expect(spyRegisterUserService).not.toHaveBeenCalled();
    expect(spyRouterNavigate).not.toHaveBeenCalledWith(['/principal/ships']);
  });

  it('form should be valid', () => {
    component.registerForm.controls.first_name.setValue('Ramon');
    component.registerForm.controls.last_name.setValue('Garcia');
    component.registerForm.controls.username.setValue('132456789');
    component.registerForm.controls.email.setValue('adasd@asd.com');

    expect(component.registerForm.valid).toBeTruthy();
  });
});
