const form = document.querySelector("form");


form.addEventListener("click", function(e){
    e.preventDefault()

    const hieght = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#wieght").value);
    const result = document.querySelector(".results");

    if (hieght === "" || hieght < 0 || isNaN(hieght)){
        result.innerHTML = `Enter the valid Details ${hieght}`
    }else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Enter the valid details ${weight}`
    } else {
        const bmi = (weight / ((hieght * hieght )/ 10000)).toFixed(2)

        result.innerHTML = `<span>Your BMI is ${bmi}</span>`

        if (bmi < 18.6) {
            result.innerHTML = `<span>Your are Under weight ${bmi}</span>`
            result.style.color = "red";
        }
        else if(bmi >18.6 && bmi < 24.9) {
            result.innerHTML = `<span>Your are Normal Weight ${bmi}</span>`
            result.style.color = "green"
        }
        else {
            result.innerHTML = `<span>Your are Over Weight ${bmi}</span>`
            result.style.color = "red";
        }

    }

})