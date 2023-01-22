let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.51029069230209, lng: 34.61206165767066 },//48.51029069230209, 34.61206165767066
    zoom: 10,
  });
}

window.initMap = initMap;