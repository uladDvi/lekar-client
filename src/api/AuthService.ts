import HttpClientService from "./HttpClientService";
import {Config} from "./types/config";

const config = <Config>{
    baseURL: ''
};

const authService = new HttpClientService(config);

export const userSignUp = (payload: any) => {
    return authService.httpClientService.post('', payload, {})
};