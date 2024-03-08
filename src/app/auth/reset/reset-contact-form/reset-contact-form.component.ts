import { JsonPipe, TitleCasePipe } from "@angular/common";
import {
  Component,
  EventEmitter,
  Output,
  WritableSignal,
  inject,
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { DividerHeaderComponent } from "src/app/components/divider-header/divider-header.component";
import { FormInputComponent } from "src/app/components/form-input/form-input.component";
import { getFormKeys } from "src/app/components/form-input/form.helper";
import { EmailAndPasswordSignIn } from "../../store/auth.model";

interface ResetContactForm {
  email: FormControl<string>;
}

@Component({
  selector: "to-reset-contact-form",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TitleCasePipe,
    JsonPipe,
    MatCard,
    MatCardContent,
    MatButton,
    MatIcon,
    FormInputComponent,
    DividerHeaderComponent,
  ],
  templateUrl: "./reset-contact-form.component.html",
  styleUrl: "./reset-contact-form.component.scss",
})
export class ResetContactFormComponent {
  public readonly resetFormGroup: FormGroup<ResetContactForm>;
  public readonly formKeys: WritableSignal<string[]>;

  @Output() sendContact: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.resetFormGroup = this._buildResetForm();
    this.formKeys = getFormKeys(this.resetFormGroup);
  }

  private _buildResetForm(): FormGroup<ResetContactForm> {
    return inject(NonNullableFormBuilder).group({
      email: ["", [Validators.required, Validators.email]],
    });
  }

  public onSubmit(value: Partial<EmailAndPasswordSignIn>): void {
    this.sendContact.emit(value as string);
  }
}