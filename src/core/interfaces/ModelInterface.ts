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
    content: T[],
    pageable: any,
    last: boolean,
    totalPages: number,
    totalElements: number,
    first: boolean,
    size: number,
    number: number,
    numberOfElements: number,
    empty: boolean
}

export interface PostMedia {
    type: string,
    url: string
}

export interface Post {
    id: number;
    content: string;
    author: User;
    created_at: string;
    media: PostMedia[];
    parent_post?: Post|null;
    tags: Tag[];
    since: string;
}