var wms_layers = [];


        var lyr_MapaSatliteGoogle_0 = new ol.layer.Tile({
            'title': 'Mapa Satélite Google',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_MapaEstndarGoogle_1 = new ol.layer.Tile({
            'title': 'Mapa Estándar Google',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var lyr_ImagenLotesRonda_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Imagen Lotes Ronda<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ImagenLotesRonda_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11385128.706047, 2490137.422019, -11384972.839279, 2490330.356745]
        })
    });
var format_CmarasdeVideograbacin_3 = new ol.format.GeoJSON();
var features_CmarasdeVideograbacin_3 = format_CmarasdeVideograbacin_3.readFeatures(json_CmarasdeVideograbacin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CmarasdeVideograbacin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CmarasdeVideograbacin_3.addFeatures(features_CmarasdeVideograbacin_3);
var lyr_CmarasdeVideograbacin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CmarasdeVideograbacin_3, 
                style: style_CmarasdeVideograbacin_3,
                popuplayertitle: 'Cámaras de Videograbación',
                interactive: true,
    title: 'Cámaras de Videograbación<br />\
    <img src="styles/legend/CmarasdeVideograbacin_3_0.png" /> Existente<br />\
    <img src="styles/legend/CmarasdeVideograbacin_3_1.png" /> Propuesta<br />\
    <img src="styles/legend/CmarasdeVideograbacin_3_2.png" /> N/A<br />\
    <img src="styles/legend/CmarasdeVideograbacin_3_3.png" /> N/D<br />' });
var format_LotesIndividuales_4 = new ol.format.GeoJSON();
var features_LotesIndividuales_4 = format_LotesIndividuales_4.readFeatures(json_LotesIndividuales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotesIndividuales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesIndividuales_4.addFeatures(features_LotesIndividuales_4);
var lyr_LotesIndividuales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotesIndividuales_4, 
                style: style_LotesIndividuales_4,
                popuplayertitle: 'Lotes Individuales',
                interactive: true,
                title: '<img src="styles/legend/LotesIndividuales_4.png" /> Lotes Individuales'
            });
var format_LmitePerimetraldelCoto_5 = new ol.format.GeoJSON();
var features_LmitePerimetraldelCoto_5 = format_LmitePerimetraldelCoto_5.readFeatures(json_LmitePerimetraldelCoto_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitePerimetraldelCoto_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmitePerimetraldelCoto_5.addFeatures(features_LmitePerimetraldelCoto_5);
var lyr_LmitePerimetraldelCoto_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmitePerimetraldelCoto_5, 
                style: style_LmitePerimetraldelCoto_5,
                popuplayertitle: 'Límite Perimetral del Coto',
                interactive: true,
                title: '<img src="styles/legend/LmitePerimetraldelCoto_5.png" /> Límite Perimetral del Coto'
            });
var format_Luminarias_6 = new ol.format.GeoJSON();
var features_Luminarias_6 = format_Luminarias_6.readFeatures(json_Luminarias_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Luminarias_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Luminarias_6.addFeatures(features_Luminarias_6);
var lyr_Luminarias_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Luminarias_6, 
                style: style_Luminarias_6,
                popuplayertitle: 'Luminarias',
                interactive: true,
                title: '<img src="styles/legend/Luminarias_6.png" /> Luminarias'
            });
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_MapaSatliteGoogle_0,lyr_MapaEstndarGoogle_1,],
                                fold: 'close',
                                title: 'Mapas Base'});

lyr_MapaSatliteGoogle_0.setVisible(true);lyr_MapaEstndarGoogle_1.setVisible(false);lyr_ImagenLotesRonda_2.setVisible(false);lyr_CmarasdeVideograbacin_3.setVisible(true);lyr_LotesIndividuales_4.setVisible(true);lyr_LmitePerimetraldelCoto_5.setVisible(false);lyr_Luminarias_6.setVisible(true);
var layersList = [group_MapasBase,lyr_ImagenLotesRonda_2,lyr_CmarasdeVideograbacin_3,lyr_LotesIndividuales_4,lyr_LmitePerimetraldelCoto_5,lyr_Luminarias_6];
lyr_CmarasdeVideograbacin_3.set('fieldAliases', {'Tipo': 'Tipo', 'Ubicacion': 'Ubicacion', 'Angulo_cam': 'Angulo_cam', });
lyr_LotesIndividuales_4.set('fieldAliases', {'id': 'id', 'interior': 'Num. Interior:', 'Cat_prop_N': 'Nombre del propietario:', 'Estatus': 'Estatus financiero:', });
lyr_LmitePerimetraldelCoto_5.set('fieldAliases', {'Area': 'Area', });
lyr_Luminarias_6.set('fieldAliases', {'num_lum': 'num_lum', 'tip_foc': 'tip_foc', });
lyr_CmarasdeVideograbacin_3.set('fieldImages', {'Tipo': '', 'Ubicacion': '', 'Angulo_cam': '', });
lyr_LotesIndividuales_4.set('fieldImages', {'id': 'TextEdit', 'interior': 'Range', 'Cat_prop_N': 'TextEdit', 'Estatus': 'ValueMap', });
lyr_LmitePerimetraldelCoto_5.set('fieldImages', {'Area': '', });
lyr_Luminarias_6.set('fieldImages', {'num_lum': 'Range', 'tip_foc': 'TextEdit', });
lyr_CmarasdeVideograbacin_3.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Ubicacion': 'inline label - visible with data', 'Angulo_cam': 'hidden field', });
lyr_LotesIndividuales_4.set('fieldLabels', {'id': 'hidden field', 'interior': 'inline label - visible with data', 'Cat_prop_N': 'inline label - visible with data', 'Estatus': 'inline label - visible with data', });
lyr_LmitePerimetraldelCoto_5.set('fieldLabels', {'Area': 'hidden field', });
lyr_Luminarias_6.set('fieldLabels', {'num_lum': 'hidden field', 'tip_foc': 'hidden field', });
lyr_Luminarias_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});