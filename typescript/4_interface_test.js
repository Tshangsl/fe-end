"use strict";
class userServiceMysqlImpl {
    add(user) {
        console.log(`username+${user.getUsername()},password+${user.getPassword()}`);
        return true;
    }
    delete(userId) {
        throw new Error("Method not implemented.");
    }
    update(userId) {
        throw new Error("Method not implemented.");
    }
    get(username, password) {
        throw new Error("Method not implemented.");
    }
}
class User {
    constructor(username, password, userId) {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }
    setUserId(userId) {
        this.userId = userId;
    }
    getUserId() {
        return this.userId;
    }
    setUsername(username) {
        this.username = username;
    }
    getUsername() {
        return this.username;
    }
    setPassword(password) {
        this.password = password;
    }
    getPassword() {
        return this.password;
    }
}
let user1 = new User('lisi', '123456', '1');
let userMysql = new userServiceMysqlImpl();
