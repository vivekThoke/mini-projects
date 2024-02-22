const url = "https://api.github.com/users/hiteshchoudhary"
const xhr = new XMLHttpRequest();

xhr.open("GET", url)

xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    
    if (xhr.readyState === 4) {
        let data = JSON.parse(this.responseText)
        console.log(data)

        const followers = data.followers
        const bio = data.bio
        const avatarUrl = data.avatar_url
        const name = data.name
        const blog = data.blog
        console.log(blog)

        const main = `
        <div class="main">
            <img class="img" src=${avatarUrl}>
            </img>
            <div class="name">
                ${name}
            </div>
            <div class="bio">
                ${bio}
            </div>
                <a href=${blog} class="atag">Youtube</a>
            <div class="followers">
                Github followers -${followers}
            </div>
        </main>
        `

        document.body.innerHTML = main
    }

}

xhr.send();