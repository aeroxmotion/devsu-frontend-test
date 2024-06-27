import ky from 'ky';

import {IProduct} from './ProductClient.types';
import {BASE_HTTP_API_URL} from '../../../constants';
import {DefaultHTTPResponse} from '../types';

export class HTTPProductClient {
  private _client = ky.extend({
    prefixUrl: BASE_HTTP_API_URL,
  });

  getList() {
    return this._client.get('products').json<DefaultHTTPResponse<IProduct[]>>();
  }

  addNewProduct(product: IProduct) {
    return this._client
      .post('products', {
        json: product,
      })
      .json<DefaultHTTPResponse<IProduct>>();
  }

  updateProduct({id, ...product}: IProduct) {
    return this._client
      .put(`products/${encodeURIComponent(id)}`, {
        json: product,
      })
      .json<DefaultHTTPResponse<Omit<IProduct, 'id'>>>();
  }

  verifyProductID(productID: IProduct['id']) {
    return this._client
      .get(`products/verification/${encodeURIComponent(productID)}`)
      .json<boolean>();
  }

  deleteProduct(productID: IProduct['id']) {
    return this._client
      .delete(`products/${encodeURIComponent(productID)}`)
      .json<DefaultHTTPResponse<never>>();
  }
}
