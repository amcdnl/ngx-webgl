import { EventEmitter, OnInit } from '@angular/core';
export declare class VRToggleComponent implements OnInit {
    toggle: EventEmitter<{}>;
    vrMode: boolean;
    vrAvailable: boolean;
    ngOnInit(): void;
}
