import { CommonModule, NgOptimizedImage, TitleCasePipe } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  EventEmitter,
  inject,
  input,
  Output,
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { DomSanitizer } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { DividerHeaderComponent } from "src/app/components/divider-header/divider-header.component";
import { FormInputComponent } from "src/app/components/form-input/form-input.component";

import {
  EmailAndPasswordSignIn,
  ServerError,
  SignInEvent,
  SignInMethod,
} from "../../store/auth.model";

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: "to-login-form",
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
    TitleCasePipe,
    DividerHeaderComponent,
    FormInputComponent,
  ],
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  public readonly loginFormGroup: FormGroup<LoginForm>;

  serverError = input<ServerError | null>({} as ServerError);

  @Output() login: EventEmitter<SignInEvent> = new EventEmitter();
  @Output() google: EventEmitter<SignInEvent> = new EventEmitter();
  @Output() otp: EventEmitter<SignInEvent> = new EventEmitter();
  @Output() emailLink: EventEmitter<SignInEvent> = new EventEmitter();
  @Output() forget: EventEmitter<void> = new EventEmitter();

  constructor() {
    this._setGoogleIcon();
    this.loginFormGroup = this._getLoginFormGroup(
      inject(NonNullableFormBuilder)
    );

    effect(
      () => {
        this._handleServerError(this.loginFormGroup, this.serverError());
      },
      { allowSignalWrites: true }
    );
  }

  private _setGoogleIcon(): void {
    inject(MatIconRegistry).addSvgIcon(
      "google",
      inject(DomSanitizer).bypassSecurityTrustResourceUrl(
        "assets/icons/google-icon.svg"
      )
    );
  }

  private _getLoginFormGroup(
    nfb: NonNullableFormBuilder
  ): FormGroup<LoginForm> {
    return nfb.group({
      email: nfb.control("", [Validators.required, Validators.email]),
      password: nfb.control("", [Validators.required]),
    });
  }

  public oGoogleSignIn(): void {
    const event = this._createSignInEvent(SignInMethod.GOOGLE);
    this.google.emit(event);
  }

  public onSubmit(value: Partial<EmailAndPasswordSignIn>): void {
    const event = this._createSignInEvent(SignInMethod.EMAIL_PASSWORD, value);
    this.login.emit(event);
  }

  public onOtpSignIn(): void {
    const event = this._createSignInEvent(SignInMethod.OPT);
    this.otp.emit(event);
  }

  public onEmailLinkSignIn() {
    const event = this._createSignInEvent(SignInMethod.EMAIL_LINK);
    this.emailLink.emit(event);
  }

  public onForgetPassword() {
    this.forget.emit();
  }

  private _createSignInEvent(
    method: SignInMethod,
    data?: unknown
  ): SignInEvent {
    return {
      method,
      data,
    } as SignInEvent;
  }

  private _handleServerError(
    group: FormGroup,
    server: ServerError | null
  ): void {
    if (group !== null && server !== null) {
      const control = group.get(server.control as string);

      if (control != null) {
        control.setErrors({ serverError: server.message });
      }
    }
  }
}