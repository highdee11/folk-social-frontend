import { User } from "./ModelInterface";

export interface AuthSliceInterface {
    auth_token: string|null,
    user: User|null
}