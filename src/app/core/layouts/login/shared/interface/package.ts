import { Module } from "./module";

export interface Package {
    id: string;
    code: string;
    name: string;
    description: string;
    module: Module[];
}