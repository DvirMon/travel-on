import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User, SignInEvent, AuthEvent } from "../auth.model";

export const AuthActions = createActionGroup({
  source: "Auth/API",
  events: {
    "Sign In": props<{ signInEvent: SignInEvent }>(),
    "Sign In Success": props<{ user: User }>(),
    "Send Email Link": props<{ email: string }>(),
    "Send Email Link Success": props<{ email: string }>(),
    "Load User": props<{ userId: string }>(),
    "Load User Success": props<{ user: User }>(),
    "Load User Failure": props<{ code: string; event: AuthEvent }>(),
    "Send Reset Email": props<{ email: string }>(),
    "Send Reset Email Success": props<{ email: string }>(),
    "Send Reset Email Failure": props<{ code: string; event: AuthEvent }>(),
    "Confirm Reset Password": props<{ newPassword: string; oobCode: string }>(),
    "Create User": props<{ email: string; password: string }>(),
    Cleanup: emptyProps(),
    Logout: emptyProps(),
  },
});
