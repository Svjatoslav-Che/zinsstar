import {AbstractControl, FormArray, FormGroup} from '@angular/forms';

export function InputSuccessErrorClass(control: AbstractControl): string {
  if (control.touched) {
    if (control.value && !control.errors) {
      return 'has-success';
    } else {
      return 'has-error';
    }
  } else {
    return '';
  }
}

export function ShowHideMatError(control: AbstractControl): boolean {
  if (control.touched) {
    return !!(!control.value && (control.errors || control.dirty));
  } else {
    return false;
  }
}

export function findInvalidControlsRecursive(
  formToInvestigate: FormGroup | FormArray
): string[] {
  const invalidControls: string[] = [];
  const recursiveFunc = (form: FormGroup | FormArray) => {
    Object.keys(form.controls).forEach((field) => {
      const control = form.get(field);
      // @ts-ignore
      if (control.invalid) {
        invalidControls.push(field);
      }
      if (control instanceof FormGroup) {
        recursiveFunc(control);
      } else if (control instanceof FormArray) {
        recursiveFunc(control);
      }
    });
  };
  recursiveFunc(formToInvestigate);
  return invalidControls;
}
