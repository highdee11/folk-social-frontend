export interface ApiServiceInterface {
    get<T>(url: string, params: Record<string, any>): Promise<void | T>;
    post<T, U>(url: string, body: U, params: Record<string, any>): Promise<void | T>
}

export interface DefaultRequestResponse<T = any> {
    code: String,
    message: String,
    data?: T
}