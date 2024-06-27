import {useQuery} from 'react-query';

import {HTTPProductClient} from '../api';

export const PRODUCT_LIST_QUERY_KEY = 'product-list';

const httpProductClient = new HTTPProductClient();

export const useGetProductList = () =>
  useQuery(PRODUCT_LIST_QUERY_KEY, () => httpProductClient.getList());
