let city = document.querySelector("#actual_city");
let hour = document.querySelector("#actual_hour");
let date = document.querySelector("#actual_date");
let city_container = document.querySelector("#grid-container");
let dropdown = document.querySelector("#countries");

function citiesTiming(value) {
  let hour = moment().tz(value).format("h:mm:ss");
  return setInterval(hour, 1000);
}

function citiesDate(value) {
  let date = moment().tz(value).format("MMMM Do YYYY");
  return date;
}

let x = dropdown.addEventListener("change", function (event) {
  let selectedValue = event.target.value;
  if (selectedValue.length > 0) {
    let citiesname = selectedValue.replace("", " ").split("/")[1];
    city_container.innerHTML += `<div class="cities-preview" id="cities-preview">
            <div class="city">${citiesname}</div>
            <div class="hour">${citiesTiming(selectedValue)}</div>
            <div class="date">${citiesDate(selectedValue)}</div>
          </div> 
          </br >`;
  }
});
