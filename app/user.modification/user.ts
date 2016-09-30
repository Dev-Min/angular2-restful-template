/*
* http://usejsdoc.org/
*/
import { Dept } from './dept';

export class User {
    id: number;
    email: string;
    password: string;
    name: string;
    age: number;
    activeType: string;
    dept: Dept;
    createdData: string;
}