import '@testing-library/react-native/extend-expect';

import 'react-native';
import React from 'react';
import {setupServer} from 'msw/node';
import {HttpResponse, http} from 'msw';
import {QueryClientProvider} from 'react-query';
import {act, fireEvent, render} from '@testing-library/react-native';
import {describe, it, expect, jest} from '@jest/globals';

import {queryClient} from '../src';
import {incrementYear, sleep} from './utils';
import {NewProductScreen} from '../src/screens';
import {BASE_HTTP_API_URL} from '../src/constants';

jest.mock('react-native-date-picker', () => () => {
  return null;
});

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator() {},
}));

jest.mock('@react-navigation/native', () => {
  const goBackMock = jest.fn();

  return {
    useNavigation() {
      return {
        goBack: goBackMock,
      };
    },
  };
});

jest.mock('react-native-toast-message', () => {
  const ToastMock: any = jest.fn();

  ToastMock.show = jest.fn();

  return ToastMock;
});

describe('NewProductScreen', () => {
  it('should render new product screen with its initial default form field values', () => {
    const {getByTestId} = render(
      <QueryClientProvider client={queryClient}>
        <NewProductScreen />
      </QueryClientProvider>,
    );

    expect(getByTestId('product-form-id')).toHaveDisplayValue('');
    expect(getByTestId('product-form-name')).toHaveDisplayValue('');
    expect(getByTestId('product-form-description')).toHaveDisplayValue('');
    expect(getByTestId('product-form-logo')).toHaveDisplayValue('');

    const dateRelease = getByTestId('product-form-date-release').props.value;

    expect(dateRelease).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);

    const expectedDayRevision = incrementYear(dateRelease);

    expect(getByTestId('product-form-date-revision')).toHaveDisplayValue(
      expectedDayRevision,
    );
  });

  it('should not send form on invalid values', async () => {
    let requestDone = jest.fn();

    const server = setupServer(
      http.get(`${BASE_HTTP_API_URL}/products/verification/:id`, () => {
        return HttpResponse.text('false');
      }),
      http.post(`${BASE_HTTP_API_URL}/products`, () => {
        requestDone();

        return HttpResponse.json({});
      }),
    );

    server.listen();

    const {getByText} = render(
      <QueryClientProvider client={queryClient}>
        <NewProductScreen />
      </QueryClientProvider>,
    );

    fireEvent.press(getByText('Enviar'));

    await act(() => sleep(300));

    expect(() => getByText('El campo ID es requerido')).not.toThrow();
    expect(() => getByText('El campo Nombre es requerido')).not.toThrow();
    expect(() => getByText('El campo Descripción es requerido')).not.toThrow();
    expect(() => getByText('El campo Logo es requerido')).not.toThrow();

    expect(requestDone).not.toBeCalled();

    server.close();
  });

  it('should send form on valid values', async () => {
    let actualFormValues: any;

    const server = setupServer(
      http.get(`${BASE_HTTP_API_URL}/products/verification/:id`, () =>
        HttpResponse.text('false'),
      ),
      http.post(`${BASE_HTTP_API_URL}/products`, async ({request}) => {
        actualFormValues = await request.json();

        return HttpResponse.json({data: actualFormValues});
      }),
    );

    server.listen();

    const {getByTestId, getByText} = render(
      <QueryClientProvider client={queryClient}>
        <NewProductScreen />
      </QueryClientProvider>,
    );

    fireEvent.changeText(getByTestId('product-form-id'), 'id-123');
    fireEvent.changeText(getByTestId('product-form-name'), 'Tarjeta débito');
    fireEvent.changeText(
      getByTestId('product-form-description'),
      'Cuota de manejo totalmente gratuita',
    );
    fireEvent.changeText(
      getByTestId('product-form-logo'),
      'https://example.com/logo.png',
    );

    fireEvent.press(getByText('Enviar'));

    await act(() => sleep(300));

    expect(actualFormValues).toEqual(
      expect.objectContaining({
        id: 'id-123',
        name: 'Tarjeta débito',
        description: 'Cuota de manejo totalmente gratuita',
        date_release: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T/),
        date_revision: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T/),
        logo: 'https://example.com/logo.png',
      }),
    );

    server.close();
  });
});
