
const input = document.querySelector("#input");
const ipAddressIn = document.querySelector(".ipaddress");
const locationIn = document.querySelector(".location");
const timezoneIn = document.querySelector(".timezone");
const ispIn = document.querySelector(".isp");
const submit =  document.querySelector(".submit");

var ip = "8.8.8.8";
var api_key = "at_ej8ONrT2E7rC02ncS4hEfErduuexo";
var api_url = "https://geo.ipify.org/api/v2/country?";

//-------------------searching ip------------------------//
submit.addEventListener("click", function(e) {
    e.preventDefault();
    const inputValue = input.value;
    console.log(inputValue);


    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_ej8ONrT2E7rC02ncS4hEfErduuexo&ipAddress=${inputValue}`)
    .then(response => response.json())
        .then(data => {
            const{ip,isp,location} = data
            const{country,region,timezone} = location
            createData(ip,isp,country,region,timezone)
        })
});

//-----------------APpending info------------------//

function createData(ip,isp,country,region,timezone){
    ipAddressIn.innerHTML = ip;
    locationIn.innerHTML = `${country}, ${region}`;
    timezoneIn.innerHTML = timezone;
    ispIn.innerHTML = isp
};

//--------------------IP on page load------------------//
    const pageLoad = () =>{
fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_ej8ONrT2E7rC02ncS4hEfErduuexo&ipAddress`)
    .then(response => response.json())
        .then(data => {
            const{ip,isp,location} = data
            const{country,region,timezone} = location
            createData(ip,isp,country,region,timezone)
        })
    }

    pageLoad();




   

   