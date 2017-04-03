import { Component, ChangeDetectionStrategy, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'vr-toggle',
  template: `
    <div class="vr-toggle">
      <button
        class="fullscreen-btn"
        (click)="fullscreen.emit()">
      </button>
      <button
        class="vr-btn"
        (click)="toggle.emit(vrMode = !vrMode)">
      </button>
      <span
        *ngIf="!vrAvailable"
        class="vr-desc">
        😢 No VR Devices Found
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VRToggleComponent implements OnInit {

  @Output() toggle = new EventEmitter();
  @Output() fullscreen = new EventEmitter();

  vrMode: boolean = false;
  vrAvailable: boolean = false;

  ngOnInit(): void {
    this.vrAvailable = navigator.getVRDisplays !== undefined;
  }

}
