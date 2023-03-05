let cityC = document.querySelector("#actual_city");
let hourC = document.querySelector("#actual_hour");
let dateC = document.querySelector("#actual_date");
let citySelected = document.getElementById("city");
let hourSelected = document.getElementById("hour");
let dateSelected = document.getElementById("date");

let current = document.getElementById("selected");
let dropdown = document.querySelector("#countries");
let display_all = document.getElementById("displayAllCities");
let getAll = document.getElementById("all");
let displaycity = document.querySelector(".displaycity");
//Time Zones
let asia_tokyo = "Asia/Tokyo";
let europe_paris = "Europe/Paris";
let aus_sydn = "Australia/Sydney";
let eu_lisbon = "Europe/Lisbon";
let ame_toro = "America/Toronto";
let asia_seoul = "Asia/Seoul";
let at_mad = "Atlantic/Madeira";
let ame_ny = "America/New_York";

let theme_bt = document.getElementById("mode");
let body = document.querySelector("body");
theme_bt.addEventListener("click", function (event) {
  if (body.classList.contains("darkmode")) {
    body.classList.remove("darkmode");
    event.preventDefault();
    mode.innerHTML = `Night Time`;
  } else {
    body.classList.add("darkmode");
    event.preventDefault();
    mode.innerHTML = `Day time`;
  }
});

function allCities() {
  let pieceHTML = `<div class="cities-preview" id="cities-preview">
            <div class="city_all" id="city"><a href="https://www.gotokyo.org/en/index.html?utm_source=google&utm_medium=en_paidsearch&utm_campaign=R4&utm_content=tdA&gclid=CjwKCAiAmJGgBhAZEiwA1JZoll0h1q5NAst_q91FgmvzzP32cEvnm6pbqZ5l5foNPcOxx3ytyZEmvhoCn3cQAvD_BwE" target="_blank">🍣Tokyo</a></div>
            <div class="hour_all" id="hour">${moment()
              .tz(asia_tokyo)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date_all" id="date">${moment()
              .tz(asia_tokyo)
              .format("MMMM Do YYYY")}</div>
          </div>
          <div class="cities-preview" id="cities-preview">
            <div class="city_all" id="city"><a href="https://en.parisinfo.com" target="_blank">🥖Paris</a></div>
            <div class="hour_all" id="hour">${moment()
              .tz(europe_paris)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date_all" id="date">${moment()
              .tz(europe_paris)
              .format("MMMM Do YYYY")}</div>
          </div>
          <div class="cities-preview" id="cities-preview">
            <div class="city_all" id="city"><a href="https://www.australia.com/en-us/places/sydney-and-surrounds/guide-to-sydney.html?cid=paid-search|us|SYD798|brand|Google||||||||||&ef_id=CjwKCAiAmJGgBhAZEiwA1JZollqEyBiX21W1RHR1lZA0bIiWX4zx0niKd2p3cw06hd8XLbCEaaIYxBoCHEgQAvD_BwE:G:s&s_kwcid=AL!4635!3!433828241982!e!!g!!sydney%20australia&utm_actcampaign=9514109454&gclid=CjwKCAiAmJGgBhAZEiwA1JZollqEyBiX21W1RHR1lZA0bIiWX4zx0niKd2p3cw06hd8XLbCEaaIYxBoCHEgQAvD_BwE" target="_blank">🐟Sydney</a></div>
            <div class="hour_all" id="hour">${moment()
              .tz(aus_sydn)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date_all" id="date">${moment()
              .tz(aus_sydn)
              .format("MMMM Do YYYY")}</div>
          </div>
          <div class="cities-preview" id="cities-preview">
            <div class="city_all" id="city"><a href="https://www.visitlisboa.com/" target="_blank">🥞Lisbon</a></div>
            <div class="hour_all" id="hour">${moment()
              .tz(eu_lisbon)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date_all" id="date">${moment()
              .tz(eu_lisbon)
              .format("MMMM Do YYYY")}</div>
          </div>
          <div class="cities-preview" id="cities-preview">
            <div class="city_all" id="city"><a href="https://www.toronto.ca/" target="_blank">🍫Toronto</a></div>
            <div class="hour_all" id="hour">${moment()
              .tz(ame_toro)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date_all" id="date">${moment()
              .tz(ame_toro)
              .format("MMMM Do YYYY")}</div>
          </div>
          <div class="cities-preview" id="cities-preview">
            <div class="city_all" id="city"><a href="https://english.visitseoul.net/index" target="_blank">🍲Seoul</a></div>
            <div class="hour_all" id="hour">${moment()
              .tz(asia_seoul)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date_all" id="date">${moment()
              .tz(asia_seoul)
              .format("MMMM Do YYYY")}</div>
          </div>
          <div class="cities-preview" id="cities-preview">
            <div class="city_all" id="city"><a href="https://www.madeira.org/" target="_blank">☕Madeira</a></div>
            <div class="hour_all" id="hour">${moment()
              .tz(at_mad)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date_all" id="date">${moment()
              .tz(at_mad)
              .format("MMMM Do YYYY")}</div>
          </div>
          <div class="cities-preview" id="cities-preview">
            <div class="city_all" id="city"><a href="https://www.iloveny.com/" target="_blank">🗽New York</a></div>
            <div class="hour_all" id="hour">${moment()
              .tz(ame_ny)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date_all" id="date">${moment()
              .tz(ame_ny)
              .format("MMMM Do YYYY")}</div>
          </div>
`;
  display_all.innerHTML = pieceHTML;
}

setInterval(allCities, 1000);

function currentLocation() {
  let actual_location = moment.tz.guess();
  let current_date = moment().tz(actual_location).format("MMMM Do YYYY");
  let current_hour = moment()
    .tz(actual_location)
    .format("h:mm:ss [<small>]A[</small>]");
  let citiesname = actual_location.replace("_", " ").split("/")[1];

  cityC.innerHTML = citiesname;
  hourC.innerHTML = current_hour;
  dateC.innerHTML = current_date;
}

function citiesTiming() {
  let hour = moment()
    .tz(values_selection)
    .format("h:mm:ss [<small>]A[</small>]");
  return hour;
}

function citiesDate() {
  let date = moment().tz(values_selection).format("MMMM Do YYYY");
  return date;
}

dropdown.addEventListener("change", function (event) {
  values_selection = event.target.value;
  if (values_selection.length > 0) {
    function upd() {
      let citiesname = values_selection.replace("_", " ").split("/")[1];
      selected.innerHTML = "˜”*°•.City.•°*”˜";
      displaycity.innerHTML = `<div class="cities-preview" id="displayAllCities">
            <div class="cityy" id="city">${citiesname}</div>
            <div class="hourr" id="hour">${citiesTiming()}</div>
            <div class="datee" id="date">${citiesDate()}</div>
          </div>`;
    }
    setInterval(upd, 1000);
  }
});

currentLocation();
setInterval(currentLocation, 1000);
