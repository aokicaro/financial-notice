import { Asset } from './entities/asset.entity';

export class AssetsPresenter {
  constructor(private asset: Asset) {}

  toJSON() {
    return {
      _id: this.asset._id,
      symbol: this.asset.symbol,
    };
  }
}