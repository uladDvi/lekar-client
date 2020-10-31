import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {Config} from "./types/config";

export default class HttpClientService {
    public httpClientService: AxiosInstance;
    constructor(config: Config) {
        this.httpClientService = axios.create(config);
        this.setResponseInterceptors();
        this.setAuthInterceptor();
    }

    private setResponseInterceptors() {
        this.httpClientService.interceptors.response.use(
            (response: AxiosResponse) => response.data,
            (error: AxiosError) => {
                console.error(error);
                return Promise.reject(error);
            },
        );
    }

    private setAuthInterceptor() {
        this.httpClientService.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                console.log('config');
                return config;
            },
        );
    }
}