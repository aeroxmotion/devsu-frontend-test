import {useMutation} from 'react-query';

import {queryClient} from '../../App';
import {HTTPProductClient, IProduct} from '../api';
import {PRODUCT_LIST_QUERY_KEY} from './useGetProductList';

const httpProductClient = new HTTPProductClient();

export const useUpdateProduct = () =>
  useMutation({
    mutationFn(product: IProduct) {
      return httpProductClient.updateProduct(product);
    },
    onSuccess() {
      queryClient.invalidateQueries(PRODUCT_LIST_QUERY_KEY);
    },
  });
