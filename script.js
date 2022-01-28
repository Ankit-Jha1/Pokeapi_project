
// let iid = document.querySelector('.inputId')
// the complete url can be divided into 3 things as shown below
const apiData = {
    url:'https://pokeapi.co/api/v2/',
    type:'pokemon',
    // this id is for pikachu
    id:'25',
}

function f1(){
    apiData.id = document.getElementById('inputId').value;
    console.log("here"+apiData.id);

    // var iiid = iid.value;
    let {url,type,id} = apiData;
    let apiUrl = `${url}${type}/${id}`
    fetch(apiUrl)
        .then((data)=> data.json())
        .then( (pokemon) => generateHtml(pokemon))
    
    const generateHtml = (data) => {
        console.log(data);
        const html = `
        <div class="name">${data.name}</div>
        <img class="image" src=${data.sprites.front_default} alt="">
        <div class="details">
            <span>Height : ${data.height}</span>
            <span>Weight : ${data.weight}</span>
        </div> 
        `
        const pokemonDiv = document.querySelector('.pokemon')
        pokemonDiv.innerHTML = html;
    }
}
// backtics help to form string literals
// const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`

// instead of writing like above, use deconstruct

// console.log("heree" + apiUrl)
// modern js concepts
// fetch will return a promise
    // promise holds the data for us to use it in future
// returns data in json format
//


// console.log(apiUrl);s