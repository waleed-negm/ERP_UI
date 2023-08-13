import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../../services/app.layout.service';

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
                items: [{ label: 'لوحة التحكم', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }],
            },
            {
                label: 'الموردين',
                items: [
                    { label: 'قائمة الموردين', icon: 'pi pi-fw pi-id-card', routerLink: ['/dashboard/suppliers'] },
                    { label: 'شيكات الموردين', icon: 'pi pi-fw pi-id-card' },
                    {
                        label: 'شيكات العملاء',
                        icon: 'pi pi-fw pi-id-card',
                        items: [
                            { label: 'شيكات في الخزنة', icon: 'pi pi-fw pi-id-card' },
                            { label: 'شيكات في البنك', icon: 'pi pi-fw pi-id-card' },
                        ],
                    },
                ],
            },
            {
                label: 'العملاء',
                items: [
                    { label: 'ادارة العملاء', icon: 'pi pi-fw pi-id-card' },
                    {
                        label: 'شيكات العملاء',
                        icon: 'pi pi-fw pi-id-card',
                        items: [
                            { label: 'شيكات في الخزنة', icon: 'pi pi-fw pi-id-card' },
                            { label: 'شيكات في البنك', icon: 'pi pi-fw pi-id-card' },
                        ],
                    },
                ],
            },
            {
                label: 'الحسابات',
                items: [
                    { label: 'جميع الحسابات', icon: 'pi pi-fw pi-id-card' },
                    { label: 'القيد الافتتاحي', icon: 'pi pi-fw pi-id-card' },
                    {
                        label: 'شجرة الحسابات',
                        icon: 'pi pi-fw pi-id-card',
                        items: [
                            { label: 'جميع الحسابات', icon: 'pi pi-fw pi-id-card' },
                            { label: 'العملاء والموردين', icon: 'pi pi-fw pi-id-card' },
                        ],
                    },
                    {
                        label: 'المصروفات',
                        icon: 'pi pi-fw pi-id-card',
                        items: [
                            { label: 'تسجيل المصروفات', icon: 'pi pi-fw pi-id-card' },
                            { label: 'بنود المصروفات', icon: 'pi pi-fw pi-id-card' },
                            { label: 'أنواع المصروفات', icon: 'pi pi-fw pi-id-card' },
                            { label: 'مراكز التكلفة', icon: 'pi pi-fw pi-id-card' },
                        ],
                    },
                    { label: 'التحويل ما بين الحسابات', icon: 'pi pi-fw pi-id-card' },
                    { label: 'الموردين والدائنين', icon: 'pi pi-fw pi-id-card' },
                    { label: 'شيكات الموردين', icon: 'pi pi-fw pi-id-card' },
                ],
            },
            {
                label: 'التقارير',
                items: [
                    {
                        label: 'تقارير الحسابات',
                        icon: 'pi pi-fw pi-id-card',
                        items: [
                            { label: 'كشف الحساب', icon: 'pi pi-fw pi-id-card' },
                            { label: 'كشف حساب العميل', icon: 'pi pi-fw pi-id-card' },
                            { label: 'كشف حساب المورد', icon: 'pi pi-fw pi-id-card' },
                            { label: 'تقرير المصروفات', icon: 'pi pi-fw pi-id-card' },
                        ],
                    },
                ],
            },
            {
                label: 'الاعدادات',
                items: [
                    {
                        label: 'الحسابات',
                        icon: 'pi pi-fw pi-id-card',
                        items: [
                            { label: 'العملات', icon: 'pi pi-fw pi-id-card' },
                            { label: 'البنوك', icon: 'pi pi-fw pi-id-card' },
                            { label: 'تحليلي المصروفات', icon: 'pi pi-fw pi-id-card' },
                        ],
                    },
                    {
                        label: 'شؤون العاملين',
                        icon: 'pi pi-fw pi-id-card',
                        items: [
                            { label: 'الأدارات', icon: 'pi pi-fw pi-id-card' },
                            { label: 'المسمى الوظيفي', icon: 'pi pi-fw pi-id-card' },
                            { label: 'الموظفين', icon: 'pi pi-fw pi-id-card' },
                        ],
                    },
                    { label: 'مصادر العملاء', icon: 'pi pi-fw pi-id-card' },
                ],
            },
        ];
    }
}
