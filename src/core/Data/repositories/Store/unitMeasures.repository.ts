import { Injectable } from '@angular/core';
import { API } from '../../api.constants';
import { GenericRepository } from '../generic.repository';
import { UnitMeasure } from '../../models/Store/IUnit-measure.interface';
import { GenericResponseDto } from '../../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class UnitMeasuresRepository extends GenericRepository<UnitMeasure, GenericResponseDto<UnitMeasure>> {
    constructor() {
        super();
        this.setControllerName(API.UnitMeasures);
    }
}
