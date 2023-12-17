import { Injectable } from '@angular/core';
import { GenericRepository } from '../generic.repository';
import { API } from '../../api.constants';
import { AccountChartCounter } from '../../models/GL/IAccount-chart-counter.interface';
import { GenericResponseDto } from '../../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class AccountChartCounterRepository extends GenericRepository<AccountChartCounter, GenericResponseDto<AccountChartCounter>, GenericResponseDto<AccountChartCounter[]>> {
    constructor() {
        super();
        this.setControllerName(API.AccountChartCounters);
    }
}
