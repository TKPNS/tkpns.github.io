// Térkép inicializálása
const map = L.map('map').setView([46.915118, 19.697933], 16);

// Az alapértelmezett OSM háttér betöltése
const osm = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=59970b74-2f97-45d0-9200-897e6371d200', {
    minZoom: 12,
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const satellite = L.tileLayer(
    'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    {
        minZoom: 12,
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; Google Satellite'
    }
);

const baseMaps = {
    "Térkép": osm,
    "Műhold": satellite
};

const layerControl = L.control.layers(baseMaps, null, {
    collapsed: false
}).addTo(map);

const pontok = {
    "type": "FeatureCollection",
    "name": "points",
    "features": [
        {
            "type": "Feature",
            "properties": { "Id": 1 },
            "geometry": {
                "type": "Point",
                "coordinates": [19.697933, 46.915118, 0.0]
            }
        },
        {
            "type": "Feature",
            "properties": { "Id": 2 },
            "geometry": {
                "type": "Point",
                "coordinates": [19.697053, 46.903139, 0.0]
            }
        }
    ]
};

const pontokLayer = L.geoJSON(pontok, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 5,
            fillColor: "#c8a96e", //[#c8a96e]
            color: "black",
            weight: 1,
            fillOpacity: 0.8
        });
    },

    onEachFeature: function (feature, layer) {

        layer.bindTooltip(" " + feature.properties.Id, {
            permanent: true,
            direction: "top",
            offset: [0, -10]
        });
    }
}).addTo(map);
