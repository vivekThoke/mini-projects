const promise = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Promise is resolved")
        resolve()
    }, 1000)
})

promise.then(function(){
    console.log("resolved the promise");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("The promise has been resolved using arrow function")
    }, 2000)
}).then((res) => {
    console.log(res)
})

const treePromise = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({
            name: "Partial",
            email: "partial@part.com",
            isThere: true,
        })
    }, 3000)
})

treePromise.then(function(tree) {
    console.log(tree);
})

const profile = new Promise(function(resolve, reject){
    setTimeout(function(){
        let company = true
        if(!company) {
            resolve({
                companyName: "Antlee",
                formed: 2023,
                valuation: "1million"
            })
        }
        else {
            reject("we dont have comapany details.")
        }
    }, 4000)
})


profile.then(function(companyDetails) {
    console.log(companyDetails)
    console.log(companyDetails.formed)
})
.catch(function(error) {
    console.log(error)
})
.finally(() => {
    console.log("Everything is resolved using the promise method")
})

async function newProfile(){
    try {
        const rewResponse = await profile
        console.log(rewResponse)
    } catch (error) {
        console.log(error)
    }
}

newProfile()

async function fakeApi() {
    try {
        const api = await fetch("https://fakestoreapi.com/products")
        const jsonformat = await api.json()
        console.log(jsonformat)
    } catch (error) {
        console.log("Error", error)
    }

}

// fakeApi();


fetch("https://fakestoreapi.com/products")
.then((respones) => {
    async function newApi() {
        const newRes = await respones.json();
        console.log(newRes);
    }
    newApi();
})
.catch((error) => {
    console.log(error)
})