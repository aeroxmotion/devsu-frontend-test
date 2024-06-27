import debounce from 'lodash.debounce';
import {type Validate} from 'react-hook-form';

import {HTTPProductClient, type IProduct} from '../../api';

const YEAR_MILLISECONDS = 365 * 24 * 60 * 60 * 1000;

export const computeNextDateRevision = (releaseDate: Date) =>
  new Date(Number(releaseDate) + YEAR_MILLISECONDS);

export const validateProductID: Validate<IProduct['id'], {}> = debounce(
  async (productID: IProduct['id']) =>
    productID.length >= 3 &&
    productID.length <= 10 &&
    (await new HTTPProductClient().verifyProductID(productID))
      ? 'El ID no es válido'
      : undefined,
  300,
);