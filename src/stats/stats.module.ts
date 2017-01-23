import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsComponent } from './stats.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StatsComponent],
  exports: [StatsComponent]
})
export class NgxStatsModule { }
