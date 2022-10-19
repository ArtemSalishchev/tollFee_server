import { TimeTracker } from './../../Core/TimeTracker/TimeTracker';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { FeeCalculator } from 'src/Core/FeeCalculator';
import { HolidaysTracker } from 'src/Core/HolidaysTracker';
import { VehicleFactory } from 'src/Core/Vehicle';
import { FeeCalculatorController } from './feeCalculator.controller';
import { FeeCalculatorService } from './feeCalculator.service';

@Module({
  controllers: [FeeCalculatorController],
  providers: [
    FeeCalculatorService,
    VehicleFactory,
    FeeCalculator,
    HolidaysTracker,
    TimeTracker,
  ],
  imports: [HttpModule],
})
export class FeeCalculatorModule {}
