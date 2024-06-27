import {type IProduct} from '../../../../api';

export interface ProductItemProps {
  product: IProduct;
  onItemPress: (product: IProduct) => void;
}
