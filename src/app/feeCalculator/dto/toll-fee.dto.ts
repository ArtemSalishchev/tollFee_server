import { VehiclesTypes } from 'src/core/vehicle';
import { IsEnum, IsString, IsDateString } from 'class-validator';

export class RequestTollFeeData {
  @IsEnum(VehiclesTypes)
  vehicleType: string;

  @IsDateString()
  checkInDate: string;

  @IsDateString()
  checkOutDate: string;
}
