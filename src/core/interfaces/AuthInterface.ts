import { ReactNode } from "react";

export interface SignInCredentials {
    username: string
    password: string;
}

export interface SignUpRequest{
    firstname: string
    lastname: string
    email: string
    username: string
    password: string;
    dob: string;
}

export interface SignInRequest {
    email: string;
    password: string;
}

export interface AuthWrapper { 
    form:ReactNode;
    title:string;
    description: string;
}