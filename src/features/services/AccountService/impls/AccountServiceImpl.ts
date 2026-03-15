import { IAccountService } from '../AccountService';
import { AccountRepository } from '../../../repositories/AccountRepository';
import { ProductType } from 'src/entities/Product';
import { UserType } from 'src/entities/User';

export class AccountServiceImpl implements IAccountService {
  constructor(private repository: AccountRepository) {}

  async setUserDiscount(userType: UserType, discount: number): Promise<void> {
    if (discount < 0) {
      throw new Error('Discount must be positive');
    }

    await this.repository.setUserDiscount(userType, discount);
  }

  async setProductDiscount(userType: UserType, productType: ProductType, discount: number): Promise<void> {
    if (discount < 0) {
      throw new Error('Discount must be positive');
    }

    await this.repository.setProductDiscount(userType, productType, discount);
  }

  async getTotalDiscount(userType: UserType, productType: ProductType): Promise<number> {
    const userDiscount = await this.repository.getUserDiscount(userType);

    const productDiscount = await this.repository.getProductDiscount(userType, productType);

    return userDiscount + productDiscount;
  }
}
