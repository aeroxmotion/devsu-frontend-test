import {useQuery} from 'react-query';
import Toast from 'react-native-toast-message';

import {HTTPProductClient} from '../api';

export const PRODUCT_LIST_QUERY_KEY = 'product-list';

const httpProductClient = new HTTPProductClient();

export const useGetProductList = () =>
  useQuery(PRODUCT_LIST_QUERY_KEY, () => httpProductClient.getList(), {
    onError() {
      Toast.show({
        type: 'error',
        text1: 'Ocurrió un error al cargar los productos.',
      });
    },
  });
