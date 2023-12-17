import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'suppliers', loadChildren: () => import('./suppliers/suppliers-list/suppliers.module').then((m) => m.SuppliersModule) },
    { path: 'suppliers-checks', loadChildren: () => import('./suppliers/suppliers-chk/suppliers-chk.module').then((m) => m.SuppliersChkModule) },
    { path: 'clients', loadChildren: () => import('./clients/clients-list/clients-list.module').then((m) => m.ClientsListModule) },
    { path: 'clients-checks-in-safe', loadChildren: () => import('./clients/checks/checks-in-safe/checks-in-safe.module').then((m) => m.ChecksInSafeModule) },
    { path: 'clients-checks-in-bank', loadChildren: () => import('./clients/checks/checks-in-bank/checks-in-bank.module').then((m) => m.ChecksInBankModule) },
    { path: 'accounts-list', loadChildren: () => import('./accounts/accounts-list/accounts-list.module').then((m) => m.AccountsListModule) },
    { path: 'accounts-tree', loadChildren: () => import('./accounts/accounts-tree/accounts-tree.module').then((m) => m.AccountsTreeModule) },
    { path: 'opening-entry', loadChildren: () => import('./accounts/opening-balance/opening-balance.module').then((m) => m.OpeningEntryModule) },
    { path: 'expenses-items', loadChildren: () => import('./accounts/expenses/expenses-items/expenses-items.module').then((m) => m.ExpensesItemsModule) },
    { path: 'expenses-types', loadChildren: () => import('./accounts/expenses/expenses-types/expenses-types.module').then((m) => m.ExpensesTypesModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FeaturesModuleRoutingModule {}
