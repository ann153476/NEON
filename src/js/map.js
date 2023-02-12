let map;

function initMap() {
    let positionMy ={ lat: 48.51029069230209, lng: 34.61206165767066 }
    map = new google.maps.Map(document.getElementById("map"), {
    center: positionMy,
    zoom: 10,

  });
  const image =
  "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const beachMarker = new google.maps.Marker({
    position: positionMy,
    map,
    icon: image,
  });
}

window.initMap = initMap;