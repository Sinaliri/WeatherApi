// `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
const form=document.querySelector(".banner form");
const input=document.querySelector(".banner form input");
const message=document.querySelector(".validationMassage");
const cities=document.querySelector(".cities");

const apiKey="2d2cbd6f7710fee8f5fc2f66b3b4789c";
form.addEventListener("submit", e=>{
    e.preventDefault();
    let inputValue=input.value;
    //console.log(inputValue);
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
    fetch(URL)
    .then(response=>response.json())
    .then(data => {
       //  console.log(data)
        const{ main,name,sys,weather }= data;
        const icon=`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
        console.log(icon)
        const li=document.createElement("li");
        li.classList.add("city","mr-1","mb-5");
        const liInnerHtml=
        `
       <h2 class="city-name" data-name=${name},${sys.country}>
       <span>${name}</span>
       <span class="badge badge-pill badge-primary">${sys.country}</span>
       </h2> 
       <div class="city-temp">
       ${Math.round(main.temp)}
       </div>
       <figure>
       <img class="city-icon" src="${icon}" alt=${name}>
       <figurecaption>${weather[0]["description"]}</figurecaption>
       </figure>
        `
        li.innerHTML=liInnerHtml;
        cities.appendChild(li);
        message.innerText="Success"

    })
    .catch(()=>{
        message.innerText="search for valid city"
    })
    input.value=""
})
