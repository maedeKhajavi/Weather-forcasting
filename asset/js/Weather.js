alert("از شهر های تهران و شیراز و تبریز و مشهد بپرس")

let searchBtn = document.querySelector('.searchBtn')
let searchInput = document.querySelector('.searchInput')
let result = document.querySelector('#result')

const weatherData = {
    تهران:{
        temp: 14,
        status: "Sunny",
        humidity: 35,
        wind: "12 km/h",
        icon: "bi bi-brightness-high text-warning"
    },
    شیراز:{
        temp: 18,
        status: "Cloudy",
        humidity: 42,
        wind: "10 km/h",
        icon: "bi bi-cloud text-secondary"
    },
    تبریز:{
        temp: 7,
        status: "Snowy",
        humidity: 65,
        wind: "18 km/h",
        icon: "bi bi-cloud-snow text-primary "
    },
    مشهد:{
        temp: 10,
        status: "Rainy",
        humidity: 78,
        wind: "14 km/h",
        icon: "bi bi-cloud-rain text-primary "
    }
};

searchBtn.addEventListener('click', function () {
    const selectedCity = searchInput.value.trim()
    let citivalue = weatherData[selectedCity]
    result.innerHTML = `
    <div class="card mt-3 shadow-lg">
        <div class="card-body w-700" >
            <h1 class='card-title mb-3'>${selectedCity}</h1>
            <i class="${citivalue.icon} mt-5" style="font-size: 50px;"></i>
            <p class="fw-bold fs-6 mt-3">status: ${citivalue.status}</p>
            <p class="fw-bold fs-6 ">humidity: ${citivalue.humidity}</p>
            <p class="fw-bold fs-6 ">wind: ${citivalue.wind}</p>
        </div>
    </div>`
})