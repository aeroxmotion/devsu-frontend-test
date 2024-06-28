import {useMutation} from 'react-query';
import Toast from 'react-native-toast-message';

import {queryClient} from '../queryClient';
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
    onError() {
      Toast.show({
        type: 'error',
        text1: 'Ocurrió un error al eliminar el producto.',
      });
    },
  });
