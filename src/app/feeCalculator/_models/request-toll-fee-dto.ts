import { VehiclesTypes } from './../../../Core/Vehicle/VehiclesTypes';
import { IsDate, IsEnum, IsString } from 'class-validator';

export class RequestTollFeeData {
  @IsString()
  vehicleType: string;

  @IsDate()
  checkInDate: Date;

  @IsDate()
  checkOutDate: Date;
}
