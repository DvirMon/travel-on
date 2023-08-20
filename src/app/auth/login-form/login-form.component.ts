import { Component, ChangeDetectionStrategy, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { SignInEvent, EmailAndPasswordSignIn, SignInMethod } from '../store/auth.model';
import { DividerHeaderComponent } from 'src/app/components/divider-header/divider-header.component';

interface LoginForm {
  email: FormControl<string>
  password: FormControl<string>
}

@Component({
  selector: 'to-login-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DividerHeaderComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class LoginFormComponent {

  protected readonly loginFormGroup: FormGroup<LoginForm>;

  @Output() login: EventEmitter<SignInEvent> = new EventEmitter();
  @Output() googleSignIn: EventEmitter<SignInEvent> = new EventEmitter();
  @Output() otpSignIn: EventEmitter<SignInEvent> = new EventEmitter();
  @Output() emailLinkSignIn: EventEmitter<SignInEvent> = new EventEmitter();

  constructor(
  ) {

    this._setGoogleIcon();
    this.loginFormGroup = this._getLoginFormGroup(inject(NonNullableFormBuilder))

  }

  private _setGoogleIcon(): void {
    inject(MatIconRegistry).addSvgIcon(
      "google",
      inject(DomSanitizer).bypassSecurityTrustResourceUrl("assets/icons/google-icon.svg")
    );
  }

  private _getLoginFormGroup(nfb: NonNullableFormBuilder): FormGroup<LoginForm> {
    return nfb.group({
      email: nfb.control('', [Validators.required, Validators.email]),
      password: nfb.control('', [Validators.required]),
    })
  }

  protected oGoogleSignIn(): void {
    const event = this._createSignInEvent(SignInMethod.GOOGLE)
    this.googleSignIn.emit(event)
  }

  protected onSubmit(value: Partial<EmailAndPasswordSignIn>): void {
    const event = this._createSignInEvent(SignInMethod.EMAIL_PASSWORD, value)
    this.login.emit(event)
  }

  protected onOtpSignIn(): void {
    const event = this._createSignInEvent(SignInMethod.OPT);
    this.otpSignIn.emit(event)

  }

  protected onEmailLinkSignIn() {
    const event = this._createSignInEvent(SignInMethod.EMAIL_LINK) ;
    this.emailLinkSignIn.emit(event)
  }

  private _createSignInEvent(method: SignInMethod, data?: unknown): SignInEvent {
    return {
      method,
      data
    } as SignInEvent
  }
}


