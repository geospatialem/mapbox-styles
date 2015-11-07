//Map call
mapboxgl.accessToken = 'pk.eyJ1IjoiaG9ja2V5ZHVjazMwIiwiYSI6InE4cmFHNlUifQ.X5m_TSatNjZs6Vc7B3_m2A';
var map = new mapboxgl.Map({
    center: [-93.25, 44.96],
    zoom: 9,
    container: 'map',
    style: 'mapbox://styles/hockeyduck30/cigogi4pc003ba6kshtxhrr4c'
});

//Navigation control
map.addControl(new mapboxgl.Navigation({
  position: 'top-left'
}));
