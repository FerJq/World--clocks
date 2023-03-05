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
let asia_tokyo = "Asia/Tokyo";
let europe_paris = "Europe/Paris";
let aus_sydn = "Australia/Sydney";
let eu_lisbon = "Europe/Lisbon";
let ame_toro = "America/Toronto";
let asia_seoul = "Asia/Seoul";
let at_mad = "Atlantic/Madeira";
let ame_ny = "America/New_York";
function allCities() {
  let pieceHTML = `<div class="cities-preview" id="cities-preview">
            <div class="city" id="city">Tokyo</div>
            <div class="hour" id="hour">${moment()
              .tz(asia_tokyo)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date" id="date"${moment()
              .tz(asia_tokyo)
              .format("MMMM Do YYYY")}></div>
          </div>
          <div class="cities-preview" id="cities-preview">
            <div class="city" id="city">Paris</div>
            <div class="hour" id="hour">${moment()
              .tz(europe_paris)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date" id="date"${moment()
              .tz(europe_paris)
              .format("MMMM Do YYYY")}></div>
          </div>
          <div class="cities-preview" id="cities-preview">
            <div class="city" id="city">Sydney</div>
            <div class="hour" id="hour">${moment()
              .tz(aus_sydn)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date" id="date"${moment()
              .tz(aus_sydn)
              .format("MMMM Do YYYY")}></div>
          </div>
          <div class="cities-preview" id="cities-preview">
            <div class="city" id="city">Lisbon</div>
            <div class="hour" id="hour">${moment()
              .tz(eu_lisbon)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date" id="date"${moment()
              .tz(eu_lisbon)
              .format("MMMM Do YYYY")}></div>
          </div>
          <div class="cities-preview" id="cities-preview">
            <div class="city" id="city">Toronto</div>
            <div class="hour" id="hour">${moment()
              .tz(ame_toro)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date" id="date"${moment()
              .tz(ame_toro)
              .format("MMMM Do YYYY")}></div>
          </div>
          <div class="cities-preview" id="cities-preview">
            <div class="city" id="city">Seoul</div>
            <div class="hour" id="hour">${moment()
              .tz(asia_seoul)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date" id="date"${moment()
              .tz(asia_seoul)
              .format("MMMM Do YYYY")}></div>
          </div>
          <div class="cities-preview" id="cities-preview">
            <div class="city" id="city">Madeira</div>
            <div class="hour" id="hour">${moment()
              .tz(at_mad)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date" id="date"${moment()
              .tz(at_mad)
              .format("MMMM Do YYYY")}></div>
          </div>
          <div class="cities-preview" id="cities-preview">
            <div class="city" id="city">New York</div>
            <div class="hour" id="hour">${moment()
              .tz(ame_ny)
              .format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date" id="date"${moment()
              .tz(ame_ny)
              .format("MMMM Do YYYY")}></div>
          </div>
`;

  return pieceHTML;
}

getAll.addEventListener("click", function () {
  function interDisplay() {
    display_all.innerHTML = allCities();
  }
  setInterval(interDisplay, 1000);
});



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
      selected.innerHTML = "Chosen City";
      citySelected.innerHTML = citiesname;
      hourSelected.innerHTML = citiesTiming();
      dateSelected.innerHTML = citiesDate();
    }
    setInterval(upd, 1000);
  }
});

currentLocation();
setInterval(currentLocation, 1000);
