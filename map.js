// Térkép inicializálása
const map = L.map('map').setView([46.915118, 19.697933], 16);

// Az alapértelmezett OSM háttér betöltése
const osm = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=59970b74-2f97-45d0-9200-897e6371d200', {
    minZoom: 12,
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// másik sötét basemap, ha elfogyna a ticket
//const osm = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
//     subdomains: 'abcd',
//     minZoom: 12,
//     maxZoom: 20
//}).addTo(map);

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
            "properties": { "Id": 1.2 },
            "geometry": {
                "type": "Point",
                "coordinates": [19.69998, 46.91109, 0.0]
            }
        },
        {
            "type": "Feature",
            "properties": { "Id": 2 },
            "geometry": {
                "type": "Point",
                "coordinates": [19.69877, 46.91010, 0.0]
            }
        },
        {
            "type": "Feature",
            "properties": { "Id": 3 },
            "geometry": {
                "type": "Point",
                "coordinates": [19.69460, 46.90864, 0.0]
            }
        },
        {
            "type": "Feature",
            "properties": { "Id": 4 },
            "geometry": {
                "type": "Point",
                "coordinates": [19.69390, 46.90737, 0.0]
            }
        },
        {
            "type": "Feature",
            "properties": { "Id": 5 },
            "geometry": {
                "type": "Point",
                "coordinates": [19.69658, 46.90611, 0.0]
            }
        },
        {
            "type": "Feature",
            "properties": { "Id": 6 },
            "geometry": {
                "type": "Point",
                "coordinates": [19.69805, 46.90398, 0.0]
            }
        },
         {
            "type": "Feature",
            "properties": { "Id": 7 },
            "geometry": {
                "type": "Point",
                "coordinates": [19.696875, 46.903096, 0.0]
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
