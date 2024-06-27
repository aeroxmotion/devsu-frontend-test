import {IProduct} from '../../api';

export interface ProductFormViewProps {
  title: string;
  product?: IProduct;
  onFormSubmit: (product: IProduct) => unknown;
}
