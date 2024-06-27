import {HTTPBaseClient} from '../BaseClient';
import {IProduct} from './ProductClient.types';
import {BASE_HTTP_API_URL} from '../../../constants';

export class HTTPProductClient extends HTTPBaseClient {
  constructor() {
    super(BASE_HTTP_API_URL);
  }

  getList() {
    return this.get<IProduct[]>('products');
  }

  addNewProduct(product: IProduct) {
    return this.post<IProduct>('products', product);
  }

  updateProduct({id, ...product}: IProduct) {
    return this.put<IProduct>(`products/${encodeURIComponent(id)}`, product);
  }

  verifyProductID(productID: string) {
    return this.get<boolean>(
      `products/verification/${encodeURIComponent(productID)}`,
    );
  }
}
