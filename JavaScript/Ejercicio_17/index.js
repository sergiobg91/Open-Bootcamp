function initMap()  {

  const position = {lat: -34.646210, lng: -58.399231}
  
  const map = new google.maps.Map(document.querySelector("#map"), {
    zoom: 5,
    center: position,
  });
 
  const marker1 = new google.maps.Marker({
    position,
    map,
    title: "Home"
  });

  const marker2 = new google.maps.Marker({
    position : {lat: -31.9769684, lng: -64.5592633},
    map,
    title: "Villa General Belgrano"
  });

  const marker3 = new google.maps.Marker({
    position : {lat: -41.1335535, lng: -71.3096602},
    map,
    title: "Centro de Bariloche"
  });

  marker1.setMap(map);
  marker2.setMap(map);
  marker3.setMap(map);
  map.setCenter(position);
};