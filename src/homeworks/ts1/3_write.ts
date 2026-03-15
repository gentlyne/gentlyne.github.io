/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
export type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

export type Operation = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost' | 'Profit';
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
const randomId = (): string => Math.random().toString(36).slice(2, 10);
const randomName = (prefix: string): string => `${prefix} ${Math.floor(Math.random() * 1000)}`;
const randomPhoto = (): string => `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/200/200`;
const randomPrice = (min = 10, max = 500): number => +(Math.random() * (max - min) + min).toFixed(2);

const createRandomCategory = (): Category => ({
  id: randomId(),
  name: randomName('Category'),
  photo: Math.random() > 0.5 ? randomPhoto() : undefined,
});

export const createRandomProduct = (createdAt: string): Product => {
  const category = createRandomCategory();
  return {
    id: randomId(),
    name: randomName('Product'),
    photo: randomPhoto(),
    desc: Math.random() > 0.5 ? `Description for ${Math.floor(Math.random() * 100)}` : undefined,
    createdAt,
    oldPrice: Math.random() > 0.5 ? randomPrice(200, 500) : undefined,
    price: randomPrice(50, 300),
    category,
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const category = createRandomCategory();
  const type = Math.random() > 0.5 ? ('Cost' as const) : ('Profit' as const);
  return {
    id: randomId(),
    name: randomName(type),
    desc: Math.random() > 0.5 ? `Description for ${Math.floor(Math.random() * 100)}` : undefined,
    createdAt,
    amount: randomPrice(10, 1000),
    category,
    type,
  };
};
