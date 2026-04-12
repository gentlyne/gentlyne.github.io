import { AccountServiceImpl } from './impls/AccountServiceImpl';
import { AccountRepository } from '../../repositories/AccountRepository';
import { ProductType } from 'src/entities/Product';
import { UserType } from 'src/entities/user';

describe('AccountService', () => {
  let repository: jest.Mocked<AccountRepository>;
  let service: AccountServiceImpl;

  beforeEach(() => {
    repository = {
      setUserDiscount: jest.fn(),
      getUserDiscount: jest.fn(),
      setProductDiscount: jest.fn(),
      getProductDiscount: jest.fn(),
    };

    service = new AccountServiceImpl(repository);
  });

  test('should set user discount', async () => {
    await service.setUserDiscount(UserType.Gold, 10);

    expect(repository.setUserDiscount).toHaveBeenCalledWith(UserType.Gold, 10);
  });

  test('should set product discount', async () => {
    await service.setProductDiscount(UserType.Premium, ProductType.Car, 15);

    expect(repository.setProductDiscount).toHaveBeenCalledWith(UserType.Premium, ProductType.Car, 15);
  });

  test('should calculate total discount', async () => {
    repository.getUserDiscount.mockResolvedValue(10);
    repository.getProductDiscount.mockResolvedValue(5);

    const result = await service.getTotalDiscount(UserType.Standard, ProductType.Food);

    expect(result).toBe(15);
  });

  test('should return only user discount if no product discount', async () => {
    repository.getUserDiscount.mockResolvedValue(10);
    repository.getProductDiscount.mockResolvedValue(0);

    const result = await service.getTotalDiscount(UserType.Standard, ProductType.Toy);

    expect(result).toBe(10);
  });

  test('should throw error for negative discount', async () => {
    await expect(service.setUserDiscount(UserType.Gold, -10)).rejects.toThrow('Discount must be positive');
  });
});
