/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-07-25 00:02:31
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-07-25 15:05:41
 * @FilePath: \vue-maplibre\docs\examples\map\style.ts
 */
export default {
  version: 8,
  name: 'Streets',
  metadata: {
    'mapbox:type': 'default',
    'mapbox:origin': 'streets-v12',
    'mapbox:sdk-support': { android: '10.6.0', ios: '10.6.0', js: '2.9.0' },
    'mapbox:autocomposite': true,
    'mapbox:groups': {
      'Land & water, land': { name: 'Land & water, land', collapsed: true },
      'Land & water, water': { name: 'Land & water, water', collapsed: true },
      'Terrain, land': { name: 'Terrain, land', collapsed: true },
      'Land & water, built': { name: 'Land & water, built', collapsed: true },
      'Transit, built': { name: 'Transit, built', collapsed: true },
      'Buildings, built': { name: 'Buildings, built', collapsed: true },
      'Road network, tunnels-case': { name: 'Road network, tunnels-case', collapsed: true },
      'Walking, cycling, etc., tunnels': { name: 'Walking, cycling, etc., tunnels', collapsed: true },
      'Road network, tunnels': { name: 'Road network, tunnels', collapsed: true },
      'Transit, ferries': { name: 'Transit, ferries', collapsed: true },
      'Walking, cycling, etc., surface': { name: 'Walking, cycling, etc., surface', collapsed: true },
      'Road network, surface': { name: 'Road network, surface', collapsed: true },
      'Transit, surface': { name: 'Transit, surface', collapsed: true },
      'Road network, surface-icons': { name: 'Road network, surface-icons', collapsed: true },
      'Walking, cycling, etc., barriers-bridges': { name: 'Walking, cycling, etc., barriers-bridges', collapsed: true },
      'Road network, bridges': { name: 'Road network, bridges', collapsed: true },
      'Transit, bridges': { name: 'Transit, bridges', collapsed: true },
      'Transit, elevated': { name: 'Transit, elevated', collapsed: true },
      'Administrative boundaries, admin': { name: 'Administrative boundaries, admin', collapsed: true },
      'Buildings, building-labels': { name: 'Buildings, building-labels', collapsed: true },
      'Road network, road-labels': { name: 'Road network, road-labels', collapsed: true },
      'Walking, cycling, etc., walking-cycling-labels': { name: 'Walking, cycling, etc., walking-cycling-labels', collapsed: true },
      'Transit, ferry-aerialway-labels': { name: 'Transit, ferry-aerialway-labels', collapsed: true },
      'Natural features, natural-labels': { name: 'Natural features, natural-labels', collapsed: true },
      'Point of interest labels, poi-labels': { name: 'Point of interest labels, poi-labels', collapsed: true },
      'Transit, transit-labels': { name: 'Transit, transit-labels', collapsed: true },
      'Place labels, place-labels': { name: 'Place labels, place-labels', collapsed: true }
    },
    'mapbox:decompiler': {
      id: 'streets-v12',
      componentVersion: '15.0.0',
      strata: [
        {
          id: 'streets-v12',
          order: [
            ['land-and-water', 'land'],
            ['land-and-water', 'water'],
            ['terrain', 'land'],
            ['land-and-water', 'built'],
            ['transit', 'built'],
            ['buildings', 'built'],
            ['road-network', 'tunnels-case'],
            ['walking-cycling', 'tunnels'],
            ['road-network', 'tunnels'],
            ['terrain', 'surface'],
            ['transit', 'ferries'],
            ['walking-cycling', 'surface'],
            ['road-network', 'surface'],
            ['transit', 'surface'],
            ['road-network', 'surface-icons'],
            ['walking-cycling', 'barriers-bridges'],
            ['road-network', 'bridges'],
            ['transit', 'bridges'],
            ['buildings', 'extruded'],
            ['transit', 'elevated'],
            ['admin-boundaries', 'admin'],
            ['terrain', 'terrain-labels'],
            ['buildings', 'building-labels'],
            ['road-network', 'road-labels'],
            ['walking-cycling', 'walking-cycling-labels'],
            ['transit', 'ferry-aerialway-labels'],
            ['natural-features', 'natural-labels'],
            ['point-of-interest-labels', 'poi-labels'],
            ['transit', 'transit-labels'],
            ['place-labels', 'place-labels']
          ]
        }
      ],
      components: {
        'road-network': '15.0.0',
        'natural-features': '15.0.0',
        'place-labels': '15.0.0',
        'admin-boundaries': '15.0.0',
        'point-of-interest-labels': '15.0.0',
        'walking-cycling': '15.0.0',
        transit: '15.0.0',
        terrain: '15.0.0',
        'land-and-water': '15.0.0',
        buildings: '15.0.0'
      },
      propConfig: {
        'road-network': {
          colorBase: 'hsl(20, 20%, 95%)',
          colorRoad: 'hsl(0, 0%, 100%)',
          colorRoadOutline: 'hsl(220, 20%, 85%)',
          colorMotorwayTrunk: 'hsl(40, 90%, 70%)',
          colorRoadLabel: 'hsl(0,0%, 0%)',
          turningCircles: true,
          crosswalks: true
        },
        'natural-features': { colorBase: 'hsl(20, 20%, 95%)', colorWater: 'hsl(200, 100%, 80%)', colorPoi: 'hsl(210, 20%, 58%)' },
        'place-labels': { colorBase: 'hsl(20, 20%, 95%)', colorPlaceLabel: 'hsl(220, 30%, 30%)' },
        'admin-boundaries': { colorBase: 'hsl(20, 20%, 95%)', colorPlaceLabel: 'hsl(220, 30%, 30%)', colorAdminBoundary: 'hsl(240, 50%, 60%)' },
        'point-of-interest-labels': {
          colorPoiEntertainment: 'hsl(320, 70%, 75%)',
          colorPoiEducation: 'hsl(30, 50%, 55%)',
          colorPoiFoodAndDrink: 'hsl(40, 95%, 55%)',
          poiIconScale: 0.8,
          colorPoi: 'hsl(210, 20%, 58%)',
          colorPoiParkLike: 'hsl(110, 70%, 40%)',
          colorPoiMedical: 'hsl(0, 70%, 70%)',
          colorPoiCommercialServices: 'hsl(260, 70%, 75%)',
          poiIconBackground: 'Circle',
          colorPoiStoreLike: 'hsl(210, 70%, 70%)',
          colorBase: 'hsl(20, 20%, 95%)',
          colorPoiSportAndLeisure: 'hsl(190, 60%, 60%)'
        },
        'walking-cycling': {
          colorPoi: 'hsl(210, 20%, 58%)',
          colorBase: 'hsl(20, 20%, 95%)',
          colorGreenspace: 'hsl(110, 60%, 80%)',
          colorPoiParkLike: 'hsl(110, 70%, 40%)',
          colorRoad: 'hsl(0, 0%, 100%)',
          colorRoadOutline: 'hsl(220, 20%, 85%)',
          colorRoadLabel: 'hsl(0,0%, 0%)'
        },
        transit: {
          poiIconBackground: 'Rectangle',
          poiIconScale: 0.8,
          colorPoi: 'hsl(210, 20%, 58%)',
          colorBase: 'hsl(20, 20%, 95%)',
          colorTransit: 'hsl(225, 60%, 58%)',
          colorWater: 'hsl(200, 100%, 80%)',
          colorAirport: 'hsl(225, 60%, 58%)',
          colorRoadOutline: 'hsl(220, 20%, 85%)'
        },
        terrain: {
          colorBase: 'hsl(20, 20%, 95%)',
          colorGreenspace: 'hsl(110, 60%, 80%)',
          colorPoiParkLike: 'hsl(110, 70%, 40%)',
          colorPoi: 'hsl(210, 20%, 58%)'
        },
        'land-and-water': {
          colorEducation: 'hsl(40, 50%, 88%)',
          colorGreenspace: 'hsl(110, 60%, 80%)',
          colorAirport: 'hsl(225, 60%, 58%)',
          colorIndustrialArea: 'hsl(230, 20%, 90%)',
          colorMedical: 'hsl(0, 50%, 92%)',
          transitionLandOnZoom: true,
          colorBase: 'hsl(20, 20%, 95%)',
          colorWater: 'hsl(200, 100%, 80%)',
          colorCommercialArea: 'hsl(45, 55%, 93%)',
          bathymetry: true
        },
        buildings: { colorBase: 'hsl(20, 20%, 95%)', colorUnderground: 'hsl(240, 60%, 92%)', underground: true, buildingEntrances: true }
      }
    },
    'maputnik:renderer': 'mbgljs'
  },
  center: [-92.25, 37.75],
  zoom: 2,
  sources: {
    composite: {
      tiles: [
        'https://api.mapbox.com/v4/mapbox.mapbox-streets-v8,mapbox.mapbox-terrain-v2,mapbox.mapbox-bathymetry-v2/{z}/{x}/{y}.vector.pbf?sku=101Swe5gW28BU&access_token=pk.eyJ1IjoibW9yZ2Vua2FmZmVlIiwiYSI6ImNpeHJmNXNmZTAwNHIycXBid2NqdTJibjMifQ.Dv1-GDpTWi0NP6xW9Fct1w'
      ],
      type: 'vector'
    }
  },
  sprite: 'https://vue-maplibre.meteosci.com/font/sprite-mapbox/sprite',
  glyphs:
    'https://api.mapbox.com/fonts/v1/mapbox/{fontstack}/{range}.pbf?access_token=pk.eyJ1IjoibW9yZ2Vua2FmZmVlIiwiYSI6ImNpeHJmNXNmZTAwNHIycXBid2NqdTJibjMifQ.Dv1-GDpTWi0NP6xW9Fct1w',
  layers: [
    {
      id: 'land',
      type: 'background',
      metadata: { 'mapbox:featureComponent': 'land-and-water', 'mapbox:group': 'Land & water, land' },
      layout: {},
      paint: { 'background-color': ['interpolate', ['linear'], ['zoom'], 9, 'hsl(20, 20%, 95%)', 11, 'hsl(20, 18%, 91%)'] }
    },
    {
      id: 'landcover',
      type: 'fill',
      metadata: { 'mapbox:featureComponent': 'land-and-water', 'mapbox:group': 'Land & water, land' },
      source: 'composite',
      'source-layer': 'landcover',
      maxzoom: 9,
      layout: {},
      paint: {
        'fill-color': ['match', ['get', 'class'], 'wood', 'hsla(115, 55%, 74%, 0.8)', 'snow', 'hsl(200, 70%, 90%)', 'hsl(110, 52%, 81%)'],
        'fill-opacity': ['interpolate', ['exponential', 1.5], ['zoom'], 8, 0.4, 9, 0],
        'fill-antialias': false
      }
    },
    {
      id: 'national-park',
      type: 'fill',
      metadata: { 'mapbox:featureComponent': 'land-and-water', 'mapbox:group': 'Land & water, land' },
      source: 'composite',
      'source-layer': 'landuse_overlay',
      minzoom: 5,
      filter: ['==', ['get', 'class'], 'national_park'],
      layout: {},
      paint: { 'fill-color': 'hsl(110, 41%, 78%)', 'fill-opacity': ['interpolate', ['linear'], ['zoom'], 5, 0, 6, 0.6, 12, 0.2] }
    },
    {
      id: 'landuse',
      type: 'fill',
      metadata: { 'mapbox:featureComponent': 'land-and-water', 'mapbox:group': 'Land & water, land' },
      source: 'composite',
      'source-layer': 'landuse',
      minzoom: 5,
      filter: [
        'all',
        ['>=', ['to-number', ['get', 'sizerank']], 0],
        [
          'match',
          ['get', 'class'],
          ['agriculture', 'wood', 'grass', 'scrub', 'park', 'airport', 'glacier', 'pitch', 'sand'],
          true,
          'residential',
          ['step', ['zoom'], true, 12, false],
          ['facility', 'industrial'],
          ['step', ['zoom'], false, 12, true],
          'cemetery',
          true,
          'school',
          true,
          'hospital',
          true,
          'commercial_area',
          true,
          false
        ],
        ['<=', ['-', ['to-number', ['get', 'sizerank']], ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0, 18, 14]], 14]
      ],
      layout: {},
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          [
            'match',
            ['get', 'class'],
            'wood',
            'hsla(115, 55%, 74%, 0.8)',
            'scrub',
            'hsla(110, 52%, 82%, 0.6)',
            'agriculture',
            'hsla(110, 55%, 88%, 0.6)',
            'park',
            'hsl(110, 60%, 80%)',
            'grass',
            'hsla(110, 55%, 88%, 0.6)',
            'airport',
            'hsl(225, 60%, 92%)',
            'cemetery',
            'hsl(110, 48%, 85%)',
            'glacier',
            'hsl(200, 70%, 90%)',
            'hospital',
            'hsl(0, 50%, 92%)',
            'pitch',
            'hsl(100, 70%, 85%)',
            'sand',
            'hsl(52, 65%, 86%)',
            'school',
            'hsl(40, 50%, 88%)',
            'commercial_area',
            'hsl(45, 55%, 93%)',
            'residential',
            'hsl(20, 7%, 97%)',
            ['facility', 'industrial'],
            'hsl(230, 20%, 90%)',
            'hsl(20, 22%, 86%)'
          ],
          16,
          [
            'match',
            ['get', 'class'],
            'wood',
            'hsla(115, 55%, 74%, 0.8)',
            'scrub',
            'hsla(110, 52%, 82%, 0.6)',
            'agriculture',
            'hsla(110, 55%, 88%, 0.6)',
            'park',
            'hsl(110, 60%, 80%)',
            'grass',
            'hsla(110, 55%, 88%, 0.6)',
            'airport',
            'hsl(225, 60%, 92%)',
            'cemetery',
            'hsl(110, 48%, 85%)',
            'glacier',
            'hsl(200, 70%, 90%)',
            'hospital',
            'hsl(0, 50%, 92%)',
            'pitch',
            'hsl(100, 70%, 85%)',
            'sand',
            'hsl(52, 65%, 86%)',
            'school',
            'hsl(40, 50%, 88%)',
            'commercial_area',
            'hsla(45, 55%, 93%, 0.5)',
            ['facility', 'industrial'],
            'hsl(230, 20%, 90%)',
            'hsl(20, 22%, 86%)'
          ]
        ],
        'fill-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          8,
          ['match', ['get', 'class'], ['residential', 'airport'], 0.8, 0.2],
          12,
          ['match', ['get', 'class'], 'residential', 0, 1]
        ]
      }
    },
    {
      id: 'pitch-outline',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'land-and-water', 'mapbox:group': 'Land & water, land' },
      source: 'composite',
      'source-layer': 'landuse',
      minzoom: 15,
      filter: ['==', ['get', 'class'], 'pitch'],
      layout: {},
      paint: { 'line-color': 'hsl(100, 65%, 75%)' }
    },
    {
      id: 'waterway-shadow',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'land-and-water', 'mapbox:group': 'Land & water, water' },
      source: 'composite',
      'source-layer': 'waterway',
      minzoom: 8,
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 11, 'round'], 'line-join': 'round' },
      paint: {
        'line-color': 'hsl(219, 100%, 79%)',
        'line-width': [
          'interpolate',
          ['exponential', 1.3],
          ['zoom'],
          9,
          ['match', ['get', 'class'], ['canal', 'river'], 0.1, 0],
          20,
          ['match', ['get', 'class'], ['canal', 'river'], 8, 3]
        ],
        'line-translate': ['interpolate', ['exponential', 1.2], ['zoom'], 7, ['literal', [0, 0]], 16, ['literal', [-1, -1]]],
        'line-translate-anchor': 'viewport',
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 8, 0, 8.5, 1]
      }
    },
    {
      id: 'water-shadow',
      type: 'fill',
      metadata: { 'mapbox:featureComponent': 'land-and-water', 'mapbox:group': 'Land & water, water' },
      source: 'composite',
      'source-layer': 'water',
      minzoom: 7,
      layout: {},
      paint: {
        'fill-color': 'hsl(219, 100%, 79%)',
        'fill-translate': ['interpolate', ['exponential', 1.2], ['zoom'], 7, ['literal', [0, 0]], 16, ['literal', [-1, -1]]],
        'fill-translate-anchor': 'viewport'
      }
    },
    {
      id: 'waterway',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'land-and-water', 'mapbox:group': 'Land & water, water' },
      source: 'composite',
      'source-layer': 'waterway',
      minzoom: 8,
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 11, 'round'], 'line-join': 'round' },
      paint: {
        'line-color': 'hsl(200, 100%, 80%)',
        'line-width': [
          'interpolate',
          ['exponential', 1.3],
          ['zoom'],
          9,
          ['match', ['get', 'class'], ['canal', 'river'], 0.1, 0],
          20,
          ['match', ['get', 'class'], ['canal', 'river'], 8, 3]
        ],
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 8, 0, 8.5, 1]
      }
    },
    {
      id: 'water',
      type: 'fill',
      metadata: { 'mapbox:featureComponent': 'land-and-water', 'mapbox:group': 'Land & water, water' },
      source: 'composite',
      'source-layer': 'water',
      layout: {},
      paint: { 'fill-color': 'hsl(200, 100%, 80%)' }
    },
    {
      id: 'water-depth',
      type: 'fill',
      metadata: { 'mapbox:featureComponent': 'land-and-water', 'mapbox:group': 'Land & water, water' },
      source: 'composite',
      'source-layer': 'depth',
      maxzoom: 8,
      layout: {},
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['zoom'],
          6,
          [
            'interpolate',
            ['linear'],
            ['get', 'min_depth'],
            0,
            'hsla(200, 100%, 80%, 0.35)',
            200,
            'hsla(200, 100%, 72%, 0.35)',
            7000,
            'hsla(200, 100%, 64%, 0.35)'
          ],
          8,
          [
            'interpolate',
            ['linear'],
            ['get', 'min_depth'],
            0,
            'hsla(200, 100%, 80%, 0)',
            200,
            'hsla(200, 100%, 72%, 0)',
            7000,
            'hsla(200, 100%, 60%, 0)'
          ]
        ]
      }
    },
    {
      id: 'hillshade',
      type: 'fill',
      metadata: { 'mapbox:featureComponent': 'terrain', 'mapbox:group': 'Terrain, land' },
      source: 'composite',
      'source-layer': 'hillshade',
      maxzoom: 16,
      layout: {},
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['zoom'],
          14,
          ['match', ['get', 'class'], 'shadow', 'hsla(40, 41%, 21%, 0.06)', 'hsla(20, 20%, 100%, 0.12)'],
          16,
          ['match', ['get', 'class'], 'shadow', 'hsla(40, 41%, 21%, 0)', 'hsla(20, 20%, 100%, 0)']
        ],
        'fill-antialias': false
      }
    },
    {
      id: 'land-structure-polygon',
      type: 'fill',
      metadata: { 'mapbox:featureComponent': 'land-and-water', 'mapbox:group': 'Land & water, built' },
      source: 'composite',
      'source-layer': 'structure',
      minzoom: 13,
      filter: ['all', ['==', ['get', 'class'], 'land'], ['==', ['geometry-type'], 'Polygon']],
      layout: {},
      paint: { 'fill-color': ['interpolate', ['linear'], ['zoom'], 9, 'hsl(20, 20%, 95%)', 11, 'hsl(20, 18%, 91%)'] }
    },
    {
      id: 'land-structure-line',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'land-and-water', 'mapbox:group': 'Land & water, built' },
      source: 'composite',
      'source-layer': 'structure',
      minzoom: 13,
      filter: ['all', ['==', ['get', 'class'], 'land'], ['==', ['geometry-type'], 'LineString']],
      layout: { 'line-cap': 'square' },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.99], ['zoom'], 14, 0.75, 20, 40],
        'line-color': ['interpolate', ['linear'], ['zoom'], 9, 'hsl(20, 20%, 95%)', 11, 'hsl(20, 18%, 91%)']
      }
    },
    {
      id: 'aeroway-polygon',
      type: 'fill',
      metadata: { 'mapbox:featureComponent': 'transit', 'mapbox:group': 'Transit, built' },
      source: 'composite',
      'source-layer': 'aeroway',
      minzoom: 11,
      filter: ['all', ['match', ['get', 'type'], ['runway', 'taxiway', 'helipad'], true, false], ['==', ['geometry-type'], 'Polygon']],
      paint: { 'fill-color': 'hsl(225, 52%, 87%)', 'fill-opacity': ['interpolate', ['linear'], ['zoom'], 10, 0, 11, 1] }
    },
    {
      id: 'aeroway-line',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'transit', 'mapbox:group': 'Transit, built' },
      source: 'composite',
      'source-layer': 'aeroway',
      minzoom: 9,
      filter: ['==', ['geometry-type'], 'LineString'],
      paint: {
        'line-color': 'hsl(225, 52%, 87%)',
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          9,
          ['match', ['get', 'type'], 'runway', 1, 0.5],
          18,
          ['match', ['get', 'type'], 'runway', 80, 20]
        ],
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 10, 0, 11, 1]
      }
    },
    {
      id: 'building',
      type: 'fill',
      metadata: { 'mapbox:featureComponent': 'buildings', 'mapbox:group': 'Buildings, built' },
      source: 'composite',
      'source-layer': 'building',
      minzoom: 15,
      filter: ['all', ['!=', ['get', 'type'], 'building:part'], ['==', ['get', 'underground'], 'false']],
      layout: {},
      paint: {
        'fill-color': 'hsl(20, 15%, 85%)',
        'fill-opacity': ['interpolate', ['linear'], ['zoom'], 15, 0, 16, 1],
        'fill-outline-color': 'hsl(20, 10%, 79%)'
      }
    },
    {
      id: 'building-underground',
      type: 'fill',
      metadata: { 'mapbox:featureComponent': 'buildings', 'mapbox:group': 'Buildings, built' },
      source: 'composite',
      'source-layer': 'building',
      minzoom: 15,
      filter: ['all', ['==', ['get', 'underground'], 'true'], ['==', ['geometry-type'], 'Polygon']],
      layout: {},
      paint: { 'fill-color': 'hsl(240, 60%, 92%)', 'fill-opacity': ['interpolate', ['linear'], ['zoom'], 15, 0, 16, 0.5] }
    },
    {
      id: 'tunnel-minor-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels-case' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'tunnel'],
        ['match', ['get', 'class'], ['track'], true, 'service', ['step', ['zoom'], false, 14, true], false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.8, 22, 2],
        'line-color': 'hsl(220, 13%, 72%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 18, 10, 22, 100],
        'line-dasharray': [3, 3]
      }
    },
    {
      id: 'tunnel-street-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels-case' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'tunnel'],
        ['match', ['get', 'class'], ['street', 'street_limited'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.8, 22, 2],
        'line-color': 'hsl(220, 13%, 72%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.5, 18, 20, 22, 200],
        'line-opacity': ['step', ['zoom'], 0, 14, 1],
        'line-dasharray': [3, 3]
      }
    },
    {
      id: 'tunnel-minor-link-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels-case' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['match', ['get', 'class'], ['primary_link', 'secondary_link', 'tertiary_link'], true, false],
        ['==', ['get', 'structure'], 'tunnel'],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.8, 22, 2],
        'line-color': 'hsl(220, 20%, 85%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.4, 18, 18, 22, 180],
        'line-opacity': ['step', ['zoom'], 0, 11, 1]
      }
    },
    {
      id: 'tunnel-secondary-tertiary-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels-case' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 11,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'tunnel'],
        ['match', ['get', 'class'], ['secondary', 'tertiary'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 22, 2],
        'line-color': 'hsl(220, 13%, 72%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0, 18, 26, 22, 260],
        'line-dasharray': [3, 3]
      }
    },
    {
      id: 'tunnel-primary-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels-case' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 9,
      filter: ['all', ['==', ['get', 'structure'], 'tunnel'], ['==', ['get', 'class'], 'primary'], ['==', ['geometry-type'], 'LineString']],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 22, 2],
        'line-color': 'hsl(220, 13%, 72%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0.8, 18, 28, 22, 280],
        'line-dasharray': [3, 3]
      }
    },
    {
      id: 'tunnel-major-link-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels-case' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'tunnel'],
        ['match', ['get', 'class'], ['motorway_link', 'trunk_link'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.8, 22, 2],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.8, 18, 20, 22, 200],
        'line-dasharray': [3, 3]
      }
    },
    {
      id: 'tunnel-motorway-trunk-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels-case' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'tunnel'],
        ['match', ['get', 'class'], ['motorway', 'trunk'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 22, 2],
        'line-color': 'hsl(220, 20%, 97%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0.8, 18, 30, 22, 300],
        'line-dasharray': [3, 3]
      }
    },
    {
      id: 'tunnel-path',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., tunnels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'tunnel'],
        ['==', ['get', 'class'], 'path'],
        ['!=', ['get', 'type'], 'steps'],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: {},
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 15, 1, 18, 4],
        'line-color': 'hsl(20, 32%, 95%)',
        'line-dasharray': ['step', ['zoom'], ['literal', [1, 0]], 15, ['literal', [1.75, 1]], 16, ['literal', [1, 0.75]], 17, ['literal', [1, 0.5]]]
      }
    },
    {
      id: 'tunnel-steps',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., tunnels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: ['all', ['==', ['get', 'structure'], 'tunnel'], ['==', ['get', 'type'], 'steps'], ['==', ['geometry-type'], 'LineString']],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 15, 1, 16, 1.6, 18, 6],
        'line-color': 'hsl(20, 32%, 95%)',
        'line-dasharray': ['step', ['zoom'], ['literal', [1, 0]], 15, ['literal', [1.75, 1]], 16, ['literal', [1, 0.75]], 17, ['literal', [0.3, 0.3]]]
      }
    },
    {
      id: 'tunnel-pedestrian',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., tunnels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: ['all', ['==', ['get', 'structure'], 'tunnel'], ['==', ['get', 'class'], 'pedestrian'], ['==', ['geometry-type'], 'LineString']],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.5, 18, 12],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-dasharray': ['step', ['zoom'], ['literal', [1, 0]], 15, ['literal', [1.5, 0.4]], 16, ['literal', [1, 0.2]]]
      }
    },
    {
      id: 'tunnel-construction',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: ['all', ['==', ['get', 'structure'], 'tunnel'], ['==', ['get', 'class'], 'construction'], ['==', ['geometry-type'], 'LineString']],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 2, 18, 20, 22, 200],
        'line-color': 'hsl(220, 20%, 85%)',
        'line-dasharray': [
          'step',
          ['zoom'],
          ['literal', [0.4, 0.8]],
          15,
          ['literal', [0.3, 0.6]],
          16,
          ['literal', [0.2, 0.3]],
          17,
          ['literal', [0.2, 0.25]],
          18,
          ['literal', [0.15, 0.15]]
        ]
      }
    },
    {
      id: 'tunnel-minor',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'tunnel'],
        ['match', ['get', 'class'], ['track'], true, 'service', ['step', ['zoom'], false, 14, true], false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 18, 10, 22, 100],
        'line-color': ['match', ['get', 'class'], 'street_limited', 'hsl(20, 22%, 94%)', 'hsl(0, 0%, 100%)']
      }
    },
    {
      id: 'tunnel-minor-link',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['match', ['get', 'class'], ['primary_link', 'secondary_link', 'tertiary_link'], true, false],
        ['==', ['get', 'structure'], 'tunnel'],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 13, 'round'], 'line-join': ['step', ['zoom'], 'miter', 13, 'round'] },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.4, 18, 18, 22, 180], 'line-color': 'hsl(0, 0%, 100%)' }
    },
    {
      id: 'tunnel-major-link',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'tunnel'],
        ['match', ['get', 'class'], ['motorway_link', 'trunk_link'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.8, 18, 20, 22, 200],
        'line-color': ['match', ['get', 'class'], 'motorway_link', 'hsl(30, 100%, 80%)', 'hsl(50, 78%, 80%)']
      }
    },
    {
      id: 'tunnel-street',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'tunnel'],
        ['match', ['get', 'class'], ['street', 'street_limited'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.5, 18, 20, 22, 200],
        'line-color': ['match', ['get', 'class'], 'street_limited', 'hsl(20, 22%, 94%)', 'hsl(0, 0%, 100%)'],
        'line-opacity': ['step', ['zoom'], 0, 14, 1]
      }
    },
    {
      id: 'tunnel-street-low',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      maxzoom: 14,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'tunnel'],
        ['match', ['get', 'class'], ['street', 'street_limited'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.5, 18, 20, 22, 200], 'line-color': 'hsl(0, 0%, 100%)' }
    },
    {
      id: 'tunnel-secondary-tertiary',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'tunnel'],
        ['match', ['get', 'class'], ['secondary', 'tertiary'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0, 18, 26, 22, 260], 'line-color': 'hsl(0, 0%, 100%)' }
    },
    {
      id: 'tunnel-primary',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: ['all', ['==', ['get', 'structure'], 'tunnel'], ['==', ['get', 'class'], 'primary'], ['==', ['geometry-type'], 'LineString']],
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0.8, 18, 28, 22, 280], 'line-color': 'hsl(0, 0%, 100%)' }
    },
    {
      id: 'tunnel-motorway-trunk',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'tunnel'],
        ['match', ['get', 'class'], ['motorway', 'trunk'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0.8, 18, 30, 22, 300],
        'line-color': ['match', ['get', 'class'], 'motorway', 'hsl(30, 100%, 80%)', 'hsl(50, 78%, 80%)']
      }
    },
    {
      id: 'tunnel-oneway-arrow-blue',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 16,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'tunnel'],
        ['==', ['get', 'oneway'], 'true'],
        [
          'step',
          ['zoom'],
          ['match', ['get', 'class'], ['primary', 'secondary', 'street', 'street_limited', 'tertiary'], true, false],
          16,
          [
            'match',
            ['get', 'class'],
            ['primary', 'secondary', 'tertiary', 'street', 'street_limited', 'primary_link', 'secondary_link', 'tertiary_link', 'service', 'track'],
            true,
            false
          ]
        ]
      ],
      layout: {
        'symbol-placement': 'line',
        'icon-image': ['step', ['zoom'], 'oneway-small', 18, 'oneway-large'],
        'symbol-spacing': 200,
        'icon-rotation-alignment': 'map',
        'icon-allow-overlap': true,
        'icon-ignore-placement': true
      },
      paint: {}
    },
    {
      id: 'tunnel-oneway-arrow-white',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, tunnels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 16,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'tunnel'],
        ['match', ['get', 'class'], ['motorway', 'motorway_link', 'trunk', 'trunk_link'], true, false],
        ['==', ['get', 'oneway'], 'true']
      ],
      layout: {
        'symbol-placement': 'line',
        'icon-image': ['step', ['zoom'], 'oneway-white-small', 18, 'oneway-white-large'],
        'symbol-spacing': 200,
        'icon-rotation-alignment': 'map',
        'icon-allow-overlap': true,
        'icon-ignore-placement': true
      },
      paint: {}
    },
    {
      id: 'ferry',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'transit', 'mapbox:group': 'Transit, ferries' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 8,
      filter: ['==', ['get', 'type'], 'ferry'],
      paint: {
        'line-color': ['interpolate', ['linear'], ['zoom'], 15, 'hsl(209, 93%, 73%)', 17, 'hsl(234, 93%, 73%)'],
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.5, 20, 1],
        'line-dasharray': ['step', ['zoom'], ['literal', [1, 0]], 13, ['literal', [12, 4]]]
      }
    },
    {
      id: 'ferry-auto',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'transit', 'mapbox:group': 'Transit, ferries' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 8,
      filter: ['==', ['get', 'type'], 'ferry_auto'],
      paint: {
        'line-color': ['interpolate', ['linear'], ['zoom'], 15, 'hsl(209, 93%, 73%)', 17, 'hsl(234, 93%, 73%)'],
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.5, 20, 1]
      }
    },
    {
      id: 'road-pedestrian-polygon-fill',
      type: 'fill',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: [
        'all',
        ['match', ['get', 'class'], ['path', 'pedestrian'], true, false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['case', ['has', 'layer'], ['>=', ['get', 'layer'], 0], true],
        ['==', ['geometry-type'], 'Polygon']
      ],
      paint: { 'fill-color': 'hsl(20, 20%, 94%)' }
    },
    {
      id: 'road-pedestrian-polygon-pattern',
      type: 'fill',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 16,
      filter: [
        'all',
        ['match', ['get', 'class'], ['path', 'pedestrian'], true, false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['case', ['has', 'layer'], ['>=', ['get', 'layer'], 0], true],
        ['==', ['geometry-type'], 'Polygon']
      ],
      paint: { 'fill-pattern': 'pedestrian-polygon', 'fill-opacity': ['interpolate', ['linear'], ['zoom'], 16, 0, 17, 1] }
    },
    {
      id: 'road-path-bg',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: [
        'all',
        ['==', ['get', 'class'], 'path'],
        ['step', ['zoom'], ['!', ['match', ['get', 'type'], ['steps', 'sidewalk', 'crossing'], true, false]], 16, ['!=', ['get', 'type'], 'steps']],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 15, 2, 18, 7], 'line-color': 'hsl(220, 11%, 79%)' }
    },
    {
      id: 'road-steps-bg',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: [
        'all',
        ['==', ['get', 'type'], 'steps'],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-join': 'round' },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 15, 2, 17, 4.6, 18, 7],
        'line-color': 'hsl(220, 11%, 79%)',
        'line-opacity': 0.75
      }
    },
    {
      id: 'road-pedestrian-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: [
        'all',
        ['==', ['get', 'class'], 'pedestrian'],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['case', ['has', 'layer'], ['>=', ['get', 'layer'], 0], true],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 2, 18, 14.5], 'line-color': 'hsl(220, 20%, 85%)' }
    },
    {
      id: 'road-path',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: [
        'all',
        ['==', ['get', 'class'], 'path'],
        ['step', ['zoom'], ['!', ['match', ['get', 'type'], ['steps', 'sidewalk', 'crossing'], true, false]], 16, ['!=', ['get', 'type'], 'steps']],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 13, 0.5, 14, 1, 15, 1, 18, 4],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-dasharray': [
          'step',
          ['zoom'],
          ['literal', [4, 0.3]],
          15,
          ['literal', [1.75, 0.3]],
          16,
          ['literal', [1, 0.3]],
          17,
          ['literal', [1, 0.25]]
        ]
      }
    },
    {
      id: 'road-steps',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: [
        'all',
        ['==', ['get', 'type'], 'steps'],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-join': 'round' },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 15, 1, 16, 1.6, 18, 6],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-dasharray': ['step', ['zoom'], ['literal', [1, 0]], 15, ['literal', [1.75, 1]], 16, ['literal', [1, 0.75]], 17, ['literal', [0.3, 0.3]]]
      }
    },
    {
      id: 'road-pedestrian',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: [
        'all',
        ['==', ['get', 'class'], 'pedestrian'],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['case', ['has', 'layer'], ['>=', ['get', 'layer'], 0], true],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.5, 18, 12],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-dasharray': ['step', ['zoom'], ['literal', [1, 0]], 15, ['literal', [1.5, 0.4]], 16, ['literal', [1, 0.2]]]
      }
    },
    {
      id: 'golf-hole-line',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 16,
      filter: ['==', ['get', 'class'], 'golf'],
      paint: { 'line-color': 'hsl(110, 29%, 70%)' }
    },
    {
      id: 'road-polygon',
      type: 'fill',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: [
        'all',
        [
          'match',
          ['get', 'class'],
          [
            'primary',
            'secondary',
            'tertiary',
            'primary_link',
            'secondary_link',
            'tertiary_link',
            'trunk',
            'trunk_link',
            'street',
            'street_limited',
            'track',
            'service'
          ],
          true,
          false
        ],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'Polygon']
      ],
      paint: { 'fill-color': 'hsl(0, 0%, 100%)', 'fill-outline-color': 'hsl(220, 20%, 85%)' }
    },
    {
      id: 'turning-feature-outline',
      type: 'circle',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 15,
      filter: ['all', ['match', ['get', 'class'], ['turning_circle', 'turning_loop'], true, false], ['==', ['geometry-type'], 'Point']],
      paint: {
        'circle-radius': ['interpolate', ['exponential', 1.5], ['zoom'], 15, 4.5, 16, 8, 18, 20, 22, 200],
        'circle-color': 'hsl(0, 0%, 100%)',
        'circle-stroke-width': ['interpolate', ['linear'], ['zoom'], 15, 0.8, 16, 1.2, 18, 2],
        'circle-stroke-color': 'hsl(220, 20%, 85%)',
        'circle-pitch-alignment': 'map'
      }
    },
    {
      id: 'road-minor-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['match', ['get', 'class'], ['track'], true, 'service', ['step', ['zoom'], false, 14, true], false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.8, 22, 2],
        'line-color': 'hsl(220, 20%, 85%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 18, 10, 22, 100]
      }
    },
    {
      id: 'road-street-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: [
        'all',
        ['match', ['get', 'class'], ['street', 'street_limited'], true, false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.8, 22, 2],
        'line-color': 'hsl(220, 20%, 85%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.5, 18, 20, 22, 200],
        'line-opacity': ['step', ['zoom'], 0, 14, 1]
      }
    },
    {
      id: 'road-minor-link-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['match', ['get', 'class'], ['primary_link', 'secondary_link', 'tertiary_link'], true, false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.8, 22, 2],
        'line-color': 'hsl(220, 20%, 85%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.4, 18, 18, 22, 180],
        'line-opacity': ['step', ['zoom'], 0, 11, 1]
      }
    },
    {
      id: 'road-secondary-tertiary-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 11,
      filter: [
        'all',
        ['match', ['get', 'class'], ['secondary', 'tertiary'], true, false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.8, 22, 2],
        'line-color': 'hsl(220, 20%, 85%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0, 18, 26, 22, 260]
      }
    },
    {
      id: 'road-primary-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 9,
      filter: [
        'all',
        ['==', ['get', 'class'], 'primary'],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 22, 2],
        'line-color': 'hsl(220, 20%, 85%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0.8, 18, 28, 22, 280]
      }
    },
    {
      id: 'road-major-link-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: [
        'all',
        ['match', ['get', 'class'], ['motorway_link', 'trunk_link'], true, false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.8, 22, 2],
        'line-color': 'hsl(220, 20%, 97%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.8, 18, 20, 22, 200],
        'line-opacity': ['step', ['zoom'], 0, 11, 1]
      }
    },
    {
      id: 'road-motorway-trunk-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 3,
      filter: [
        'all',
        [
          'step',
          ['zoom'],
          ['match', ['get', 'class'], ['motorway', 'trunk'], true, false],
          5,
          ['all', ['match', ['get', 'class'], ['motorway', 'trunk'], true, false], ['match', ['get', 'structure'], ['none', 'ford'], true, false]]
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 22, 2],
        'line-color': 'hsl(220, 20%, 97%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0.8, 18, 30, 22, 300],
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 3, 0, 3.5, 1]
      }
    },
    {
      id: 'turning-feature',
      type: 'circle',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 15,
      filter: ['all', ['match', ['get', 'class'], ['turning_circle', 'turning_loop'], true, false], ['==', ['geometry-type'], 'Point']],
      paint: {
        'circle-radius': ['interpolate', ['exponential', 1.5], ['zoom'], 15, 4.5, 16, 8, 18, 20, 22, 200],
        'circle-color': 'hsl(0, 0%, 100%)',
        'circle-pitch-alignment': 'map'
      }
    },
    {
      id: 'road-construction',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: [
        'all',
        ['==', ['get', 'class'], 'construction'],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 2, 18, 20, 22, 200],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-dasharray': [
          'step',
          ['zoom'],
          ['literal', [0.4, 0.8]],
          15,
          ['literal', [0.3, 0.6]],
          16,
          ['literal', [0.2, 0.3]],
          17,
          ['literal', [0.2, 0.25]],
          18,
          ['literal', [0.15, 0.15]]
        ]
      }
    },
    {
      id: 'road-minor',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['match', ['get', 'class'], ['track'], true, 'service', ['step', ['zoom'], false, 14, true], false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 18, 10, 22, 100], 'line-color': 'hsl(0, 0%, 100%)' }
    },
    {
      id: 'road-minor-link',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: [
        'all',
        ['match', ['get', 'class'], ['primary_link', 'secondary_link', 'tertiary_link'], true, false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 13, 'round'], 'line-join': ['step', ['zoom'], 'miter', 13, 'round'] },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.4, 18, 18, 22, 180], 'line-color': 'hsl(0, 0%, 100%)' }
    },
    {
      id: 'road-major-link',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: [
        'all',
        ['match', ['get', 'class'], ['motorway_link', 'trunk_link'], true, false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 13, 'round'], 'line-join': ['step', ['zoom'], 'miter', 13, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.8, 18, 20, 22, 200],
        'line-color': ['match', ['get', 'class'], 'motorway_link', 'hsl(30, 100%, 70%)', 'hsl(50, 89%, 70%)']
      }
    },
    {
      id: 'road-street',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['match', ['get', 'class'], ['street', 'street_limited'], true, false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.5, 18, 20, 22, 200],
        'line-color': ['match', ['get', 'class'], 'street_limited', 'hsl(20, 22%, 94%)', 'hsl(0, 0%, 100%)'],
        'line-opacity': ['step', ['zoom'], 0, 14, 1]
      }
    },
    {
      id: 'road-street-low',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 11,
      maxzoom: 14,
      filter: [
        'all',
        ['match', ['get', 'class'], ['street', 'street_limited'], true, false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.5, 18, 20, 22, 200], 'line-color': 'hsl(0, 0%, 100%)' }
    },
    {
      id: 'road-secondary-tertiary',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 8,
      filter: [
        'all',
        ['match', ['get', 'class'], ['secondary', 'tertiary'], true, false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0, 18, 26, 22, 260], 'line-color': 'hsl(0, 0%, 100%)' }
    },
    {
      id: 'road-primary',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 6,
      filter: [
        'all',
        ['==', ['get', 'class'], 'primary'],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0.8, 18, 28, 22, 280], 'line-color': 'hsl(0, 0%, 100%)' }
    },
    {
      id: 'road-motorway-trunk',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 3,
      filter: [
        'all',
        [
          'step',
          ['zoom'],
          ['match', ['get', 'class'], ['motorway', 'trunk'], true, false],
          5,
          ['all', ['match', ['get', 'class'], ['motorway', 'trunk'], true, false], ['match', ['get', 'structure'], ['none', 'ford'], true, false]]
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 13, 'round'], 'line-join': ['step', ['zoom'], 'miter', 13, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0.8, 18, 30, 22, 300],
        'line-color': [
          'step',
          ['zoom'],
          ['match', ['get', 'class'], 'motorway', 'hsl(30, 88%, 64%)', 'trunk', 'hsl(50, 81%, 54%)', 'hsl(20, 18%, 100%)'],
          9,
          ['match', ['get', 'class'], 'motorway', 'hsl(30, 100%, 70%)', 'hsl(50, 89%, 70%)']
        ],
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 3, 0, 3.5, 1]
      }
    },
    {
      id: 'road-rail',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'transit', 'mapbox:group': 'Transit, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['match', ['get', 'class'], ['major_rail', 'minor_rail'], true, false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false]
      ],
      paint: {
        'line-color': ['interpolate', ['linear'], ['zoom'], 13, 'hsl(35, 25%, 82%)', 16, 'hsl(220, 4%, 71%)'],
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.5, 20, 1]
      }
    },
    {
      id: 'road-rail-tracks',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'transit', 'mapbox:group': 'Transit, surface' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['match', ['get', 'class'], ['major_rail', 'minor_rail'], true, false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false]
      ],
      paint: {
        'line-color': ['interpolate', ['linear'], ['zoom'], 13, 'hsl(35, 25%, 82%)', 16, 'hsl(220, 4%, 71%)'],
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 4, 20, 8],
        'line-dasharray': [0.1, 15],
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 13.75, 0, 14, 1]
      }
    },
    {
      id: 'level-crossing',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface-icons' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 16,
      filter: ['==', ['get', 'class'], 'level_crossing'],
      layout: { 'icon-image': 'level-crossing', 'icon-rotation-alignment': 'map', 'icon-allow-overlap': true, 'icon-ignore-placement': true },
      paint: {}
    },
    {
      id: 'road-oneway-arrow-blue',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface-icons' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 16,
      filter: [
        'all',
        ['==', ['get', 'oneway'], 'true'],
        [
          'step',
          ['zoom'],
          ['match', ['get', 'class'], ['primary', 'secondary', 'tertiary', 'street', 'street_limited'], true, false],
          16,
          [
            'match',
            ['get', 'class'],
            ['primary', 'secondary', 'tertiary', 'street', 'street_limited', 'primary_link', 'secondary_link', 'tertiary_link', 'service', 'track'],
            true,
            false
          ]
        ],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false]
      ],
      layout: {
        'symbol-placement': 'line',
        'icon-image': ['step', ['zoom'], 'oneway-small', 18, 'oneway-large'],
        'symbol-spacing': 200,
        'icon-rotation-alignment': 'map',
        'icon-allow-overlap': true,
        'icon-ignore-placement': true
      },
      paint: {}
    },
    {
      id: 'road-oneway-arrow-white',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface-icons' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 16,
      filter: [
        'all',
        ['==', ['get', 'oneway'], 'true'],
        ['match', ['get', 'class'], ['motorway', 'trunk', 'motorway_link', 'trunk_link'], true, false],
        ['match', ['get', 'structure'], ['none', 'ford'], true, false]
      ],
      layout: {
        'symbol-placement': 'line',
        'icon-image': ['step', ['zoom'], 'oneway-white-small', 18, 'oneway-white-large'],
        'symbol-spacing': 200,
        'icon-rotation-alignment': 'map',
        'icon-allow-overlap': true,
        'icon-ignore-placement': true
      },
      paint: {}
    },
    {
      id: 'crosswalks',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, surface-icons' },
      source: 'composite',
      'source-layer': 'structure',
      minzoom: 17,
      filter: ['all', ['==', ['get', 'type'], 'crosswalk'], ['==', ['geometry-type'], 'Point']],
      layout: {
        'icon-size': ['interpolate', ['linear'], ['zoom'], 16, 0.1, 18, 0.2, 19, 0.5, 22, 1.5],
        'icon-image': ['step', ['zoom'], 'crosswalk-small', 18, 'crosswalk-large'],
        'icon-rotate': ['get', 'direction'],
        'icon-rotation-alignment': 'map',
        'icon-allow-overlap': true,
        'icon-ignore-placement': true
      },
      paint: {}
    },
    {
      id: 'bridge-path-bg',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., barriers-bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['==', ['get', 'class'], 'path'],
        ['step', ['zoom'], ['!', ['match', ['get', 'type'], ['steps', 'sidewalk', 'crossing'], true, false]], 16, ['!=', ['get', 'type'], 'steps']],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'] },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 15, 2, 18, 7], 'line-color': 'hsl(220, 11%, 79%)' }
    },
    {
      id: 'bridge-steps-bg',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., barriers-bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: ['all', ['==', ['get', 'type'], 'steps'], ['==', ['get', 'structure'], 'bridge'], ['==', ['geometry-type'], 'LineString']],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 15, 2, 17, 4.6, 18, 7],
        'line-color': 'hsl(220, 11%, 79%)',
        'line-opacity': 0.75
      }
    },
    {
      id: 'bridge-pedestrian-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., barriers-bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: ['all', ['==', ['get', 'structure'], 'bridge'], ['==', ['get', 'class'], 'pedestrian'], ['==', ['geometry-type'], 'LineString']],
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 2, 18, 14.5], 'line-color': 'hsl(220, 20%, 85%)' }
    },
    {
      id: 'bridge-path',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., barriers-bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['==', ['get', 'class'], 'path'],
        ['!=', ['get', 'type'], 'steps'],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: {},
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 15, 1, 18, 4],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-dasharray': [
          'step',
          ['zoom'],
          ['literal', [4, 0.3]],
          15,
          ['literal', [1.75, 0.3]],
          16,
          ['literal', [1, 0.3]],
          17,
          ['literal', [1, 0.25]]
        ]
      }
    },
    {
      id: 'bridge-steps',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., barriers-bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: ['all', ['==', ['get', 'type'], 'steps'], ['==', ['get', 'structure'], 'bridge'], ['==', ['geometry-type'], 'LineString']],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 15, 1, 16, 1.6, 18, 6],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-dasharray': ['step', ['zoom'], ['literal', [1, 0]], 15, ['literal', [1.75, 1]], 16, ['literal', [1, 0.75]], 17, ['literal', [0.3, 0.3]]]
      }
    },
    {
      id: 'bridge-pedestrian',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., barriers-bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: ['all', ['==', ['get', 'structure'], 'bridge'], ['==', ['get', 'class'], 'pedestrian'], ['==', ['geometry-type'], 'LineString']],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.5, 18, 12],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-dasharray': ['step', ['zoom'], ['literal', [1, 0]], 15, ['literal', [1.5, 0.4]], 16, ['literal', [1, 0.2]]]
      }
    },
    {
      id: 'bridge-minor-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['match', ['get', 'class'], ['track'], true, 'service', ['step', ['zoom'], false, 14, true], false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.8, 22, 2],
        'line-color': 'hsl(220, 20%, 85%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 18, 10, 22, 100]
      }
    },
    {
      id: 'bridge-street-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['match', ['get', 'class'], ['street', 'street_limited'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.8, 22, 2],
        'line-color': 'hsl(220, 20%, 85%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.5, 18, 20, 22, 200],
        'line-opacity': ['step', ['zoom'], 0, 14, 1]
      }
    },
    {
      id: 'bridge-minor-link-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['match', ['get', 'class'], ['primary_link', 'secondary_link', 'tertiary_link'], true, false],
        ['==', ['get', 'structure'], 'bridge'],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.8, 22, 2],
        'line-color': 'hsl(220, 20%, 85%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.4, 18, 18, 22, 180],
        'line-opacity': ['step', ['zoom'], 0, 11, 1]
      }
    },
    {
      id: 'bridge-secondary-tertiary-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 11,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['match', ['get', 'class'], ['secondary', 'tertiary'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 22, 2],
        'line-color': 'hsl(220, 20%, 85%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0, 18, 26, 22, 260],
        'line-opacity': ['step', ['zoom'], 0, 10, 1]
      }
    },
    {
      id: 'bridge-primary-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 9,
      filter: ['all', ['==', ['get', 'structure'], 'bridge'], ['==', ['get', 'class'], 'primary'], ['==', ['geometry-type'], 'LineString']],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 22, 2],
        'line-color': 'hsl(220, 20%, 85%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0.8, 18, 28, 22, 280],
        'line-opacity': ['step', ['zoom'], 0, 10, 1]
      }
    },
    {
      id: 'bridge-major-link-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['match', ['get', 'class'], ['motorway_link', 'trunk_link'], true, false],
        ['<=', ['get', 'layer'], 1],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.8, 22, 2],
        'line-color': 'hsl(220, 20%, 97%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.8, 18, 20, 22, 200]
      }
    },
    {
      id: 'bridge-motorway-trunk-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['match', ['get', 'class'], ['motorway', 'trunk'], true, false],
        ['<=', ['get', 'layer'], 1],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 22, 2],
        'line-color': 'hsl(220, 20%, 97%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0.8, 18, 30, 22, 300]
      }
    },
    {
      id: 'bridge-construction',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 14,
      filter: ['all', ['==', ['get', 'structure'], 'bridge'], ['==', ['get', 'class'], 'construction'], ['==', ['geometry-type'], 'LineString']],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 2, 18, 20, 22, 200],
        'line-color': 'hsl(220, 20%, 85%)',
        'line-dasharray': [
          'step',
          ['zoom'],
          ['literal', [0.4, 0.8]],
          15,
          ['literal', [0.3, 0.6]],
          16,
          ['literal', [0.2, 0.3]],
          17,
          ['literal', [0.2, 0.25]],
          18,
          ['literal', [0.15, 0.15]]
        ]
      }
    },
    {
      id: 'bridge-minor',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['match', ['get', 'class'], ['track'], true, 'service', ['step', ['zoom'], false, 14, true], false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'] },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 18, 10, 22, 100], 'line-color': 'hsl(0, 0%, 100%)' }
    },
    {
      id: 'bridge-minor-link',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['match', ['get', 'class'], ['primary_link', 'secondary_link', 'tertiary_link'], true, false],
        ['==', ['get', 'structure'], 'bridge'],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': 'round' },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.4, 18, 18, 22, 180], 'line-color': 'hsl(0, 0%, 100%)' }
    },
    {
      id: 'bridge-major-link',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['match', ['get', 'class'], ['motorway_link', 'trunk_link'], true, false],
        ['<=', ['get', 'layer'], 1],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': 'round' },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.8, 18, 20, 22, 200],
        'line-color': ['match', ['get', 'class'], 'motorway_link', 'hsl(30, 100%, 70%)', 'hsl(50, 89%, 70%)']
      }
    },
    {
      id: 'bridge-street',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['match', ['get', 'class'], ['street', 'street_limited'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.5, 18, 20, 22, 200],
        'line-color': ['match', ['get', 'class'], 'street_limited', 'hsl(20, 22%, 94%)', 'hsl(0, 0%, 100%)'],
        'line-opacity': ['step', ['zoom'], 0, 14, 1]
      }
    },
    {
      id: 'bridge-street-low',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      maxzoom: 14,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['match', ['get', 'class'], ['street', 'street_limited'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'], 'line-join': ['step', ['zoom'], 'miter', 14, 'round'] },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.5, 18, 20, 22, 200], 'line-color': 'hsl(0, 0%, 100%)' }
    },
    {
      id: 'bridge-secondary-tertiary',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['match', ['get', 'class'], ['secondary', 'tertiary'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'] },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0, 18, 26, 22, 260], 'line-color': 'hsl(0, 0%, 100%)' }
    },
    {
      id: 'bridge-primary',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: ['all', ['==', ['get', 'structure'], 'bridge'], ['==', ['get', 'class'], 'primary'], ['==', ['geometry-type'], 'LineString']],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'] },
      paint: { 'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0.8, 18, 28, 22, 280], 'line-color': 'hsl(0, 0%, 100%)' }
    },
    {
      id: 'bridge-motorway-trunk',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['match', ['get', 'class'], ['motorway', 'trunk'], true, false],
        ['<=', ['get', 'layer'], 1],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': 'round' },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0.8, 18, 30, 22, 300],
        'line-color': ['match', ['get', 'class'], 'motorway', 'hsl(30, 100%, 70%)', 'hsl(50, 89%, 70%)']
      }
    },
    {
      id: 'bridge-major-link-2-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['>=', ['get', 'layer'], 2],
        ['match', ['get', 'class'], ['motorway_link', 'trunk_link'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.8, 22, 2],
        'line-color': 'hsl(220, 20%, 97%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.8, 18, 20, 22, 200]
      }
    },
    {
      id: 'bridge-motorway-trunk-2-case',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['>=', ['get', 'layer'], 2],
        ['match', ['get', 'class'], ['motorway', 'trunk'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 22, 2],
        'line-color': 'hsl(220, 20%, 97%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0.8, 18, 30, 22, 300]
      }
    },
    {
      id: 'bridge-major-link-2',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['>=', ['get', 'layer'], 2],
        ['match', ['get', 'class'], ['motorway_link', 'trunk_link'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': 'round' },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 12, 0.8, 18, 20, 22, 200],
        'line-color': ['match', ['get', 'class'], 'motorway_link', 'hsl(30, 100%, 70%)', 'hsl(50, 89%, 70%)']
      }
    },
    {
      id: 'bridge-motorway-trunk-2',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['>=', ['get', 'layer'], 2],
        ['match', ['get', 'class'], ['motorway', 'trunk'], true, false],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: { 'line-cap': ['step', ['zoom'], 'butt', 14, 'round'] },
      paint: {
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 3, 0.8, 18, 30, 22, 300],
        'line-color': ['match', ['get', 'class'], 'motorway', 'hsl(30, 100%, 70%)', 'hsl(50, 89%, 70%)']
      }
    },
    {
      id: 'bridge-oneway-arrow-blue',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 16,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['==', ['get', 'oneway'], 'true'],
        [
          'step',
          ['zoom'],
          ['match', ['get', 'class'], ['primary', 'secondary', 'tertiary', 'street', 'street_limited'], true, false],
          16,
          [
            'match',
            ['get', 'class'],
            ['primary', 'secondary', 'tertiary', 'street', 'street_limited', 'primary_link', 'secondary_link', 'tertiary_link', 'service', 'track'],
            true,
            false
          ]
        ]
      ],
      layout: {
        'symbol-placement': 'line',
        'icon-image': ['step', ['zoom'], 'oneway-small', 18, 'oneway-large'],
        'symbol-spacing': 200,
        'icon-rotation-alignment': 'map',
        'icon-allow-overlap': true,
        'icon-ignore-placement': true
      },
      paint: {}
    },
    {
      id: 'bridge-oneway-arrow-white',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 16,
      filter: [
        'all',
        ['==', ['get', 'structure'], 'bridge'],
        ['match', ['get', 'class'], ['motorway', 'trunk', 'motorway_link', 'trunk_link'], true, false],
        ['==', ['get', 'oneway'], 'true']
      ],
      layout: {
        'symbol-placement': 'line',
        'icon-image': 'oneway-white-small',
        'symbol-spacing': 200,
        'icon-rotation-alignment': 'map',
        'icon-allow-overlap': true,
        'icon-ignore-placement': true
      },
      paint: {}
    },
    {
      id: 'bridge-rail',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'transit', 'mapbox:group': 'Transit, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: ['all', ['==', ['get', 'structure'], 'bridge'], ['match', ['get', 'class'], ['major_rail', 'minor_rail'], true, false]],
      paint: {
        'line-color': ['interpolate', ['linear'], ['zoom'], 13, 'hsl(35, 25%, 82%)', 16, 'hsl(220, 4%, 71%)'],
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 0.5, 20, 1]
      }
    },
    {
      id: 'bridge-rail-tracks',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'transit', 'mapbox:group': 'Transit, bridges' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 13,
      filter: ['all', ['==', ['get', 'structure'], 'bridge'], ['match', ['get', 'class'], ['major_rail', 'minor_rail'], true, false]],
      paint: {
        'line-color': ['interpolate', ['linear'], ['zoom'], 13, 'hsl(35, 25%, 82%)', 16, 'hsl(220, 4%, 71%)'],
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 4, 20, 8],
        'line-dasharray': [0.1, 15],
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 13.75, 0, 14, 1]
      }
    },
    {
      id: 'aerialway',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'transit', 'mapbox:group': 'Transit, elevated' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: ['==', ['get', 'class'], 'aerialway'],
      paint: {
        'line-color': 'hsl(225, 60%, 58%)',
        'line-width': ['interpolate', ['exponential', 1.5], ['zoom'], 14, 1, 20, 2],
        'line-dasharray': [4, 1]
      }
    },
    {
      id: 'admin-1-boundary-bg',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'admin-boundaries', 'mapbox:group': 'Administrative boundaries, admin' },
      source: 'composite',
      'source-layer': 'admin',
      minzoom: 7,
      filter: [
        'all',
        ['==', ['get', 'admin_level'], 1],
        ['==', ['get', 'maritime'], 'false'],
        ['match', ['get', 'worldview'], ['all', 'US'], true, false]
      ],
      paint: {
        'line-color': 'hsl(240, 100%, 100%)',
        'line-width': ['interpolate', ['linear'], ['zoom'], 3, 3, 12, 6],
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 7, 0, 8, 0.5],
        'line-dasharray': [1, 0],
        'line-blur': ['interpolate', ['linear'], ['zoom'], 3, 0, 12, 3]
      }
    },
    {
      id: 'admin-0-boundary-bg',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'admin-boundaries', 'mapbox:group': 'Administrative boundaries, admin' },
      source: 'composite',
      'source-layer': 'admin',
      minzoom: 1,
      filter: [
        'all',
        ['==', ['get', 'admin_level'], 0],
        ['==', ['get', 'maritime'], 'false'],
        ['match', ['get', 'worldview'], ['all', 'US'], true, false]
      ],
      paint: {
        'line-width': ['interpolate', ['linear'], ['zoom'], 3, 4, 12, 8],
        'line-color': 'hsl(240, 100%, 100%)',
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 3, 0, 4, 0.5],
        'line-blur': ['interpolate', ['linear'], ['zoom'], 3, 0, 12, 2]
      }
    },
    {
      id: 'admin-1-boundary',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'admin-boundaries', 'mapbox:group': 'Administrative boundaries, admin' },
      source: 'composite',
      'source-layer': 'admin',
      minzoom: 2,
      filter: [
        'all',
        ['==', ['get', 'admin_level'], 1],
        ['==', ['get', 'maritime'], 'false'],
        ['match', ['get', 'worldview'], ['all', 'US'], true, false]
      ],
      layout: {},
      paint: {
        'line-dasharray': ['step', ['zoom'], ['literal', [2, 0]], 7, ['literal', [2, 2, 6, 2]]],
        'line-width': ['interpolate', ['linear'], ['zoom'], 3, 0.3, 12, 1.5],
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 2, 0, 3, 1],
        'line-color': 'hsl(240, 50%, 65%)'
      }
    },
    {
      id: 'admin-0-boundary',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'admin-boundaries', 'mapbox:group': 'Administrative boundaries, admin' },
      source: 'composite',
      'source-layer': 'admin',
      minzoom: 1,
      filter: [
        'all',
        ['==', ['get', 'admin_level'], 0],
        ['==', ['get', 'disputed'], 'false'],
        ['==', ['get', 'maritime'], 'false'],
        ['match', ['get', 'worldview'], ['all', 'US'], true, false]
      ],
      layout: {},
      paint: { 'line-color': 'hsl(240, 50%, 60%)', 'line-width': ['interpolate', ['linear'], ['zoom'], 3, 0.5, 12, 2], 'line-dasharray': [10, 0] }
    },
    {
      id: 'admin-0-boundary-disputed',
      type: 'line',
      metadata: { 'mapbox:featureComponent': 'admin-boundaries', 'mapbox:group': 'Administrative boundaries, admin' },
      source: 'composite',
      'source-layer': 'admin',
      minzoom: 1,
      filter: [
        'all',
        ['==', ['get', 'disputed'], 'true'],
        ['==', ['get', 'admin_level'], 0],
        ['==', ['get', 'maritime'], 'false'],
        ['match', ['get', 'worldview'], ['all', 'US'], true, false]
      ],
      paint: {
        'line-color': 'hsl(240, 50%, 60%)',
        'line-width': ['interpolate', ['linear'], ['zoom'], 3, 0.5, 12, 2],
        'line-dasharray': ['step', ['zoom'], ['literal', [3, 2, 5]], 7, ['literal', [2, 1.5]]]
      }
    },
    {
      id: 'block-number-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'buildings', 'mapbox:group': 'Buildings, building-labels' },
      source: 'composite',
      'source-layer': 'place_label',
      minzoom: 16,
      filter: ['all', ['==', ['get', 'class'], 'settlement_subdivision'], ['==', ['get', 'type'], 'block']],
      layout: {
        'text-field': ['get', 'name_zh-Hans'],
        'text-font': ['DIN Pro Italic', 'Arial Unicode MS Regular'],
        'text-max-width': 7,
        'text-size': 11
      },
      paint: { 'text-color': 'hsl(20, 18%, 57%)', 'text-halo-color': 'hsl(20, 17%, 100%)', 'text-halo-width': 0.5, 'text-halo-blur': 0.5 }
    },
    {
      id: 'building-entrance',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'buildings', 'mapbox:group': 'Buildings, building-labels' },
      source: 'composite',
      'source-layer': 'structure',
      minzoom: 18,
      filter: ['==', ['get', 'class'], 'entrance'],
      layout: {
        'icon-image': 'marker',
        'text-field': ['get', 'ref'],
        'text-size': 10,
        'text-offset': [0, -0.5],
        'text-font': ['DIN Pro Italic', 'Arial Unicode MS Regular']
      },
      paint: { 'text-color': 'hsl(20, 8%, 52%)', 'text-halo-color': 'hsl(20, 13%, 92%)', 'text-halo-width': 1, 'icon-opacity': 0.4 }
    },
    {
      id: 'building-number-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'buildings', 'mapbox:group': 'Buildings, building-labels' },
      source: 'composite',
      'source-layer': 'housenum_label',
      minzoom: 17,
      layout: {
        'text-field': ['get', 'house_num'],
        'text-font': ['DIN Pro Italic', 'Arial Unicode MS Regular'],
        'text-padding': 4,
        'text-max-width': 7,
        'text-size': 10
      },
      paint: { 'text-color': 'hsl(20, 8%, 52%)', 'text-halo-color': 'hsl(20, 13%, 92%)', 'text-halo-width': 1 }
    },
    {
      id: 'path-pedestrian-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., walking-cycling-labels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 12,
      filter: [
        'all',
        ['case', ['has', 'layer'], ['>=', ['get', 'layer'], 0], true],
        [
          'step',
          ['zoom'],
          ['match', ['get', 'class'], ['pedestrian'], true, false],
          15,
          ['match', ['get', 'class'], ['path', 'pedestrian'], true, false]
        ]
      ],
      layout: {
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          10,
          ['match', ['get', 'class'], 'pedestrian', 9, 6.5],
          18,
          ['match', ['get', 'class'], 'pedestrian', 14, 13]
        ],
        'text-max-angle': 30,
        'text-font': ['DIN Pro Regular', 'Arial Unicode MS Regular'],
        'symbol-placement': 'line',
        'text-padding': 1,
        'text-rotation-alignment': 'map',
        'text-pitch-alignment': 'viewport',
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']],
        'text-letter-spacing': 0.01
      },
      paint: { 'text-color': 'hsl(0,0%, 0%)', 'text-halo-color': 'hsl(20, 25%, 100%)', 'text-halo-width': 1, 'text-halo-blur': 1 }
    },
    {
      id: 'road-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, road-labels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 10,
      filter: [
        'all',
        ['has', 'name'],
        [
          'step',
          ['zoom'],
          ['match', ['get', 'class'], ['motorway', 'trunk', 'primary', 'secondary', 'tertiary'], true, false],
          12,
          ['match', ['get', 'class'], ['motorway', 'trunk', 'primary', 'secondary', 'tertiary', 'street', 'street_limited'], true, false],
          15,
          ['match', ['get', 'class'], ['path', 'pedestrian', 'golf', 'ferry', 'aerialway'], false, true]
        ]
      ],
      layout: {
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          10,
          [
            'match',
            ['get', 'class'],
            ['motorway', 'trunk', 'primary', 'secondary', 'tertiary'],
            10,
            ['motorway_link', 'trunk_link', 'primary_link', 'secondary_link', 'tertiary_link', 'street', 'street_limited'],
            9,
            6.5
          ],
          18,
          [
            'match',
            ['get', 'class'],
            ['motorway', 'trunk', 'primary', 'secondary', 'tertiary'],
            16,
            ['motorway_link', 'trunk_link', 'primary_link', 'secondary_link', 'tertiary_link', 'street', 'street_limited'],
            14,
            13
          ]
        ],
        'text-max-angle': 30,
        'text-font': ['DIN Pro Regular', 'Arial Unicode MS Regular'],
        'symbol-placement': 'line',
        'text-padding': 1,
        'text-rotation-alignment': 'map',
        'text-pitch-alignment': 'viewport',
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']],
        'text-letter-spacing': 0.01
      },
      paint: {
        'text-color': 'hsl(0,0%, 0%)',
        'text-halo-color': ['match', ['get', 'class'], ['motorway', 'trunk'], 'hsla(20, 25%, 100%, 0.75)', 'hsl(20, 25%, 100%)'],
        'text-halo-width': 1,
        'text-halo-blur': 1
      }
    },
    {
      id: 'road-intersection',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, road-labels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 15,
      filter: ['all', ['==', ['get', 'class'], 'intersection'], ['has', 'name']],
      layout: {
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']],
        'icon-image': 'intersection',
        'icon-text-fit': 'both',
        'icon-text-fit-padding': [1, 2, 1, 2],
        'text-size': ['interpolate', ['exponential', 1.2], ['zoom'], 15, 9, 18, 12],
        'text-font': ['DIN Pro Bold', 'Arial Unicode MS Bold']
      },
      paint: { 'text-color': 'hsl(230, 57%, 64%)' }
    },
    {
      id: 'road-number-shield',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, road-labels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 6,
      filter: [
        'all',
        ['has', 'reflen'],
        ['<=', ['get', 'reflen'], 6],
        ['match', ['get', 'class'], ['pedestrian', 'service'], false, true],
        [
          'step',
          ['zoom'],
          ['==', ['geometry-type'], 'Point'],
          11,
          ['>', ['get', 'len'], 5000],
          12,
          ['>', ['get', 'len'], 2500],
          13,
          ['>', ['get', 'len'], 1000],
          14,
          true
        ]
      ],
      layout: {
        'text-size': 9,
        'icon-image': [
          'case',
          ['has', 'shield_beta'],
          [
            'coalesce',
            ['image', ['concat', ['get', 'shield_beta'], '-', ['to-string', ['get', 'reflen']]]],
            ['image', ['concat', 'default-', ['to-string', ['get', 'reflen']]]]
          ],
          ['concat', ['get', 'shield'], '-', ['to-string', ['get', 'reflen']]]
        ],
        'icon-rotation-alignment': 'viewport',
        'text-max-angle': 38,
        'symbol-spacing': ['interpolate', ['linear'], ['zoom'], 11, 400, 14, 600],
        'text-font': ['DIN Pro Bold', 'Arial Unicode MS Bold'],
        'symbol-placement': ['step', ['zoom'], 'point', 11, 'line'],
        'text-rotation-alignment': 'viewport',
        'text-field': ['get', 'ref'],
        'text-letter-spacing': 0.05
      },
      paint: {
        'text-color': [
          'case',
          [
            'all',
            ['has', 'shield_text_color_beta'],
            ['to-boolean', ['coalesce', ['image', ['concat', ['get', 'shield_beta'], '-', ['to-string', ['get', 'reflen']]]], '']]
          ],
          [
            'match',
            ['get', 'shield_text_color_beta'],
            'white',
            'hsl(0, 0%, 100%)',
            'yellow',
            'hsl(50, 100%, 70%)',
            'orange',
            'hsl(25, 100%, 75%)',
            'blue',
            'hsl(230, 57%, 44%)',
            'red',
            'hsl(0, 87%, 59%)',
            'green',
            'hsl(140, 74%, 37%)',
            'hsl(230, 18%, 13%)'
          ],
          [
            'match',
            ['get', 'shield_text_color'],
            'white',
            'hsl(0, 0%, 100%)',
            'yellow',
            'hsl(50, 100%, 70%)',
            'orange',
            'hsl(25, 100%, 75%)',
            'blue',
            'hsl(230, 57%, 44%)',
            'red',
            'hsl(0, 87%, 59%)',
            'green',
            'hsl(140, 74%, 37%)',
            'hsl(230, 18%, 13%)'
          ]
        ]
      }
    },
    {
      id: 'road-exit-shield',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'road-network', 'mapbox:group': 'Road network, road-labels' },
      source: 'composite',
      'source-layer': 'motorway_junction',
      minzoom: 14,
      filter: ['all', ['has', 'reflen'], ['<=', ['get', 'reflen'], 9]],
      layout: {
        'text-field': ['get', 'ref'],
        'text-size': 9,
        'icon-image': ['concat', 'motorway-exit-', ['to-string', ['get', 'reflen']]],
        'text-font': ['DIN Pro Bold', 'Arial Unicode MS Bold']
      },
      paint: { 'text-color': 'hsl(0, 0%, 100%)', 'text-translate': [0, 0] }
    },
    {
      id: 'golf-hole-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'walking-cycling', 'mapbox:group': 'Walking, cycling, etc., walking-cycling-labels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 16,
      filter: ['==', ['get', 'class'], 'golf'],
      layout: {
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']],
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        'text-size': 12
      },
      paint: { 'text-halo-color': 'hsl(110, 65%, 65%)', 'text-halo-width': 0.5, 'text-halo-blur': 0.5, 'text-color': 'hsl(110, 70%, 28%)' }
    },
    {
      id: 'ferry-aerialway-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'transit', 'mapbox:group': 'Transit, ferry-aerialway-labels' },
      source: 'composite',
      'source-layer': 'road',
      minzoom: 15,
      filter: ['match', ['get', 'class'], 'aerialway', true, 'ferry', true, false],
      layout: {
        'text-size': ['interpolate', ['linear'], ['zoom'], 10, 6.5, 18, 13],
        'text-max-angle': 30,
        'text-font': ['DIN Pro Regular', 'Arial Unicode MS Regular'],
        'symbol-placement': 'line',
        'text-padding': 1,
        'text-rotation-alignment': 'map',
        'text-pitch-alignment': 'viewport',
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']],
        'text-letter-spacing': 0.01
      },
      paint: {
        'text-color': ['match', ['get', 'class'], 'ferry', 'hsl(200, 68%, 60%)', 'hsl(225, 60%, 58%)'],
        'text-halo-color': ['match', ['get', 'class'], 'ferry', 'hsl(200, 100%, 80%)', 'hsl(20, 20%, 100%)'],
        'text-halo-width': 1,
        'text-halo-blur': 1
      }
    },
    {
      id: 'waterway-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'natural-features', 'mapbox:group': 'Natural features, natural-labels' },
      source: 'composite',
      'source-layer': 'natural_label',
      minzoom: 13,
      filter: [
        'all',
        [
          'match',
          ['get', 'class'],
          ['canal', 'river', 'stream', 'disputed_canal', 'disputed_river', 'disputed_stream'],
          ['match', ['get', 'worldview'], ['all', 'US'], true, false],
          false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: {
        'text-font': ['DIN Pro Italic', 'Arial Unicode MS Regular'],
        'text-max-angle': 30,
        'symbol-spacing': ['interpolate', ['linear', 1], ['zoom'], 15, 250, 17, 400],
        'text-size': ['interpolate', ['linear'], ['zoom'], 13, 12, 18, 18],
        'symbol-placement': 'line',
        'text-pitch-alignment': 'viewport',
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']]
      },
      paint: { 'text-color': 'hsl(200, 68%, 57%)', 'text-halo-color': 'hsla(20, 17%, 100%, 0.5)' }
    },
    {
      id: 'natural-line-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'natural-features', 'mapbox:group': 'Natural features, natural-labels' },
      source: 'composite',
      'source-layer': 'natural_label',
      minzoom: 4,
      filter: [
        'all',
        [
          'match',
          ['get', 'class'],
          ['glacier', 'landform', 'disputed_glacier', 'disputed_landform'],
          ['match', ['get', 'worldview'], ['all', 'US'], true, false],
          false
        ],
        ['<=', ['get', 'filterrank'], 2],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: {
        'text-size': ['step', ['zoom'], ['step', ['get', 'sizerank'], 18, 5, 12], 17, ['step', ['get', 'sizerank'], 18, 13, 12]],
        'text-max-angle': 30,
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']],
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        'symbol-placement': 'line-center',
        'text-pitch-alignment': 'viewport'
      },
      paint: { 'text-halo-width': 0.5, 'text-halo-color': 'hsl(20, 17%, 100%)', 'text-halo-blur': 0.5, 'text-color': 'hsl(210, 20%, 46%)' }
    },
    {
      id: 'natural-point-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'natural-features', 'mapbox:group': 'Natural features, natural-labels' },
      source: 'composite',
      'source-layer': 'natural_label',
      minzoom: 4,
      filter: [
        'all',
        [
          'match',
          ['get', 'class'],
          [
            'dock',
            'glacier',
            'landform',
            'water_feature',
            'wetland',
            'disputed_dock',
            'disputed_glacier',
            'disputed_landform',
            'disputed_water_feature',
            'disputed_wetland'
          ],
          ['match', ['get', 'worldview'], ['all', 'US'], true, false],
          false
        ],
        ['<=', ['get', 'filterrank'], 2],
        ['==', ['geometry-type'], 'Point']
      ],
      layout: {
        'text-size': ['step', ['zoom'], ['step', ['get', 'sizerank'], 18, 5, 12], 17, ['step', ['get', 'sizerank'], 18, 13, 12]],
        'icon-image': ['get', 'maki'],
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        'text-offset': [
          'step',
          ['zoom'],
          ['step', ['get', 'sizerank'], ['literal', [0, 0]], 5, ['literal', [0, 0.75]]],
          17,
          ['step', ['get', 'sizerank'], ['literal', [0, 0]], 13, ['literal', [0, 0.75]]]
        ],
        'text-anchor': ['step', ['zoom'], ['step', ['get', 'sizerank'], 'center', 5, 'top'], 17, ['step', ['get', 'sizerank'], 'center', 13, 'top']],
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']]
      },
      paint: {
        'icon-opacity': ['step', ['zoom'], ['step', ['get', 'sizerank'], 0, 5, 1], 17, ['step', ['get', 'sizerank'], 0, 13, 1]],
        'text-halo-color': 'hsl(20, 20%, 100%)',
        'text-halo-width': 0.5,
        'text-halo-blur': 0.5,
        'text-color': 'hsl(210, 20%, 46%)'
      }
    },
    {
      id: 'poi-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'point-of-interest-labels', 'mapbox:group': 'Point of interest labels, poi-labels' },
      source: 'composite',
      'source-layer': 'poi_label',
      minzoom: 6,
      filter: ['<=', ['get', 'filterrank'], ['+', ['step', ['zoom'], 0, 16, 1, 17, 2], 3]],
      layout: {
        'text-size': ['step', ['zoom'], ['step', ['get', 'sizerank'], 18, 5, 12], 17, ['step', ['get', 'sizerank'], 18, 13, 12]],
        'icon-image': [
          'case',
          ['has', 'maki_beta'],
          ['coalesce', ['image', ['get', 'maki_beta']], ['image', ['get', 'maki']]],
          ['image', ['get', 'maki']]
        ],
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        'text-offset': [
          'step',
          ['zoom'],
          ['step', ['get', 'sizerank'], ['literal', [0, 0]], 5, ['literal', [0, 0.8]]],
          17,
          ['step', ['get', 'sizerank'], ['literal', [0, 0]], 13, ['literal', [0, 0.8]]]
        ],
        'text-anchor': ['step', ['zoom'], ['step', ['get', 'sizerank'], 'center', 5, 'top'], 17, ['step', ['get', 'sizerank'], 'center', 13, 'top']],
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']]
      },
      paint: {
        'icon-opacity': ['step', ['zoom'], ['step', ['get', 'sizerank'], 0, 5, 1], 17, ['step', ['get', 'sizerank'], 0, 13, 1]],
        'text-halo-color': 'hsl(20, 20%, 100%)',
        'text-halo-width': 0.5,
        'text-halo-blur': 0.5,
        'text-color': [
          'match',
          ['get', 'class'],
          'food_and_drink',
          'hsl(40, 95%, 43%)',
          'park_like',
          'hsl(110, 70%, 28%)',
          'education',
          'hsl(30, 50%, 43%)',
          'medical',
          'hsl(0, 70%, 58%)',
          'sport_and_leisure',
          'hsl(190, 60%, 48%)',
          ['store_like', 'food_and_drink_stores'],
          'hsl(210, 70%, 58%)',
          ['commercial_services', 'motorist', 'lodging'],
          'hsl(260, 70%, 63%)',
          ['arts_and_entertainment', 'historic', 'landmark'],
          'hsl(320, 70%, 63%)',
          'hsl(210, 20%, 46%)'
        ]
      }
    },
    {
      id: 'water-line-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'natural-features', 'mapbox:group': 'Natural features, natural-labels' },
      source: 'composite',
      'source-layer': 'natural_label',
      minzoom: 1,
      filter: [
        'all',
        [
          'match',
          ['get', 'class'],
          ['bay', 'ocean', 'reservoir', 'sea', 'water', 'disputed_bay', 'disputed_ocean', 'disputed_reservoir', 'disputed_sea', 'disputed_water'],
          ['match', ['get', 'worldview'], ['all', 'US'], true, false],
          false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      layout: {
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          ['*', ['-', 16, ['sqrt', ['get', 'sizerank']]], 1],
          22,
          ['*', ['-', 22, ['sqrt', ['get', 'sizerank']]], 1]
        ],
        'text-max-angle': 30,
        'text-letter-spacing': ['match', ['get', 'class'], 'ocean', 0.25, ['sea', 'bay'], 0.15, 0],
        'text-font': ['DIN Pro Italic', 'Arial Unicode MS Regular'],
        'symbol-placement': 'line-center',
        'text-pitch-alignment': 'viewport',
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']]
      },
      paint: {
        'text-color': ['match', ['get', 'class'], ['bay', 'ocean', 'sea'], 'hsl(200, 96%, 57%)', 'hsl(200, 68%, 57%)'],
        'text-halo-color': 'hsla(20, 17%, 100%, 0.5)'
      }
    },
    {
      id: 'water-point-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'natural-features', 'mapbox:group': 'Natural features, natural-labels' },
      source: 'composite',
      'source-layer': 'natural_label',
      minzoom: 1,
      filter: [
        'all',
        [
          'match',
          ['get', 'class'],
          ['bay', 'ocean', 'reservoir', 'sea', 'water', 'disputed_bay', 'disputed_ocean', 'disputed_reservoir', 'disputed_sea', 'disputed_water'],
          ['match', ['get', 'worldview'], ['all', 'US'], true, false],
          false
        ],
        ['==', ['geometry-type'], 'Point']
      ],
      layout: {
        'text-line-height': 1.3,
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          ['*', ['-', 16, ['sqrt', ['get', 'sizerank']]], 1],
          22,
          ['*', ['-', 22, ['sqrt', ['get', 'sizerank']]], 1]
        ],
        'text-font': ['DIN Pro Italic', 'Arial Unicode MS Regular'],
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']],
        'text-letter-spacing': ['match', ['get', 'class'], 'ocean', 0.25, ['bay', 'sea'], 0.15, 0.01],
        'text-max-width': ['match', ['get', 'class'], 'ocean', 4, 'sea', 5, ['bay', 'water'], 7, 10]
      },
      paint: {
        'text-color': ['match', ['get', 'class'], ['bay', 'ocean', 'sea'], 'hsl(200, 96%, 57%)', 'hsl(200, 68%, 57%)'],
        'text-halo-color': 'hsla(20, 17%, 100%, 0.5)'
      }
    },
    {
      id: 'transit-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'transit', 'mapbox:group': 'Transit, transit-labels' },
      source: 'composite',
      'source-layer': 'transit_stop_label',
      minzoom: 12,
      filter: [
        'step',
        ['zoom'],
        [
          'all',
          ['<=', ['get', 'filterrank'], 4],
          ['match', ['get', 'mode'], 'rail', true, 'metro_rail', true, false],
          ['!=', ['get', 'stop_type'], 'entrance']
        ],
        14,
        ['all', ['match', ['get', 'mode'], 'rail', true, 'metro_rail', true, false], ['!=', ['get', 'stop_type'], 'entrance']],
        15,
        [
          'all',
          ['match', ['get', 'mode'], 'rail', true, 'metro_rail', true, 'ferry', true, 'light_rail', true, false],
          ['!=', ['get', 'stop_type'], 'entrance']
        ],
        16,
        ['all', ['match', ['get', 'mode'], 'bus', false, true], ['!=', ['get', 'stop_type'], 'entrance']],
        17,
        ['!=', ['get', 'stop_type'], 'entrance'],
        19,
        true
      ],
      layout: {
        'text-size': 12,
        'icon-image': ['get', 'network'],
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        'text-justify': ['match', ['get', 'stop_type'], 'entrance', 'left', 'center'],
        'text-offset': ['match', ['get', 'stop_type'], 'entrance', ['literal', [1, 0]], ['literal', [0, 0.8]]],
        'text-anchor': ['match', ['get', 'stop_type'], 'entrance', 'left', 'top'],
        'text-field': [
          'step',
          ['zoom'],
          '',
          13,
          ['match', ['get', 'mode'], ['rail', 'metro_rail'], ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']], ''],
          14,
          ['match', ['get', 'mode'], ['bus', 'bicycle'], '', ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']]],
          18,
          ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']]
        ],
        'text-letter-spacing': 0.01,
        'text-max-width': ['match', ['get', 'stop_type'], 'entrance', 15, 9]
      },
      paint: {
        'text-halo-color': 'hsl(20, 20%, 100%)',
        'text-color': [
          'match',
          ['get', 'network'],
          'tokyo-metro',
          'hsl(180, 50%, 30%)',
          'mexico-city-metro',
          'hsl(25, 100%, 63%)',
          ['barcelona-metro', 'delhi-metro', 'hong-kong-mtr', 'milan-metro', 'osaka-subway'],
          'hsl(0, 90%, 47%)',
          ['boston-t', 'washington-metro'],
          'hsl(230, 18%, 20%)',
          ['chongqing-rail-transit', 'kiev-metro', 'singapore-mrt', 'taipei-metro'],
          'hsl(140, 90%, 25%)',
          'hsl(225, 60%, 58%)'
        ],
        'text-halo-blur': 0.5,
        'text-halo-width': 0.5
      }
    },
    {
      id: 'airport-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'transit', 'mapbox:group': 'Transit, transit-labels' },
      source: 'composite',
      'source-layer': 'airport_label',
      minzoom: 8,
      filter: [
        'match',
        ['get', 'class'],
        ['military', 'civil', 'disputed_military', 'disputed_civil'],
        ['match', ['get', 'worldview'], ['all', 'US'], true, false],
        false
      ],
      layout: {
        'text-line-height': 1.1,
        'text-size': ['step', ['get', 'sizerank'], 18, 9, 12],
        'icon-image': ['get', 'maki'],
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        'text-offset': [0, 0.8],
        'text-rotation-alignment': 'viewport',
        'text-anchor': 'top',
        'text-field': [
          'step',
          ['get', 'sizerank'],
          [
            'case',
            ['has', 'ref'],
            ['concat', ['get', 'ref'], ' -\\n', ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']]],
            ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']]
          ],
          15,
          ['get', 'ref']
        ],
        'text-letter-spacing': 0.01,
        'text-max-width': 9
      },
      paint: { 'text-color': 'hsl(225, 60%, 58%)', 'text-halo-color': 'hsl(20, 20%, 100%)', 'text-halo-width': 1 }
    },
    {
      id: 'state-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'place-labels', 'mapbox:group': 'Place labels, place-labels' },
      source: 'composite',
      'source-layer': 'place_label',
      minzoom: 3,
      maxzoom: 9,
      filter: ['match', ['get', 'class'], ['state', 'disputed_state'], ['match', ['get', 'worldview'], ['all', 'US'], true, false], false],
      layout: {
        'text-size': [
          'interpolate',
          ['cubic-bezier', 0.85, 0.7, 0.65, 1],
          ['zoom'],
          4,
          ['step', ['get', 'symbolrank'], 9, 6, 8, 7, 7],
          9,
          ['step', ['get', 'symbolrank'], 21, 6, 16, 7, 14]
        ],
        'text-transform': 'uppercase',
        'text-font': ['DIN Pro Bold', 'Arial Unicode MS Bold'],
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']],
        'text-letter-spacing': 0.15,
        'text-max-width': 6,
        visibility: 'visible'
      },
      paint: { 'text-color': 'hsl(220, 30%, 0%)', 'text-halo-color': 'hsl(20, 25%, 100%)', 'text-halo-width': 1, 'text-opacity': 0.5 }
    },
    {
      id: 'settlement-subdivision-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'place-labels', 'mapbox:group': 'Place labels, place-labels' },
      source: 'composite',
      'source-layer': 'place_label',
      minzoom: 10,
      maxzoom: 15,
      filter: [
        'all',
        [
          'match',
          ['get', 'class'],
          ['settlement_subdivision', 'disputed_settlement_subdivision'],
          ['match', ['get', 'worldview'], ['all', 'US'], true, false],
          false
        ],
        ['<=', ['get', 'filterrank'], 4]
      ],
      layout: {
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']],
        'text-transform': 'uppercase',
        'text-font': ['DIN Pro Regular', 'Arial Unicode MS Regular'],
        'text-letter-spacing': ['match', ['get', 'type'], 'suburb', 0.15, 0.05],
        'text-max-width': 7,
        'text-padding': 3,
        'text-size': [
          'interpolate',
          ['cubic-bezier', 0.5, 0, 1, 1],
          ['zoom'],
          11,
          ['match', ['get', 'type'], 'suburb', 11, 10.5],
          15,
          ['match', ['get', 'type'], 'suburb', 15, 14]
        ]
      },
      paint: { 'text-halo-color': 'hsla(20, 25%, 100%, 0.75)', 'text-halo-width': 1, 'text-color': 'hsl(220, 30%, 40%)', 'text-halo-blur': 0.5 }
    },
    {
      id: 'settlement-minor-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'place-labels', 'mapbox:group': 'Place labels, place-labels' },
      source: 'composite',
      'source-layer': 'place_label',
      minzoom: 2,
      maxzoom: 13,
      filter: [
        'all',
        ['<=', ['get', 'filterrank'], 3],
        ['match', ['get', 'class'], ['settlement', 'disputed_settlement'], ['match', ['get', 'worldview'], ['all', 'US'], true, false], false],
        [
          'step',
          ['zoom'],
          ['>', ['get', 'symbolrank'], 6],
          4,
          ['>=', ['get', 'symbolrank'], 7],
          6,
          ['>=', ['get', 'symbolrank'], 8],
          7,
          ['>=', ['get', 'symbolrank'], 10],
          10,
          ['>=', ['get', 'symbolrank'], 11],
          11,
          ['>=', ['get', 'symbolrank'], 13],
          12,
          ['>=', ['get', 'symbolrank'], 15]
        ]
      ],
      layout: {
        'text-line-height': 1.1,
        'text-size': [
          'interpolate',
          ['cubic-bezier', 0.2, 0, 0.9, 1],
          ['zoom'],
          3,
          ['step', ['get', 'symbolrank'], 11, 9, 10],
          6,
          ['step', ['get', 'symbolrank'], 14, 9, 12, 12, 10],
          8,
          ['step', ['get', 'symbolrank'], 16, 9, 14, 12, 12, 15, 10],
          13,
          ['step', ['get', 'symbolrank'], 22, 9, 20, 12, 16, 15, 14]
        ],
        'text-radial-offset': ['step', ['zoom'], ['match', ['get', 'capital'], 2, 0.6, 0.55], 8, 0],
        'symbol-sort-key': ['get', 'symbolrank'],
        'icon-image': [
          'step',
          ['zoom'],
          ['case', ['==', ['get', 'capital'], 2], 'border-dot-13', ['step', ['get', 'symbolrank'], 'dot-11', 9, 'dot-10', 11, 'dot-9']],
          8,
          ''
        ],
        'text-font': ['DIN Pro Regular', 'Arial Unicode MS Regular'],
        'text-justify': 'auto',
        'text-anchor': ['step', ['zoom'], ['get', 'text_anchor'], 8, 'center'],
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']],
        'text-max-width': 7
      },
      paint: { 'text-color': 'hsl(220, 30%, 0%)', 'text-halo-color': 'hsl(20, 25%, 100%)', 'text-halo-width': 1, 'text-halo-blur': 1 }
    },
    {
      id: 'settlement-major-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'place-labels', 'mapbox:group': 'Place labels, place-labels' },
      source: 'composite',
      'source-layer': 'place_label',
      minzoom: 2,
      maxzoom: 15,
      filter: [
        'all',
        ['<=', ['get', 'filterrank'], 3],
        ['match', ['get', 'class'], ['settlement', 'disputed_settlement'], ['match', ['get', 'worldview'], ['all', 'US'], true, false], false],
        [
          'step',
          ['zoom'],
          false,
          2,
          ['<=', ['get', 'symbolrank'], 6],
          4,
          ['<', ['get', 'symbolrank'], 7],
          6,
          ['<', ['get', 'symbolrank'], 8],
          7,
          ['<', ['get', 'symbolrank'], 10],
          10,
          ['<', ['get', 'symbolrank'], 11],
          11,
          ['<', ['get', 'symbolrank'], 13],
          12,
          ['<', ['get', 'symbolrank'], 15],
          13,
          ['>=', ['get', 'symbolrank'], 11],
          14,
          ['>=', ['get', 'symbolrank'], 15]
        ]
      ],
      layout: {
        'text-line-height': 1.1,
        'text-size': [
          'interpolate',
          ['cubic-bezier', 0.2, 0, 0.9, 1],
          ['zoom'],
          3,
          ['step', ['get', 'symbolrank'], 13, 6, 11],
          6,
          ['step', ['get', 'symbolrank'], 18, 6, 16, 7, 14],
          8,
          ['step', ['get', 'symbolrank'], 20, 9, 16, 10, 14],
          15,
          ['step', ['get', 'symbolrank'], 24, 9, 20, 12, 16, 15, 14]
        ],
        'text-radial-offset': ['step', ['zoom'], ['match', ['get', 'capital'], 2, 0.6, 0.55], 8, 0],
        'symbol-sort-key': ['get', 'symbolrank'],
        'icon-image': [
          'step',
          ['zoom'],
          ['case', ['==', ['get', 'capital'], 2], 'border-dot-13', ['step', ['get', 'symbolrank'], 'dot-11', 9, 'dot-10', 11, 'dot-9']],
          8,
          ''
        ],
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        'text-justify': [
          'step',
          ['zoom'],
          ['match', ['get', 'text_anchor'], ['left', 'bottom-left', 'top-left'], 'left', ['right', 'bottom-right', 'top-right'], 'right', 'center'],
          8,
          'center'
        ],
        'text-anchor': ['step', ['zoom'], ['get', 'text_anchor'], 8, 'center'],
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']],
        'text-max-width': 7
      },
      paint: { 'text-color': 'hsl(220, 30%, 0%)', 'text-halo-color': 'hsl(20, 25%, 100%)', 'text-halo-width': 1, 'text-halo-blur': 1 }
    },
    {
      id: 'country-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'place-labels', 'mapbox:group': 'Place labels, place-labels' },
      source: 'composite',
      'source-layer': 'place_label',
      minzoom: 1,
      maxzoom: 10,
      filter: ['match', ['get', 'class'], ['country', 'disputed_country'], ['match', ['get', 'worldview'], ['all', 'US'], true, false], false],
      layout: {
        'text-line-height': 1.1,
        'text-size': [
          'interpolate',
          ['cubic-bezier', 0.2, 0, 0.7, 1],
          ['zoom'],
          1,
          ['step', ['get', 'symbolrank'], 11, 4, 9, 5, 8],
          9,
          ['step', ['get', 'symbolrank'], 22, 4, 19, 5, 17]
        ],
        'text-radial-offset': ['step', ['zoom'], 0.6, 8, 0],
        'icon-image': '',
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        'text-justify': [
          'step',
          ['zoom'],
          ['match', ['get', 'text_anchor'], ['left', 'bottom-left', 'top-left'], 'left', ['right', 'bottom-right', 'top-right'], 'right', 'center'],
          7,
          'auto'
        ],
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']],
        'text-max-width': 6,
        visibility: 'visible'
      },
      paint: {
        'icon-opacity': ['step', ['zoom'], ['case', ['has', 'text_anchor'], 1, 0], 7, 0],
        'text-color': 'hsl(220, 30%, 0%)',
        'text-halo-color': ['interpolate', ['linear'], ['zoom'], 2, 'hsla(20, 25%, 100%, 0.75)', 3, 'hsl(20, 25%, 100%)'],
        'text-halo-width': 1.25
      }
    },
    {
      id: 'continent-label',
      type: 'symbol',
      metadata: { 'mapbox:featureComponent': 'place-labels', 'mapbox:group': 'Place labels, place-labels' },
      source: 'composite',
      'source-layer': 'natural_label',
      minzoom: 0.75,
      maxzoom: 3,
      filter: ['==', ['get', 'class'], 'continent'],
      layout: {
        'text-field': ['coalesce', ['get', 'name_zh-Hans'], ['get', 'name']],
        'text-line-height': 1.1,
        'text-max-width': 6,
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        'text-size': ['interpolate', ['exponential', 0.5], ['zoom'], 0, 10, 2.5, 15],
        'text-transform': 'uppercase',
        'text-letter-spacing': 0.05,
        visibility: 'visible'
      },
      paint: {
        'text-color': 'hsl(220, 30%, 0%)',
        'text-halo-color': ['interpolate', ['linear'], ['zoom'], 0, 'hsla(20, 25%, 100%, 0.75)', 3, 'hsl(20, 25%, 100%)'],
        'text-halo-width': 1.5,
        'text-opacity': ['interpolate', ['linear'], ['zoom'], 0, 0.8, 1.5, 0.5, 2.5, 0]
      }
    }
  ],
  fog: {
    range: [2, 20],
    color: 'hsl(0, 0%, 100%)',
    'high-color': 'hsl(210, 100%, 80%)',
    'space-color': ['interpolate', ['exponential', 1.2], ['zoom'], 5, 'hsl(210, 40%, 30%)', 7, 'hsl(210, 100%, 80%)'],
    'horizon-blend': ['interpolate', ['exponential', 1.2], ['zoom'], 5, 0.02, 7, 0.08],
    'star-intensity': ['interpolate', ['exponential', 1.2], ['zoom'], 5, 0.1, 7, 0]
  },
  projection: { name: 'globe' },
  created: '2022-12-08T02:56:22.962Z',
  modified: '2024-03-03T08:40:34.674Z',
  id: 'clbehmj6c000d14lexu6t15yi',
  owner: 'zouyaoji',
  visibility: 'public',
  protected: false,
  draft: false
}
