import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './supplier.component';
@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: SupplierComponent }])],
    exports: [RouterModule],
})
export class SuppliersRoutingModule {}
