import { Body, Controller, Get, Post } from '@nestjs/common';

import { AssetsPresenter } from './assets.presenter';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  async create(@Body() createAssetDto: CreateAssetDto) {
    const asset = await this.assetsService.create(createAssetDto);
    return new AssetsPresenter(asset);
  }

  @Get()
  findAll() {
    return this.assetsService.findAll();
  }
}
