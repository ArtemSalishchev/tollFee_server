import { VehicleFactory, VehiclesTypes } from './../../Core/Vehicle';
import { FeeCalculator } from './../../Core/FeeCalculator/FeeCalculator';
import { Injectable } from '@nestjs/common';
import { Vehicle } from 'src/Core/Vehicle';

@Injectable()
export class FeeCalculatorService {
  constructor(
    private feeCalculator: FeeCalculator,
    private vehicleFactory: VehicleFactory,
  ) {}

  public async calculateTollFee(
    checkInDate: Date,
    checkOutDate: Date,
    vehicleType: string,
  ) {
    const vehicle: Vehicle = this.vehicleFactory.createVehicle(
      vehicleType as VehiclesTypes,
    );

    return this.feeCalculator.getTollFee(
      new Date(checkInDate),
      new Date(checkOutDate),
      vehicle,
    );
  }
}
