import 'react-native';

import React from 'react';
import {QueryClientProvider} from 'react-query';
import {describe, it, expect, jest} from '@jest/globals';
import {act, fireEvent, render} from '@testing-library/react-native';

import {queryClient} from '../src';
import {ProductDetailScreen} from '../src/screens';
import {setupServer} from 'msw/node';
import {HttpResponse, http} from 'msw';
import {BASE_HTTP_API_URL} from '../src/constants';
import {sleep} from './utils';

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator() {},
}));

jest.mock('@react-navigation/native', () => {
  const navigationMock = jest.fn();

  return {
    useNavigation() {
      return {
        navigate: navigationMock,
        goBack: jest.fn(),
      };
    },
    useRoute() {
      return {
        params: {
          product: {
            id: 'id-456',
            name: 'Tarjeta de crédito',
            description: 'Promoción tarjeta de crédito',
            logo: 'https://example.com/logo',
            date_release: new Date().toISOString(),
            date_revision: new Date().toISOString(),
          },
        },
      };
    },
  };
});

describe('ProductDetail', () => {
  it('should render product values correctly', () => {
    const {getByTestId, getByText, getAllByText} = render(
      <QueryClientProvider client={queryClient}>
        <ProductDetailScreen />
      </QueryClientProvider>,
    );

    expect(() => getByText('ID: id-456')).not.toThrow();

    expect(() => getByText('Nombre')).not.toThrow();
    expect(() => getByText('Tarjeta de crédito')).not.toThrow();

    expect(() => getByText('Descripción')).not.toThrow();
    expect(() => getByText('Promoción tarjeta de crédito')).not.toThrow();

    expect(() => getByText('Logo')).not.toThrow();
    expect(getByTestId('image-logo').props.source.uri).toEqual(
      'https://example.com/logo',
    );

    expect(() => getByText('Fecha liberación')).not.toThrow();
    expect(() => getByText('Fecha revisión')).not.toThrow();
    expect(getAllByText(/^\d{2}\/\d{2}\/\d{4}$/).length).toBe(2);
  });

  it('should retirect to edit product screen', () => {
    const {getByText} = render(
      <QueryClientProvider client={queryClient}>
        <ProductDetailScreen />
      </QueryClientProvider>,
    );

    const navigateMock = require('@react-navigation/native').useNavigation()
      .navigate;

    expect(navigateMock).not.toBeCalled();

    fireEvent.press(getByText('Editar'));

    expect(navigateMock).toBeCalledWith(
      'EditProduct',
      expect.objectContaining({
        product: {
          id: 'id-456',
          name: 'Tarjeta de crédito',
          description: 'Promoción tarjeta de crédito',
          logo: 'https://example.com/logo',
          date_release: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T/),
          date_revision: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T/),
        },
      }),
    );
  });

  it('should delete product', async () => {
    const requestDone = jest.fn();

    const server = setupServer(
      http.delete(`${BASE_HTTP_API_URL}/products/:id`, ({params}) => {
        requestDone(params.id);

        return HttpResponse.json({data: {}});
      }),
    );

    server.listen();

    const {getByTestId, getByText} = render(
      <QueryClientProvider client={queryClient}>
        <ProductDetailScreen />
      </QueryClientProvider>,
    );

    expect(() => getByTestId('delete-product-bottom-sheet')).toThrow();

    fireEvent.press(getByText('Eliminar'));

    expect(() => getByTestId('delete-product-bottom-sheet')).not.toThrow();

    fireEvent.press(getByText('Cancelar'));

    expect(() => getByTestId('delete-product-bottom-sheet')).toThrow();

    fireEvent.press(getByText('Eliminar'));
    fireEvent.press(getByTestId('confirm-deletion-btn'));

    await act(() => sleep(50));

    expect(requestDone).toBeCalledWith('id-456');
  });
});
