export interface User {
    id: number,
    email: string,
    username: string,
    firstname: string,
    lastname: string,
}

export interface Tag {
    name: string
}

export interface UserPreference {
    has_interest: boolean
}

export interface Paginated<T> {
    "content": T[],
    "pageable": any,
    "last": boolean,
    "totalPages": number,
    "totalElements": number,
    "first": boolean,
    "size": number,
    "number": number,
    "numberOfElements": number,
    "empty": boolean
}