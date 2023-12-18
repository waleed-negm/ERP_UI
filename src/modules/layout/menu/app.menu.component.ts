import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from 'src/modules/layout/layout-service.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'الشاشة الرئيسية',
                items: [{ label: 'لوحة التحكم', icon: 'pi pi-fw pi-home', routerLink: ['/'] }],
            },
            {
                label: 'الموردين',
                items: [
                    { label: 'قائمة الموردين', icon: 'pi pi-fw pi-shopping-bag', routerLink: ['/admin/suppliers'] },
                    { label: 'شيكات الموردين', icon: 'pi pi-fw pi-money-bill', routerLink: ['/admin/suppliers-checks'] },
                ],
            },
            {
                label: 'العملاء',
                items: [
                    { label: 'ادارة العملاء', icon: 'pi pi-fw pi-users', routerLink: ['/admin/clients'] },
                    {
                        label: 'شيكات العملاء',
                        icon: 'pi pi-fw pi-money-bill',
                        items: [
                            { label: 'شيكات في الخزنة', icon: 'pi pi-fw pi-money-bill', routerLink: ['/admin/clients-checks-in-safe'] },
                            { label: 'شيكات في البنك', icon: 'pi pi-fw pi-money-bill', routerLink: ['/admin/clients-checks-in-bank'] },
                        ],
                    },
                ],
            },
            {
                label: 'الحسابات',
                items: [
                    { label: 'جميع الحسابات', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/admin/accounts-list'] },
                    { label: 'القيد الافتتاحي', icon: 'pi pi-fw pi-slack', routerLink: ['/admin/opening-entry'] },
                    {
                        label: 'شجرة الحسابات',
                        icon: 'pi pi-fw pi-sitemap',
                        items: [
                            { label: 'جميع الحسابات', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/accounts-tree'] },
                            { label: 'العملاء والموردين =/', icon: 'pi pi-fw pi-id-card', routerLink: ['/'] }, // شجرة الحسابات بس عملاء و موردين بس
                        ],
                    },
                    {
                        label: 'المصروفات',
                        icon: 'pi pi-fw pi-dollar ',
                        items: [
                            { label: 'تسجيل المصروفات =/', icon: 'pi pi-fw pi-id-card', routerLink: ['/'] },
                            { label: 'بنود المصروفات', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/expenses-items'] },
                            { label: 'أنواع المصروفات', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/expenses-types'] },
                            { label: 'مراكز التكلفة =/', icon: 'pi pi-fw pi-id-card', routerLink: ['/'] }, //videos
                        ],
                    },
                    { label: 'التحويل ما بين الحسابات =/', icon: 'pi pi-fw pi-sync', routerLink: ['/'] },
                    { label: 'الموردين والدائنين =/', icon: 'pi pi-fw pi-sort-alt', routerLink: ['/'] },
                    { label: 'شيكات الموردين =/', icon: 'pi pi-fw pi-money-bill', routerLink: ['/'] },
                ],
            },
            {
                label: 'التقارير',
                items: [
                    {
                        label: 'تقارير الحسابات',
                        icon: 'pi pi-fw pi-book',
                        items: [
                            { label: 'كشف الحساب =/', icon: 'pi pi-fw pi-chart-line', routerLink: ['/'] },
                            { label: 'كشف حساب العميل =/', icon: 'pi pi-fw pi-check-square', routerLink: ['/'] },
                            { label: 'كشف حساب المورد =/', icon: 'pi pi-fw pi-chart-pie', routerLink: ['/'] },
                            { label: 'تقرير المصروفات =/', icon: 'pi pi-fw pi-file', routerLink: ['/'] },
                        ],
                    },
                ],
            },
            {
                label: 'الاعدادات',
                items: [
                    {
                        label: 'الحسابات',
                        icon: 'pi pi-fw pi-calculator',
                        items: [
                            { label: 'العملات =/', icon: 'pi pi-fw pi-id-card', routerLink: ['/'] },
                            { label: 'البنوك =/', icon: 'pi pi-fw pi-id-card', routerLink: ['/'] },
                            { label: 'تحليلي المصروفات =/', icon: 'pi pi-fw pi-id-card', routerLink: ['/'] },
                        ],
                    },
                    {
                        label: 'شؤون العاملين',
                        icon: 'pi pi-fw pi-id-card',
                        items: [
                            { label: 'الأدارات =/', icon: 'pi pi-fw pi-id-card', routerLink: ['/'] },
                            { label: 'المسمى الوظيفي =/', icon: 'pi pi-fw pi-id-card', routerLink: ['/'] },
                            { label: 'الموظفين =/', icon: 'pi pi-fw pi-id-card', routerLink: ['/'] },
                        ],
                    },
                    { label: 'مصادر العملاء =/', icon: 'pi pi-fw pi-users', routerLink: ['/'] },
                ],
            },
        ];
    }
}
