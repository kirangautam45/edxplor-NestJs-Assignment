import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { VehicleStatus } from '../vehicle-status.enum';

export class CreateVehiclesDto {
  @IsNotEmpty()
  @IsString()
  make: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  year: string;

  @IsNotEmpty()
  @IsString()
  registration_number: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsEnum(VehicleStatus)
  current_status: VehicleStatus;
}
