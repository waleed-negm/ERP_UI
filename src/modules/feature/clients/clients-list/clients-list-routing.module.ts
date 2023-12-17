import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './clients-list.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: ClientsListComponent }])],
    exports: [RouterModule],
})
export class ClientsListRoutingModule {}
