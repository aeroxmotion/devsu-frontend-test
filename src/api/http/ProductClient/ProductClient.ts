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
}
