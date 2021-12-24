import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, debounceTime, take, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
function isEmptyInputValue(value: any): boolean {
  // we don't check for string here so it also works with arrays
  return value === null || value.length === 0;
}

@Injectable({
  providedIn: 'root'
})
export class CustomEmailValidator {
  constructor(private auth: AuthService) { }

  existingEmailValidator(initialEmail: string = ''): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<{ [key: string]: any } | null>
      | Observable<{ [key: string]: any } | null> => {
      const regexp = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      if (isEmptyInputValue(control.value)) {
        return of(null);
      } else if (control.value === initialEmail) {
        return of(null);
      } else {
        // if (regexp.test(control.value)) {
        return control.valueChanges.pipe(
          debounceTime(500),
          take(1),
          switchMap((_) =>
            this.auth
              .checkEmail(control.value)
              .pipe(
                map((res) =>
                  res ? { existingEmail: { value: control.value } } : null
                )
              )
          )
        );

      }
    };
  }
}
