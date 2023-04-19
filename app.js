// Initialize the map
async function initMap() {
    const myLatLng = { lat: 37.7749, lng: -122.4194 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: myLatLng,
    });

    // Add markers to the map
    const marker1 = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map,
        title: "San Francisco",
    });

    const marker2 = new google.maps.Marker({
        position: { lat: 37.7879, lng: -122.4075 },
        map,
        title: "Golden Gate Bridge",
    });

    // Add info windows to the markers
    const infoWindow1 = new google.maps.InfoWindow({
        content: "<h3>San Francisco</h3><p>The Golden Gate City</p>",
    });

    const infoWindow2 = new google.maps.InfoWindow({
        content: "<h3>Golden Gate Bridge</h3><p>A famous suspension bridge</p>",
    });

    marker1.addListener("click", () => {
        infoWindow1.open(map, marker1);
    });

    marker2.addListener("click", () => {
        infoWindow2.open(map, marker2);
    });
}
window.onload = function () {
    // Your code that uses the Google Maps JavaScript API
    initMap();
};