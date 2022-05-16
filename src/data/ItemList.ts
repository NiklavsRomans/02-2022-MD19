export type ShoppingItems = {
    id: number
    title: string
    price: number
    imgSrc: string
    count: number
}

const shoppingItems: ShoppingItems[] = [
  {
    id: 1,
    title: 'Iphone X',
    price: 999,
    imgSrc: 'https://picsum.photos/200/300',
    count: 0,
  },
  {
    id: 2,
    title: 'Iphone 8',
    price: 640,
    imgSrc: 'https://picsum.photos/200/300',
    count: 0,
  },
  {
    id: 3,
    title: 'Iphone 6',
    price: 320,
    imgSrc: 'https://picsum.photos/200/300',
    count: 0,
  },
  {
    id: 4,
    title: 'Iphone 12',
    price: 864,
    imgSrc: 'https://picsum.photos/200/300',
    count: 0,
  },
  {
    id: 5,
    title: 'Galaxy Flip3 5G',
    price: 1520,
    imgSrc: 'https://picsum.photos/200/300',
    count: 0,
  },
  {
    id: 6,
    title: 'Redmi 9A',
    price: 120,
    imgSrc: 'https://picsum.photos/200/300',
    count: 0,
  },
  {
    id: 7,
    title: 'Galaxy S22+ 5G',
    price: 1062,
    imgSrc: 'https://picsum.photos/200/300',
    count: 0,
  },
  {
    id: 8,
    title: 'Xperia 5 III',
    price: 999,
    imgSrc: 'https://picsum.photos/200/300',
    count: 0,
  },
  {
    id: 9,
    title: 'Galaxy S20 FE 5G',
    price: 658.80,
    imgSrc: 'https://picsum.photos/200/300',
    count: 0,
  },
  {
    id: 10,
    title: 'Pixel 6',
    price: 798,
    imgSrc: 'https://picsum.photos/200/300',
    count: 0,
  },
  {
    id: 11,
    title: 'Iphone 12 mini',
    price: 744,
    imgSrc: 'https://picsum.photos/200/300',
    count: 0,
  },
  {
    id: 12,
    title: 'CAT S52',
    price: 336,
    imgSrc: 'https://picsum.photos/200/300',
    count: 0,
  },
  {
    id: 13,
    title: 'Poco F3',
    price: 396,
    imgSrc: 'https://picsum.photos/200/300',
    count: 0,
  },
];

export const shopItemsLength = shoppingItems.length;
export default shoppingItems;
