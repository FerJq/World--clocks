let tokyo = moment().tz("Asia/Tokyo");
let paris = moment().tz("Europe/Paris");
let sydney = moment().tz("Australia/Sydney");
let lisbon = moment().tz("Europe/Lisbon");
let new_york = moment().tz("America/New_York");
let toronto = moment().tz("America/Toronto");
let seoul = moment().tz("Asia/Seoul");
let madeira = moment().tz("Atlantic/Madeira");

let cities_array = {
  tokyo: tokyo,
  paris: paris,
  sydney: sydney,
  lisbon: lisbon,
  new_york: new_york,
  toronto: toronto,
  seoul: seoul,
  madeira: madeira,
};

let city_container = document.querySelector("#grid-container");
let countrys = document.querySelector("#countrys");
countrys.addEventListener("change", function (event, index) {
  cities_value = event.target.value;
  if (event.target.value.length > 0) {
    city_container.innerHTML += `<div class="cities-preview" id="cities-preview">
            <div class="city">${cities_value}</div>
            <div class="hour">${cities_array[cities_value].format("YYYY")}</div>
            <div class="date">${cities_array[cities_value].format("dddd")}</div>
          </div>`;
  }
});
