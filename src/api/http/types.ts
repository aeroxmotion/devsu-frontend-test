export interface DefaultHTTPResponse<T> {
  data: T;
  name?: string; // In case of `error`
  message?: string;
}
