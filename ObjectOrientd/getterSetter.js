class Product{
    constructor(access, password){
        this.access = access;
        this.password = password
    }

    get access(){
        return `${this._access.toUpperCase()}`
    }

    set access(value){
        this._access = value
    }

    get password(){
        return `${this._password.toUpperCase()}`
    }

    set password(value){
        this._password = value
    }
}

const partial = new Product("along", "123back");
// console.log(partial.password);
// console.log(partial.access)

class Binding{
    constructor(){
        this.content = "";
        this.date = Date.now();
    }

    get bind(){
        return this._date
    }

    set bind(value){
        this.content = value;
        this._date = Date.now();
    }
}

const used = new Binding();
console.log(used.bind)

class AccessControl{
    constructor(username){
        this.username = username
    }

    get user(){
        return `${this.username}is in database.`
    }

    set user(value){
        if(value >= 1){
            this.username = value
        }
    }
}

const used2 = new AccessControl("partial")
console.log(used2.user)