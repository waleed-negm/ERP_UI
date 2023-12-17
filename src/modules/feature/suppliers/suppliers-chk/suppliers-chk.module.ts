import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersChkRoutingModule } from './suppliers-chk-routing.module';
import { SuppliersChkComponent } from './suppliers-chk.component';
import { SharedModule } from '../../../shared/shared.module.module';

@NgModule({
    declarations: [SuppliersChkComponent],
    imports: [CommonModule, SuppliersChkRoutingModule, SharedModule],
})
export class SuppliersChkModule {}
