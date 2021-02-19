export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH';

export type AxiosRequestConfig = {
  url: string;
  method?: Method;
  data?: any;
  params?: any;
  headers?: any;
  responseType?: XMLHttpRequestResponseType;
};

export type AxiosResponse = {
  data: any; // 服务端返回的数据
  status: number; // HTTP 状态码
  statusText: string; // 状态消息
  headers: any; // 响应头
  config: AxiosRequestConfig; // 请求配置对象
  request: any; // 请求的 XMLHttpRequest 对象实例
};

export interface AxiosError extends Error {
  config: AxiosRequestConfig;
  code?: string | null | number;
  request?: any;
  response?: AxiosResponse;
}

export interface AxiosPromise extends Promise<AxiosResponse> {}
