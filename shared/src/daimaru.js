var myPoints = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "popupContent": "<p>野々市駅</p>"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [136.59813, 36.54193]
        }
      },{
        "type": "Feature",
        "properties": {
          "popupContent": "<p>金沢駅</p>"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [136.64851, 36.57895]
        }
      }
    ]
  };
  
  L.geoJSON(myPoints, 
    {
      onEachFeature: function onEachFeature(
        feature,
        layer
      ){
        if(feature.properties && feature.properties.popupContent){
          layer.bindPopup(feature.properties.popupContent);
        }
      }
    }
  ).addTo(map);