import {type ReactNode} from 'react';

export interface ProductDefailFieldProps {
  label: ReactNode;
  value: ReactNode | (() => ReactNode);
}
