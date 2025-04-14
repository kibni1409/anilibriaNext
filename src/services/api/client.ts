import axios, { 
  AxiosInstance, 
  AxiosRequestConfig, 
  AxiosResponse, 
  AxiosError, 
  InternalAxiosRequestConfig 
} from 'axios';
import { API_CONFIG } from '@/config/api.config';

interface RequestConfig extends AxiosRequestConfig {
  headers?: Record<string, string>;
}

class ApiClient {
  private static instance: ApiClient;
  private api: AxiosInstance;

  private constructor() {
    this.api = axios.create({
      baseURL: API_CONFIG.baseUrl,
      timeout: API_CONFIG.timeout,
      headers: API_CONFIG.headers
    });

    this.setupInterceptors();
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  private setupInterceptors(): void {
    this.api.interceptors.request.use(
      this.handleRequest,
      this.handleRequestError
    );

    this.api.interceptors.response.use(
      this.handleResponse,
      this.handleResponseError
    );
  }

  private handleRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // Здесь можно добавить общую логику для всех запросов
    // Например, добавление токена авторизации
    return config;
  };

  private handleRequestError = (error: AxiosError): Promise<never> => {
    // Обработка ошибок запроса
    return Promise.reject(this.normalizeError(error));
  };

  private handleResponse = <T>(response: AxiosResponse<T>): T => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return response?.data?.data ? response.data : response;
  };

  private handleResponseError = (error: AxiosError): Promise<never> => {
    // Обработка ошибок ответа
    return Promise.reject(this.normalizeError(error));
  };

  private normalizeError(error: AxiosError): Error {
    if (error.response) {
      // Ошибка от сервера с ответом
      return new Error(
        `Server Error: ${error.response.status} ${JSON.stringify(error.response.data)}`
      );
    } else if (error.request) {
      // Ошибка без ответа от сервера
      return new Error('No response received from server');
    } else {
      // Ошибка настройки запроса
      return new Error(`Request Error: ${error.message}`);
    }
  }

  public async get<T>(url: string, config?: RequestConfig): Promise<T> {
    return this.api.get<T, AxiosResponse<T>>(url, config).then(this.handleResponse);
  }

  public async post<T, D = unknown>(
    url: string, 
    data?: D, 
    config?: RequestConfig
  ): Promise<T> {
    return this.api.post<T, AxiosResponse<T>, D>(url, data, config).then(this.handleResponse);
  }

  public async put<T, D = unknown>(
    url: string, 
    data?: D, 
    config?: RequestConfig
  ): Promise<T> {
    return this.api.put<T, AxiosResponse<T>, D>(url, data, config).then(this.handleResponse);
  }

  public async patch<T, D = unknown>(
    url: string, 
    data?: D, 
    config?: RequestConfig
  ): Promise<T> {
    return this.api.patch<T, AxiosResponse<T>, D>(url, data, config).then(this.handleResponse);
  }

  public async delete<T>(url: string, config?: RequestConfig): Promise<T> {
    return this.api.delete<T, AxiosResponse<T>>(url, config).then(this.handleResponse);
  }
}

// Создаем и экспортируем экземпляр класса
export const apiClient = ApiClient.getInstance();

// Экспортируем класс по умолчанию для возможности наследования
export default ApiClient; 