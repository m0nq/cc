import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'cq-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    @Input() control: AbstractControl;
    @Input() label: string;

    constructor() { }

    ngOnInit(): void {
    }

    showErrors() {
        const { dirty, touched, errors } = this.control;
        return dirty && touched && errors;
    }
}
