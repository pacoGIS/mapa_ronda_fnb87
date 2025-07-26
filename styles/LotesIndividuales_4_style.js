var size = 0;
var placement = 'point';

var style_LotesIndividuales_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "14.3px \'Arial\', sans-serif";
    var labelFill = "#ff0000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("interior") !== null) {
        labelText = String(feature.get("interior"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,8,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.56}),fill: new ol.style.Fill({color: 'rgba(255,156,155,0.14901960784313725)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
