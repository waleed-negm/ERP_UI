import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SupplierComponent } from './supplier.component';
import { SharedModule } from '../../../shared/shared.module.module';

@NgModule({
    imports: [CommonModule, SuppliersRoutingModule, SharedModule],
    declarations: [SupplierComponent],
})
export class SuppliersModule {}
