var size = 0;
var placement = 'point';

var style_LotesIndividuales_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "15.600000000000001px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("interior") !== null && resolution > 0 && resolution < 0) {
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
