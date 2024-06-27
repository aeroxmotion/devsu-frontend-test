import {UseControllerProps} from 'react-hook-form';

import {IProduct} from '../../api';
import {computeNextDateRevision, validateProductID} from './utils';

export const MINIMUM_RELEASE_DATE = new Date();

export const INITIAL_FORM_DEFAULT_VALUES: IProduct = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: new Date(),
  date_revision: computeNextDateRevision(new Date()),
};

export const FORM_RULES: Record<
  keyof IProduct,
  UseControllerProps<any>['rules']
> = {
  id: {
    required: 'El campo ID es requerido',
    minLength: {
      message: 'El campo ID no debe tener menos de 3 caracteres',
      value: 3,
    },
    maxLength: {
      message: 'El campo ID no debe tener más de 10 caracteres',
      value: 10,
    },
    validate: validateProductID,
  },
  name: {
    required: 'El campo Nombre es requerido',
    minLength: {
      message: 'El campo Nombre no debe tener menos de 5 caracteres',
      value: 5,
    },
    maxLength: {
      message: 'El campo Nombre no debe tener más de 100 caracteres',
      value: 100,
    },
  },
  description: {
    required: 'El campo Descripción es requerido',
    minLength: {
      message: 'El campo Descripción no debe tener menos de 10 caracteres',
      value: 10,
    },
    maxLength: {
      message: 'El campo Descripción no debe tener más de 200 caracteres',
      value: 200,
    },
  },
  logo: {
    required: 'El campo Logo es requerido',
  },
  date_release: {
    required: 'El campo Fecha Liberación es requerido',
  },
  date_revision: {
    required: 'El campo Fecha Revisión es requerido',
  },
};
