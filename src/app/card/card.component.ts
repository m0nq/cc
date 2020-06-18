import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'cq-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input() cardNumber: string;
    @Input() name: string;
    @Input() expiration: string;

    constructor() { }

    ngOnInit(): void {
    }
}
