import { OnInit } from '@angular/core';
import { ObjectComponent } from './object.component';
export declare class TextComponent extends ObjectComponent implements OnInit {
    position: number[];
    label: string;
    font: string;
    fillStyle: string;
    ngOnInit(): void;
}
