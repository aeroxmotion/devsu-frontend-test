import {type IProduct} from '../../api';

export enum MainNavigatorRoute {
  ProductList = 'ProductList',
  ProductDetail = 'ProductDetail',
}

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      [MainNavigatorRoute.ProductList]: {};
      [MainNavigatorRoute.ProductDetail]: {product: IProduct};
    }
  }
}
