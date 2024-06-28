import 'react-native';
import React from 'react';
import {setupServer} from 'msw/node';
import {HttpResponse, http} from 'msw';
import {QueryClientProvider} from 'react-query';
import {describe, it, expect, jest} from '@jest/globals';
import {act, fireEvent, render} from '@testing-library/react-native';

import {sleep} from './utils';
import {queryClient} from '../src';
import {ProductListScreen} from '../src/screens';
import {BASE_HTTP_API_URL} from '../src/constants';

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator() {},
}));

jest.mock('@react-navigation/native', () => {
  const navigateMock = jest.fn();

  return {
    useNavigation() {
      return {
        navigate: navigateMock,
      };
    },
  };
});

describe('ProductList', () => {
  it('should render empty list component when no products are found', async () => {
    const server = setupServer(
      http.get(`${BASE_HTTP_API_URL}/products`, () =>
        HttpResponse.json({data: []}),
      ),
    );

    server.listen();

    const {getByTestId, getByText, getByPlaceholderText} = render(
      <QueryClientProvider client={queryClient}>
        <ProductListScreen />
      </QueryClientProvider>,
    );

    expect(getByTestId('product-list-loading')).toBeDefined();

    await act(() => sleep(50));

    expect(getByText('No se encontraron productos.')).toBeDefined();
    expect(getByPlaceholderText('Búsqueda...')).toBeDefined();
    expect(getByText('Agregar')).toBeDefined();

    server.close();
  });

  it('should render a list of products', async () => {
    const server = setupServer(
      http.get(`${BASE_HTTP_API_URL}/products`, () =>
        HttpResponse.json({
          data: [
            {id: 'ID_1', name: 'Producto 1'},
            {id: 'ID_2', name: 'Producto 2'},
          ],
        }),
      ),
    );

    server.listen();

    const {getByTestId, getByText, getByPlaceholderText} = render(
      <QueryClientProvider client={queryClient}>
        <ProductListScreen />
      </QueryClientProvider>,
    );

    expect(getByTestId('product-list-loading')).toBeDefined();

    await act(() => sleep(50));

    expect(getByText('ID: ID_1')).toBeDefined();
    expect(getByText('Producto 1')).toBeDefined();

    expect(getByText('ID: ID_2')).toBeDefined();
    expect(getByText('Producto 2')).toBeDefined();

    expect(getByPlaceholderText('Búsqueda...')).toBeDefined();
    expect(getByText('Agregar')).toBeDefined();
    expect(() => getByText('No se encontraron productos.')).toThrow();

    server.close();
  });

  it('should redirect to new product screen', async () => {
    const {getByText} = render(
      <QueryClientProvider client={queryClient}>
        <ProductListScreen />
      </QueryClientProvider>,
    );
    const navigateMock = require('@react-navigation/native').useNavigation()
      .navigate;

    expect(navigateMock).not.toBeCalled();

    fireEvent.press(getByText('Agregar'));

    expect(navigateMock).toBeCalledWith('NewProduct', {});
  });
});
