import {useMemo} from 'react';

import {IProduct} from '../../../api';

export const useFilterProductList = (
  products: IProduct[] | undefined,
  searchCriteria: string,
): IProduct[] =>
  useMemo(() => {
    if (!products) {
      return [];
    }

    if (!searchCriteria) {
      return products;
    }

    return products.filter(product =>
      product.name.toLowerCase().includes(searchCriteria.toLowerCase()),
    );
  }, [products, searchCriteria]);
