import axios from "axios";
import {IApiService} from "../interfaces/IExampleInterface";
import {config} from "../../config";

export class ApiService implements IApiService {
  getAccessTokenSilently: any;
  defaultHeaders: { "Content-Type": string; Authorization: string | null };

  constructor() {
    this.defaultHeaders = {
      "Content-Type": "application/json",
      "Authorization": null
    }

    this.errorInterceptor();
  }

  private createCallableUrl(model: string, path: string[]) {
    const baseUrl = config.api + "/";
    return baseUrl + model + "/" + path.join("/");
  }

  private async setAccessTokenHeader() {
    // Get token from localStorage
    const token = localStorage.getItem("token");
    this.defaultHeaders.Authorization = `Bearer ${token}`;
  }

  errorInterceptor() {
    axios.interceptors.response.use(
      response => {
        return response
      },
      function (error) {
        return Promise.reject(error)
      }
    )
  }

  get = async (model: string, path: string[], data?: any) => {
    if (this.getAccessTokenSilently) {
      await this.setAccessTokenHeader();
    }

    return axios.get(this.createCallableUrl(model, path), { headers: this.defaultHeaders, params: data }).then((response) => {
      return response;
    }).catch((error) => {
      return error.response;
    });
  }

  post = async (model: string, path: string[], data: any) => {
    if (this.getAccessTokenSilently) {
      await this.setAccessTokenHeader();
    }

    return axios.post(this.createCallableUrl(model, path), data, { headers: this.defaultHeaders }).then((response) => {
      return response;
    }).catch((error) => {
      return error.response;
    });
  }

  put = async (model: string, path: string[], data: any) => {
    if (this.getAccessTokenSilently) {
      await this.setAccessTokenHeader();
    }

    return axios.put(this.createCallableUrl(model, path), data, { headers: this.defaultHeaders }).then((response) => {
      return response;
    }).catch((error) => {
      return error.response;
    });
  }

  delete = async (model: string, path: string[]) => {
    if (this.getAccessTokenSilently) {
      await this.setAccessTokenHeader();
    }

    return axios.delete(this.createCallableUrl(model, path), { headers: this.defaultHeaders }).then((response) => {
      return response;
    }).catch((error) => {
      return error.response;
    });
  }
}
