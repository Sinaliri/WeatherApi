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
    console.log(inputValue);
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
    fetch(URL)
    .then(response=>response.json())
    .then(data => {
        const{main,name,sys,weather}=data;
        console.log(main);
        console.log(name);
        console.log(sys);
        console.log(weather);

    })
})
console.log(input)