const user = {
    name: "Partial Partap",
    email: "partialpartap@pre.com",
    signedIn: true,
    location: "banglore",

    dataFetch: function(){
        console.log("There might be undefined in console")
    },

    newUser: function(){
        return `This user share same geolocation ${this.location}`
    }
}

console.log(user.email)
console.log(user.dataFetch())
console.log(user.newUser())

class implementAbstraction {
    set(x, y) {
        this.a = x;
        this.b = y;
    }

    implemenation() {
        console.log(`a has the value of ${this.a}`)
        console.log(`b has the value of ${this.b}`)
    }
}

const newObj = new implementAbstraction();
newObj.set(11, 33);
newObj.implemenation();

const product = {
    name: "fillow",
    productId: 12362,
    production: true,
    stocks: 422,

    productCheck: function() {
        return `These product has been checked report is ${this.productId}`
    }
}

// console.log(product);
// console.log(product.productCheck())


function youtubeContent(video, audio, playback, comments){
    this.newvideo = video
    this.audio = audio
    this.playback = playback
    this.ourComments = comments

    return this
}

// const content1 = new youtubeContent("peak", 22, "2x", "100s");
// console.log(content1)
// const content2 = youtubeContent("mrbeaks", 10, "1x", "thousands");
// console.log(content2)

function newDearing(num) {
    return num + 14;
}

newDearing.power = 3


// console.log(newDearing(2))
// console.log(newDearing.power)
// console.log(newDearing.prototype)

function newProduct(name, price) {
    this.name = name;
    this.price = price
}

newProduct.prototype.increment = function(){
    console.log(++this.price)
}

const product1 = new newProduct("fillow", 29);

// product1.increment()

let hero = ["spideman", "hulk"];

let heroPower = {
    spideman: "slang",
    hulk: "superhuman",

    getSuperPower: function(){
        console.log(`Spideman has the superpower ${this.spideman}`)
    }
}

Object.prototype.mahesh = function(){
    console.log(`There are is so much power of mahesh`)
}

Array.prototype.heroMahesh = function(){
    console.log("There is new hero in town");
}

// heroPower.mahesh();
// hero.mahesh();
// hero.heroMahesh();
// heroPower.heroMahesh();

const youtube = {
    accountLogin: true
}

const youtubeSupport = {
    onTime: true,
    query: "raised"
}

Object.setPrototypeOf(youtube, youtubeSupport);

let anoterName = "Partial    ";

String.prototype.trimLength = function(){
    console.log(`This string is trimed: ${anoterName.trim().length}`)
}

anoterName.trimLength();