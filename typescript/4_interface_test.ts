// 抽象类有一个限制 类只能是单继承
interface UserService{
    add(user:User):boolean;
    delete(userId:string):boolean;
    update(userId:string):boolean;
    get(username:string,password:string):boolean;
}
class userServiceMysqlImpl implements UserService{
    add(user: User): boolean {
        console.log(`username+${user.getUsername()},password+${user.getPassword()}`);
        return true;
    }
    delete(userId: string): boolean {
        throw new Error("Method not implemented.");
    }
    update(userId: string): boolean {
        throw new Error("Method not implemented.");
    }
    get(username: string, password: string): boolean {
        throw new Error("Method not implemented.");
    }

}
class User{
    private userId:string;
    private username:string;
    private password:string;
    constructor(username:string,password:string,userId:string){
        this.userId = userId;
        this.username = username;
        this.password = password;
    }
    setUserId(userId:string){
        this.userId = userId;
    }
    getUserId(){
        return this.userId;
    }
    setUsername(username:string){
        this.username = username;
    }
    getUsername(){
        return this.username;
    }
    setPassword(password:string){
        this.password = password;
    }
    getPassword(){
        return this.password;
    }
}
let user1 = new User('lisi','123456','1');
let userMysql = new userServiceMysqlImpl();

