let button = document.querySelector(".click");

const url = 'https://numbersapi.p.rapidapi.com/1492/year?json=true&fragment=true';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ae7bf577damsh035d7b5551c1792p13df05jsn5ad8912c4046',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};


try {
    async function responde(){
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)

        console.log(result.date)
        if(result.date === undefined){
            return " ";
        }else{
            document.querySelector(".date").innerHTML = result.date;
            document.querySelector(".text").innerHTML = result.text;
        }
      
    }
    button.addEventListener("click", () => {
        responde();
    })

} catch (error) {
	console.error(error);
}

