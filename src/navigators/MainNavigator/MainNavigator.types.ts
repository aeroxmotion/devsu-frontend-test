import {type IProduct} from '../../api';

export enum MainNavigatorRoute {
  NewProduct = 'NewProduct',
  ProductList = 'ProductList',
  EditProduct = 'EditProduct',
  ProductDetail = 'ProductDetail',
}

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      [MainNavigatorRoute.NewProduct]: {};
      [MainNavigatorRoute.ProductList]: {};
      [MainNavigatorRoute.EditProduct]: {product: IProduct};
      [MainNavigatorRoute.ProductDetail]: {product: IProduct};
    }
  }
}
