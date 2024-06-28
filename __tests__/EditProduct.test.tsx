import '@testing-library/react-native/extend-expect';

import 'react-native';
import React from 'react';
import {setupServer} from 'msw/node';
import {HttpResponse, http} from 'msw';
import {QueryClientProvider} from 'react-query';
import {describe, it, expect, jest} from '@jest/globals';
import {act, fireEvent, render} from '@testing-library/react-native';

import {sleep} from './utils';
import {queryClient} from '../src';
import {EditProductScreen} from '../src/screens';
import {BASE_HTTP_API_URL} from '../src/constants';

jest.mock('react-native-date-picker', () => () => {
  return null;
});

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

describe('EditProduct', () => {
  it('should render fields with initial product values', () => {
    const {getByTestId} = render(
      <QueryClientProvider client={queryClient}>
        <EditProductScreen />
      </QueryClientProvider>,
    );

    expect(getByTestId('product-form-id')).toHaveDisplayValue('id-456');
    expect(getByTestId('product-form-name')).toHaveDisplayValue(
      'Tarjeta de crédito',
    );
    expect(getByTestId('product-form-description')).toHaveDisplayValue(
      'Promoción tarjeta de crédito',
    );
    expect(getByTestId('product-form-logo')).toHaveDisplayValue(
      'https://example.com/logo',
    );

    expect(getByTestId('product-form-date-release')).toHaveDisplayValue(
      /^\d{2}\/\d{2}\/\d{4}$/,
    );
    expect(getByTestId('product-form-date-revision')).toHaveDisplayValue(
      /^\d{2}\/\d{2}\/\d{4}$/,
    );
  });

  it('should empty initial product values (except for id & dates)', () => {
    const {getByTestId, getByText} = render(
      <QueryClientProvider client={queryClient}>
        <EditProductScreen />
      </QueryClientProvider>,
    );

    expect(getByTestId('product-form-id')).toHaveDisplayValue(/.+/);
    expect(getByTestId('product-form-name')).toHaveDisplayValue(/.+/);
    expect(getByTestId('product-form-description')).toHaveDisplayValue(/.+/);
    expect(getByTestId('product-form-logo')).toHaveDisplayValue(/.+/);

    fireEvent.press(getByText('Reiniciar'));

    expect(getByTestId('product-form-id')).toHaveDisplayValue(/.+/);
    expect(getByTestId('product-form-name')).toHaveDisplayValue('');
    expect(getByTestId('product-form-description')).toHaveDisplayValue('');
    expect(getByTestId('product-form-logo')).toHaveDisplayValue('');
  });

  it('should send updated product values', async () => {
    const requestDone = jest.fn();

    const server = setupServer(
      http.get(`${BASE_HTTP_API_URL}/products/verification/:id`, () => {
        return HttpResponse.text('false');
      }),
      http.put(
        `${BASE_HTTP_API_URL}/products/:id`,
        async ({params, request}) => {
          const body: any = await request.json();

          requestDone({...body, id: params.id});

          return HttpResponse.json({});
        },
      ),
    );

    server.listen();

    const {getByTestId, getByText} = render(
      <QueryClientProvider client={queryClient}>
        <EditProductScreen />
      </QueryClientProvider>,
    );

    fireEvent.changeText(getByTestId('product-form-name'), 'Tarjeta débito');
    fireEvent.changeText(
      getByTestId('product-form-description'),
      'Una nueva tarjeta de débito',
    );
    fireEvent.changeText(
      getByTestId('product-form-logo'),
      'https://example.com/nuevo-logo',
    );

    fireEvent.press(getByText('Enviar'));

    await act(() => sleep(300));

    expect(requestDone).toBeCalledWith(
      expect.objectContaining({
        id: 'id-456',
        name: 'Tarjeta débito',
        description: 'Una nueva tarjeta de débito',
        logo: 'https://example.com/nuevo-logo',
        date_release: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T/),
        date_revision: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T/),
      }),
    );

    server.close();
  });
});
