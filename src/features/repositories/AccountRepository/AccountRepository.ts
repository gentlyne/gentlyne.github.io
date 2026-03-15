import { ProductType } from 'src/entities/Product';
import { UserType } from 'src/entities/User';

export interface AccountRepository {
  setUserDiscount(userType: UserType, discount: number): Promise<void>;

  getUserDiscount(userType: UserType): Promise<number>;

  setProductDiscount(userType: UserType, productType: ProductType, discount: number): Promise<void>;

  getProductDiscount(userType: UserType, productType: ProductType): Promise<number>;
}
