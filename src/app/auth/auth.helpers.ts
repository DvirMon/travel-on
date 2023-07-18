import { Injector, inject, runInInjectionContext } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {
  UserCredential,
  User as UserFirebase,
} from '@angular/fire/auth';
import { User } from './store/auth.model';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';


// Function to generate a valid URL for the email verification link
export function generateVerificationLink(injector: Injector): string {

  return runInInjectionContext(injector, () => {

    const baseUrl = inject(Location).normalize(location.origin);


    // Create the URL tree with the desired route and any necessary query parameters
    const urlTree = inject(Router).createUrlTree(['/verify-email'], {
      queryParams: { token: 'verification_token' },
    });

    // Convert the URL tree to a string
    const url = inject(Router).serializeUrl(urlTree);

    const verificationLink = baseUrl + url;


    return verificationLink;
  })
}

export function mapUserCredentials(): OperatorFunction<UserCredential, User> {
  return (source: Observable<UserCredential>): Observable<User> =>
    source.pipe(
      map((credential: UserCredential) => credential.user),
      map((userFirebase: UserFirebase) => {
        const user = mapUser(userFirebase); // Replace with your _mapUser logic
        return user;
      })
    );
}

function mapUser(user: UserFirebase): User {
  return {
    id: user.uid,
    displayName: user.displayName,
    email: user.email,
    emailVerified: user.emailVerified,
    photoURL: user.photoURL,
  } as User
}
