// Simulated bus stop data with bus routes
const busStops = [
    { name: "Bhakti Shakti", lat: 18.665423, lon: 73.772236, busRoots: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Nigadi", lat: 18.659736, lon: 73.777132, busRoot: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Bajaj Auto", lat: 18.653881, lon: 73.782524, busRoot: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Akurdi", lat: 18.650859, lon: 73.786159, busRoot: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Kalbhornagar", lat: 18.646869, lon: 73.788430, busRoot: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Jayashree Talkies", lat: 18.641912, lon: 73.792687, busRoot: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Chinchwad Station", lat: 18.638225, lon: 73.795849, busRoot: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Empire Estate", lat: 18.635373, lon: 73.798232, busRoot: ["Kalewadi Phata", "Rahatani Gaon", "Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Kharalwadi", lat: 18.623384, lon: 73.807896, busRoot: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "HA", lat: 18.620791, lon: 73.810084, busRoot: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Vallabhnagar", lat: 18.613111, lon: 73.817296, busRoot: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Nashik Phata", lat: 18.608172, lon: 73.821505, busRoot: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Kasarwadi", lat: 18.606119, lon: 73.825107, busRoot: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Atlas Company", lat: 18.618639, lon: 73.849915, busRoot: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Phugewadi", lat: 18.587385, lon: 73.833602, busRoot: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Dapodi", lat: 18.581448, lon: 73.834119, busRoot: ["Nigadi", "Bajaj Auto", "Akurdi", "Kalbhornagar", "Jayashree Talkies", "Chinchwad Station", "Empire Estate", "Kharalwadi", "HA", "Vallabhnagar", "Nashik Phata", "Kasarwadi", "Atlas Company", "Phugewadi", "Dapodi", "COEP Hostel"] },
    { name: "Rahatani Gaon", lat: 18.602650, lon: 73.795892, busRoot: ["Alandi Road", "RTO", "Kalewadi Phata", "KSB Chowk"] },
    { name: "Alandi Road", lat: 18.632103, lon: 73.872930, busRoot: ["Alandi Road", "RTO", "Kalewadi Phata", "KSB Chowk"] },
    { name: "Kalewadi Phata", lat: 18.604538, lon: 73.775959, busRoot: ["Alandi Road", "RTO", "Kalewadi Phata", "KSB Chowk"] },
    { name: "RTO", lat: 18.529854, lon: 73.862700, busRoot: ["Alandi Road", "RTO", "Kalewadi Phata", "KSB Chowk"] },
    { name: "KSB Chowk", lat: 18.650335, lon: 73.809879, busRoot: ["Alandi Road", "RTO", "Kalewadi Phata", "KSB Chowk"] },
];

const map = L.map('map').setView([18.5204, 73.8567], 12);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


let dynamicDestinations = [];

let busStopMarkers = [];

function displayDestinationList() {
    const destinationList = document.getElementById('destination-list');
    destinationList.innerHTML = '';

    dynamicDestinations.forEach(dest => {
        const listItem = document.createElement('li');
        listItem.textContent = dest.name;
        listItem.addEventListener('click', function () {
            document.getElementById('destination').value = dest.name;
            destinationList.innerHTML = '';
        });
        destinationList.appendChild(listItem);
    });
}


function addBusStopMarkers() {
    busStops.forEach(busStop => {
        let marker = L.marker([busStop.lat, busStop.lon], {
            icon: L.icon({
                iconUrl: 'images/bus.png',
                iconSize: [25, 25],
                iconAnchor: [12, 25]
            })
        }).addTo(map).bindPopup(`<strong>${busStop.name}</strong>`);
        busStopMarkers.push(marker);
    });
}

function findNearestBusStop(userLocation) {
    let nearestBusStop = null;
    let minDistance = Infinity;

    busStopMarkers.forEach(marker => {
        const latLng = marker.getLatLng();
        const distance = userLocation.distanceTo(latLng);
        if (distance < minDistance) {
            minDistance = distance;
            nearestBusStop = marker;
        }
    });

    return nearestBusStop;
}

function plotRoute(startLatLng, endLatLng, lineColor) {
    L.Routing.control({
        waypoints: [
            L.latLng(startLatLng),
            L.latLng(endLatLng)
        ],
        lineOptions: {
            styles: [{ color: lineColor, weight: 4 }]
        }
    }).addTo(map);
}

document.getElementById('select-location').addEventListener('click', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const userLocation = L.latLng(position.coords.latitude, position.coords.longitude);

            busStopMarkers.forEach(marker => marker.remove());

            addBusStopMarkers();


            const nearestBusStop = findNearestBusStop(userLocation);
            if (nearestBusStop) {
                nearestBusStop.setIcon(L.icon({
                    iconUrl: 'images/red-marker.png',
                    iconSize: [25, 25],
                    iconAnchor: [12, 25]
                }));


                plotRoute(userLocation, nearestBusStop.getLatLng(), 'red');
            }
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});


document.getElementById('search-bus').addEventListener('click', function () {
    const destinationInput = document.getElementById('destination').value.trim().toLowerCase();


    const destinationBusStop = busStops.find(stop => stop.name.toLowerCase() === destinationInput);

    if (destinationBusStop) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const userLocation = L.latLng(position.coords.latitude, position.coords.longitude);


            const nearestBusStop = findNearestBusStop(userLocation);

            if (nearestBusStop) {

                plotRoute(nearestBusStop.getLatLng(), { lat: destinationBusStop.lat, lon: destinationBusStop.lon }, 'green');
            }
        });
    } else {

        const destinationObj = dynamicDestinations.find(dest => dest.name.toLowerCase() === destinationInput);

        if (destinationObj) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const userLocation = L.latLng(position.coords.latitude, position.coords.longitude);

                const nearestBusStop = findNearestBusStop(userLocation);

                const nearestBusStopToDestination = findNearestBusStop(L.latLng(destinationObj.lat, destinationObj.lon));

                if (nearestBusStop && nearestBusStopToDestination) {

                    plotRoute(nearestBusStop.getLatLng(), nearestBusStopToDestination.getLatLng(), 'green');

                    plotRoute(nearestBusStopToDestination.getLatLng(), { lat: destinationObj.lat, lon: destinationObj.lon }, 'orange');

                    L.marker([destinationObj.lat, destinationObj.lon], {
                        icon: L.icon({
                            iconUrl: 'images/map-marker.png',
                            iconSize: [30, 30],
                            iconAnchor: [15, 30]
                        })
                    }).addTo(map).bindPopup(`<strong>${destinationObj.name}</strong>`);
                }
            });
        } else {
            alert("Destination not found!");
        }
    }
});

const destinationInput = document.getElementById("destination");
const destinationList = document.getElementById("destination-list");

destinationInput.addEventListener("input", async (e) => {
    const query = e.target.value;

    if (!query) {
        destinationList.innerHTML = "";
        return;
    }

    const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=5`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        destinationList.innerHTML = "";


        data.forEach((place) => {
            const listItem = document.createElement("li");
            listItem.textContent = place.display_name;

            listItem.addEventListener("click", () => {
                const lat = parseFloat(place.lat);
                const lon = parseFloat(place.lon);

                dynamicDestinations.push({ name: place.display_name, lat, lon });
                displayDestinationList();
                L.marker([lat, lon])
                    .addTo(map)
                    .bindPopup(place.display_name)
                    .openPopup();
                map.setView([lat, lon], 15);
                destinationInput.value = place.display_name;
                destinationList.innerHTML = "";
            });

            destinationList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
});
addBusStopMarkers();