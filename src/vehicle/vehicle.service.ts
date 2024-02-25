import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';
import { CreateVehiclesDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  async create(createVehicleDto: CreateVehiclesDto): Promise<Vehicle> {
    try {
      const Vehicle = this.vehicleRepository.create(createVehicleDto);
      return await this.vehicleRepository.save(Vehicle);
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Vehicle[]> {
    try {
      return await this.vehicleRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<Vehicle> {
    try {
      const vehicle = await this.vehicleRepository.findOne(id);

      if (!vehicle) {
        throw new NotFoundException(`Vehicle with id ${id} not found`);
      }
      return vehicle;
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: string,
    updateVehicleDto: UpdateVehicleDto,
  ): Promise<Vehicle> {
    try {
      const existingVehicle = await this.findOne(id);

      if (!existingVehicle) {
        throw new NotFoundException(`Vehicle with ID ${id} not found`);
      }

      await this.vehicleRepository.update(id, updateVehicleDto);
      return this.findOne(id);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await this.findOne(id);
      await this.vehicleRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
