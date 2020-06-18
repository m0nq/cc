import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
    setValue(value: string | null, options?: any) {
        if (!value) {
            super.setValue(this.value, {
                ...options,
                emitModelToViewChange: true
            });
        } else if (value.match(/[^0-9|\/]/gi) || value.length > 5) {
            super.setValue(this.value, {
                ...options,
                emitModelToViewChange: true
            });
        } else if (value.length === 2 && this.value.length === 3) {
            super.setValue(value, {
                ...options,
                emitModelToViewChange: true
            });
        } else if (value.length === 2) {
            super.setValue(`${value}/`, {
                ...options,
                emitModelToViewChange: true
            });
        } else {
            super.setValue(value, {
                ...options,
                emitModelToViewChange: true
            });
        }
        return;
    }
}
