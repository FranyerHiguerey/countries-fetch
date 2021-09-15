const banderas = document.getElementById("banderas")

document.addEventListener("DOMContentLoaded", e =>{
    fetchData()
})

const fetchData = async() =>{
    try {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        banderillas(data)
        formularioClient(data)
        filters(data)
    } catch (error) {
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = ''
    data.forEach(item => {
        elementos +=`
        <article class="card">
        <img src="${item.flag}" alt="" class="img-fluid">
        <div class="card-content">
            <h3>${item.name}</h3>
            <p>
                <b>Population: </b>
                ${item.population}
            </p>
            <p>
                <b>Region: </b>
                ${item.region}
            </p>
            <p>
                <b>Capital: </b>
                ${item.capital}
            </p>
            <p>
            <a href="country.html?name=${item.name}">Más info...</a>
        </p>
        </div>
    </article>
        `
    });
    banderas.innerHTML = elementos
}