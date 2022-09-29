import { ROLES } from './rolesEnums.js';

export class User {

    userName = "";
    email = "";
    password  = "";
    role = ROLES.USER

    constructor(userName, email, password, role) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role;
    };
};