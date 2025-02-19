import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Asset } from 'src/assets/entities/asset.entity';

import { CreateOrderDto } from './dto/create-order.dto';
import { Order, OrderStatus } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderSchema: Model<Order>,
  ) {}
  create(createOrderDto: CreateOrderDto) {
    return this.orderSchema.create({
      asset: createOrderDto.assetId,
      price: createOrderDto.price,
      status: OrderStatus.OPEN,
    });
  }

  findAll() {
    return this.orderSchema.find()
    .populate('asset')
    .lean() as Promise<(Order & { asset: Asset })[]>;
  }
}
