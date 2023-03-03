let tokyo = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:m A");
let france = moment().tz("Europe/France").format("dddd, MMMM D, YYYY h:m A");
let sydney = moment().tz("Australia/Sydney").format("dddd, MMMM D, YYYY h:m A");

let countrys = document.querySelector("#countrys");
countrys.addEventListener("change", function (event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "tokyo") {
      alert(`It is ${tokyo} in Asia-Japan Tokyo 🍣`);
    }

    if (event.target.value === "france") {
      alert(`It is ${france} in Europe France 🥖`);
    }

    if (event.target.value === "sydney") {
      alert(`It is ${sydney} in Australia Sydney 🐟`);
    }
  }
});
