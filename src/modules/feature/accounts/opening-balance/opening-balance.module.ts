import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpeningEntryRoutingModule } from './opening-balance-routing.module';
import { OpeningBalanceComponent } from './opening-balance.component';
import { SharedModule } from '../../../shared/shared.module.module';

@NgModule({
    declarations: [OpeningBalanceComponent],
    imports: [CommonModule, OpeningEntryRoutingModule, SharedModule],
})
export class OpeningEntryModule {}
