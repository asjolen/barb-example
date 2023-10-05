export interface IApiService {
    defaultHeaders: {
        "Content-Type": string;
        "Authorization": string | null;
    }

    errorInterceptor: () => void;
    get: (model: string, path: string[], data?: any) => Promise<any>;
    post: (model: string, path: string[], data: any) => Promise<any>;
    put: (model: string, path: string[], data: any) => Promise<any>;
    delete: (model: string, path: string[]) => Promise<any>;
}
