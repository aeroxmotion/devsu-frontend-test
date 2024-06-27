import {useMutation} from 'react-query';
import Toast from 'react-native-toast-message';

import {queryClient} from '../../App';
import {HTTPProductClient, type IProduct} from '../api';
import {PRODUCT_LIST_QUERY_KEY} from './useGetProductList';

const httpProductClient = new HTTPProductClient();

export const useAddNewProduct = () =>
  useMutation({
    mutationFn(product: IProduct) {
      return httpProductClient.addNewProduct(product);
    },
    onSuccess() {
      queryClient.invalidateQueries(PRODUCT_LIST_QUERY_KEY);
    },
    onError() {
      Toast.show({
        type: 'error',
        text1: 'Ocurrió un error al agregar el nuevo producto.',
      });
    },
  });
