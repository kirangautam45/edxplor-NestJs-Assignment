import { IsEnum, IsOptional, IsString } from 'class-validator';
import { VehicleStatus } from '../vehicle-status.enum';

export class UpdateVehicleDto {
  @IsOptional()
  @IsString()
  make?: string;

  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsString()
  year?: string;

  @IsOptional()
  @IsString()
  registration_number?: string;

  @IsEnum(VehicleStatus)
  current_status?: VehicleStatus;

  @IsOptional()
  @IsString()
  location?: string;
}
