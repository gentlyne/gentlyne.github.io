import { ProductType } from 'src/entities/Product';
import { UserType } from 'src/entities/User';

export interface IAccountService {
  setUserDiscount(userType: UserType, discount: number): Promise<void>;

  setProductDiscount(userType: UserType, productType: ProductType, discount: number): Promise<void>;

  getTotalDiscount(userType: UserType, productType: ProductType): Promise<number>;
}
