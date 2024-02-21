let code;

function randomColorChange() {
    let hex = "0123456789ABCDEF"
    code ="#"

    for(let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 16);
        code += hex[randomNum]
    }

    return code
}

document.querySelector(".start").addEventListener("click", startColor)

document.querySelector(".stop").addEventListener("click", stopColorChange)


let intervalId;

function startColor() {
    if (!intervalId) {
        intervalId = setInterval(startColorChange, 2000)
    }


    function startColorChange(){
        document.body.style.backgroundColor = randomColorChange()
        document.querySelector("#hex").innerHTML = code

    }
}


function stopColorChange() {
    clearInterval(intervalId);
    intervalId = null
}
