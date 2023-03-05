let cityC = document.querySelector("#actual_city");
let hourC = document.querySelector("#actual_hour");
let dateC = document.querySelector("#actual_date");
let citySelected = document.getElementById("city");
let hourSelected = document.getElementById("hour");
let dateSelected = document.getElementById("date");
let dropdown = document.querySelector("#countries");

function currentLocation() {
  let actual_location = moment.tz.guess();
  let current_date = moment().tz(actual_location).format("MMMM Do YYYY");
  let current_hour = moment().tz(actual_location).format("h:mm:ss A");
  let citiesname = actual_location.replace("_", " ").split("/")[1];

  cityC.innerHTML = citiesname;
  hourC.innerHTML = current_hour;
  dateC.innerHTML = current_date;
}
currentLocation();
setInterval(currentLocation, 1000);

function citiesTiming() {
  let hour = moment().tz(values_selection).format("h:mm:ss A");
  return hour;
}

function citiesDate() {
  let date = moment().tz(values_selection).format("MMMM Do YYYY");
  return date;
}

dropdown.addEventListener("change", function (event) {
  values_selection = event.target.value;
  array_values.push(values_selection);
  if (values_selection.length > 0) {
    function upd() {
      let citiesname = values_selection.replace("_", " ").split("/")[1];
    }
    setInterval(upd, 1000);
  }
});
