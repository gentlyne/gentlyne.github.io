import { AccountRepository } from '..';
import { ProductType } from 'src/entities/Product';
import { UserType } from 'src/entities/user';

export class InMemoryAccountRepository implements AccountRepository {
  private userDiscounts = new Map<UserType, number>();

  private productDiscounts = new Map<string, number>();

  async setUserDiscount(userType: UserType, discount: number): Promise<void> {
    this.userDiscounts.set(userType, discount);
  }

  async getUserDiscount(userType: UserType): Promise<number> {
    return this.userDiscounts.get(userType) ?? 0;
  }

  async setProductDiscount(userType: UserType, productType: ProductType, discount: number): Promise<void> {
    const key = `${userType}_${productType}`;
    this.productDiscounts.set(key, discount);
  }

  async getProductDiscount(userType: UserType, productType: ProductType): Promise<number> {
    const key = `${userType}_${productType}`;
    return this.productDiscounts.get(key) ?? 0;
  }
}
