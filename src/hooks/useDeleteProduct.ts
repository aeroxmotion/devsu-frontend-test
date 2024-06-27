import {useMutation} from 'react-query';

import {queryClient} from '../../App';
import {HTTPProductClient, type IProduct} from '../api';
import {PRODUCT_LIST_QUERY_KEY} from './useGetProductList';

const httpProductClient = new HTTPProductClient();

export const useDeleteProduct = () =>
  useMutation({
    mutationFn(productID: IProduct['id']) {
      return httpProductClient.deleteProduct(productID);
    },
    onSuccess() {
      queryClient.invalidateQueries(PRODUCT_LIST_QUERY_KEY);
    },
  });
