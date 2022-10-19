import { VehiclesTypes } from '../../Core/Vehicle';
import { Injectable } from '@nestjs/common';
import { FREE_TAX_VEHICLES_LIST } from 'src/Core/Vehicle';

@Injectable()
export class VehiclesService {
  public getTaxFreeTypes() {
    return Array.from(FREE_TAX_VEHICLES_LIST);
  }

  public getVehicleTypes() {
    return VehiclesTypes;
  }
}
