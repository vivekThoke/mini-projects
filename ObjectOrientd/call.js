function Product(productName){
    this.productName = productName;
    // console.log("calling")
}


function productSeries(productName, stocks, invertory, manfacturedDate){
    Product.call(this, productName)
    this.stocks = stocks;
    this.invertory = invertory;
    this.manfacturedDate = manfacturedDate
} 

const details = new productSeries("salvan", 22, "1qurter", "22Jan")
// console.log(details)

function penSale(productname){
    this.productname = productname
}

function penSalesReport(productName, sales, stocks, price){
    // penSale.call(this, productName)
    this.sales = sales;
    this.stocks = stocks;
    this.price = price
}

const generatedReport = new penSalesReport("blue", "100%", "2quareter", "20rupess")
// console.log(generatedReport)

class Product1{

    constructor(rawmaterial, invertory, time, aceess){
        this.rawmaterial = rawmaterial
        this.invertory = invertory
        this.time = time
        this.aceess = aceess
    }

    accessPassword(){
        return `${this.aceess}helloThere`
    }

    newCase(){
        return `${this.rawmaterial.toUpperCase()}`
    }

}

const report = new Product1("leather", "2days", "1week", "tame")
// console.log(report.accessPassword())
// console.log(report)

// console.log(report.newCase());

class Coustomer{
    constructor(unsername){
        this.unsername = unsername
    }

    callCoustomer(){
        return `Coustomer has been called ${this.unsername}`
    }
}

class Admin extends Coustomer {
    constructor(unsername, email, password){
        super(unsername)
        this.email = email;
        this.password = password
    }

    calledAgainCoustomer(){
        console.log(`Coustomer has been called using ${this.unsername}`)
    }
}

const adam = new Admin("partial", "partial@admin.com", "234")
adam.calledAgainCoustomer()

const newuser = new Coustomer("pariatl");
// console.log(newuser.callCoustomer())

// console.log(adam instanceof Product1)

class staticCoustomer{
    constructor(username){
        this.username = username
    }

    callme(){
        console.log(`This coustomer has been called ${this.username}`)
    }

    static coustomerId(){
        return `Coustomer Id:#${Math.floor(Math.random() * 10000 + 1)}`
    }
}

const whileSmith = new  staticCoustomer("Patiale")
// console.log(whileSmith.coustomerId());




const below = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(below)

const product4 = {
    name: "wires",
    date: "partial",
    manftaured: true,

    nameed: function(){
        console.log("cannote interate over")
    }
}

console.log(Object.getOwnPropertyDescriptor(product4, "name"))

Object.defineProperty(product4, "name", {
    writable: false,
    enumerable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(product4, "name"))

for (const [key, value] of Object.entries(product4)) {
    if(typeof value !== "function"){
        console.log("Might interate over")
    }
}