import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
})
export class AuthPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  public errorSession = { isError: false, message: '' };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  login(): void {
    const { email, password } = this.formLogin.value;
    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.router.navigate(['/', 'tracks']);
        this.errorSession = { isError: false, message: '' };
      },
      error: ({ error: { error } }) => {
        this.errorSession = { isError: true, message: error };
      },
      complete: () => {},
    });
  }
}
