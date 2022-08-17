// Initialize and add the map
let marker, map;

function initMap()  {

    const position = { lat: -25.344, lng: 131.031 };
    
    map = new google.maps.Map(document.querySelector("#map"), {
      zoom: 5,
      center: position,
    });
   
    marker = new google.maps.Marker({
      position,
      map,
      title: "Your location"
    });

    geoPosition();
  };

function geoPosition() {
  const options = {timeout: 50000};
  return navigator.geolocation.watchPosition( centerMap, (error) => console.log(error), options);
};

function centerMap(currentPos) {
  const newPos = {
    lat: currentPos.coords.latitude,
    lng: currentPos.coords.longitude
  }

  marker.setPosition(newPos);
  map.setCenter(newPos);
};

window.initMap = initMap;