import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehiclesDto } from './dto/create-vehicle.dto';
import { Vehicle } from './vehicle.entity';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  //   @HttpCode(HttpStatus.CREATED)
  async create(@Body() CreateVehicleDto: CreateVehiclesDto): Promise<Vehicle> {
    try {
      const createVehicle = await this.vehicleService.create(CreateVehicleDto);

      return createVehicle;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw error;
      }
    }
  }

  @Get()
  //   @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Vehicle[]> {
    try {
      const Vehicle = await this.vehicleService.findAll();
      return Vehicle;
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  //   @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string): Promise<Vehicle> {
    try {
      const Vehicle = await this.vehicleService.findOne(id);
      return Vehicle;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw error;
      }
    }
  }

  @Patch(':id')
  //   @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ): Promise<Vehicle> {
    try {
      const updatedVehicle = await this.vehicleService.update(
        id,
        updateVehicleDto,
      );
      return updatedVehicle;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw error;
      }
    }
  }

  @Delete(':id')
  //   @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.vehicleService.remove(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw error;
      }
    }
  }
}
