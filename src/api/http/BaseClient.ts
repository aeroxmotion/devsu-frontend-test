import {type DefaultHTTPResponse} from './BaseClient.types';

export abstract class HTTPBaseClient {
  constructor(private _baseURL: string) {}

  async get<T>(path: string): Promise<DefaultHTTPResponse<T>> {
    const response = await fetch(this._getURL(path));

    return response.json();
  }

  private _getURL(path: string) {
    return `${this._baseURL}/${path}`;
  }
}
