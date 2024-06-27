import {type DefaultHTTPResponse} from './BaseClient.types';

export abstract class HTTPBaseClient {
  constructor(private _baseURL: string) {}

  async get<T>(path: string): Promise<DefaultHTTPResponse<T>> {
    const response = await fetch(this._getURL(path));

    return response.json();
  }

  async post<T>(path: string, data: any): Promise<DefaultHTTPResponse<T>> {
    const response = await fetch(this._getURL(path), {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });

    return response.json();
  }

  async put<T>(path: string, data: any): Promise<DefaultHTTPResponse<T>> {
    const response = await fetch(this._getURL(path), {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(data),
    });

    return response.json();
  }

  private _getURL(path: string) {
    return `${this._baseURL}/${path}`;
  }
}
