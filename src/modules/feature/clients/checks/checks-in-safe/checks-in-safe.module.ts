import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChecksInSafeRoutingModule } from './checks-in-safe-routing.module';
import { ChecksInSafeComponent } from './checks-in-safe.component';
import { SharedModule } from '../../../../shared/shared.module.module';

@NgModule({
    declarations: [ChecksInSafeComponent],
    imports: [CommonModule, ChecksInSafeRoutingModule, SharedModule],
})
export class ChecksInSafeModule {}
