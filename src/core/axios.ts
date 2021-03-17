import axios, { AxiosRequestConfig } from 'axios';
import { ApiResponse } from '@/core/entities';

// export interface AxiosResponse<T = any>  {
//   data: T;
//   status: number;
//   statusText: string;
//   headers: any;
//   config: AxiosRequestConfig;
//   request?: any;
// }

const instance = axios.create({
  baseURL: '/api/'
});

/**
 * axios拦截器
 */
// axios.interceptors.request.use(config => {
//   config.url = `/api/${config.url}`;
//   return config;
// });

/**
 * TODO handle 错误异常
 */
/**
 * axios自定义封装
 */
const http = {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return new Promise((resolve, reject) => {
      instance
        .get(url, config)
        .then(res => {
          if (res.status === 200) {
            resolve({
              data: res.data.data,
              success: true,
              msg: res.statusText
            });
          } else {
            reject(res);
          }
        })
        .catch(error => reject(error));
    });
  },
  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return new Promise((resolve, reject) => {
      instance
        .post(url, data, config)
        .then(res => {
          if (res.status === 200) {
            resolve({
              data: res.data.data,
              success: true,
              msg: res.statusText
            });
          } else {
            reject(res);
          }
        })
        .catch(error => reject(error));
    });
  }
};

export default http;
