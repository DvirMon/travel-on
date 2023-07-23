import { ChangeDetectionStrategy, Component, EventEmitter, Output, Signal, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { ContactFormComponent, ContactSubmitEvent, MessageType } from '../contact-form/contact-form.component';
import { OtpFormComponent } from '../otp-form/otp-form.component';
import { MatIconModule } from '@angular/material/icon';
import { SignInEvent } from '../store/auth.model';
import { MatButtonModule } from '@angular/material/button';

interface Tab {
  icon: string;
  label: string;
  type: MessageType;
}

@Component({
  selector: 'to-login-otp-form',
  standalone: true,
  imports: [CommonModule, MatStepperModule, MatTabsModule, MatIconModule, MatButtonModule, ContactFormComponent, OtpFormComponent],
  templateUrl: './login-otp-form.component.html',
  styleUrls: ['./login-otp-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class LoginOtpFormComponent {

  protected readonly tabs: Tab[] = [
    { icon: 'sms', label: 'SMS', type: MessageType.SMS },
    { icon: 'mail', label: 'Email', type: MessageType.EMAIL }
  ];

  protected selectedIndex: WritableSignal<number> = signal(0);

  protected contactEvent! : ContactSubmitEvent

  @Output() otpSignIn: EventEmitter<SignInEvent> = new EventEmitter();


  onSendOPT(event: ContactSubmitEvent) {
    this.contactEvent = event;
    this._changeStep();
  }

  private _changeStep() {
    this.selectedIndex.update(() => 1)
  }

}
