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
    activeType = "Y";
    dept: Dept = new Dept;
    createdDate = "2016-10-07";
}