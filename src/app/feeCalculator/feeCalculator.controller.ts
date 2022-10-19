import { FeeCalculatorService } from './feeCalculator.service';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { RequestTollFeeData } from './_models/request-toll-fee-dto';

@Controller('tollFee')
export class FeeCalculatorController {
  constructor(private feeCalculatorService: FeeCalculatorService) {}

  @Post('')
  @HttpCode(200)
  public async calculateTollFee(
    @Body() body: RequestTollFeeData,
  ): Promise<number> {
    const { checkInDate, checkOutDate, vehicleType } = body;
    return this.feeCalculatorService.calculateTollFee(
      checkInDate,
      checkOutDate,
      vehicleType,
    );
  }
}
