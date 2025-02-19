import { AssetsPresenter } from '../assets/assets.presenter';
import { Asset } from '../assets/entities/asset.entity';
import { Order } from '../orders/entities/order.entity';

export class OrderPresenter {
  constructor(private order: Order & { asset: Asset }) {}

  toJSON() {
    return {
      _id: this.order._id,
      asset: new AssetsPresenter(this.order.asset).toJSON(),
      price: this.order.price,
      status: this.order.status,
    };
  }
}