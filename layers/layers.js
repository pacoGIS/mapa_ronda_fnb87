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
var format_LotesIndividuales_3 = new ol.format.GeoJSON();
var features_LotesIndividuales_3 = format_LotesIndividuales_3.readFeatures(json_LotesIndividuales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotesIndividuales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesIndividuales_3.addFeatures(features_LotesIndividuales_3);
var lyr_LotesIndividuales_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotesIndividuales_3, 
                style: style_LotesIndividuales_3,
                popuplayertitle: 'Lotes Individuales',
                interactive: true,
                title: '<img src="styles/legend/LotesIndividuales_3.png" /> Lotes Individuales'
            });
var format_LmitePerimetraldelCoto_4 = new ol.format.GeoJSON();
var features_LmitePerimetraldelCoto_4 = format_LmitePerimetraldelCoto_4.readFeatures(json_LmitePerimetraldelCoto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitePerimetraldelCoto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmitePerimetraldelCoto_4.addFeatures(features_LmitePerimetraldelCoto_4);
var lyr_LmitePerimetraldelCoto_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmitePerimetraldelCoto_4, 
                style: style_LmitePerimetraldelCoto_4,
                popuplayertitle: 'Límite Perimetral del Coto',
                interactive: true,
                title: '<img src="styles/legend/LmitePerimetraldelCoto_4.png" /> Límite Perimetral del Coto'
            });
var format_Luminarias_5 = new ol.format.GeoJSON();
var features_Luminarias_5 = format_Luminarias_5.readFeatures(json_Luminarias_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Luminarias_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Luminarias_5.addFeatures(features_Luminarias_5);
var lyr_Luminarias_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Luminarias_5, 
                style: style_Luminarias_5,
                popuplayertitle: 'Luminarias',
                interactive: true,
                title: '<img src="styles/legend/Luminarias_5.png" /> Luminarias'
            });

lyr_MapaSatliteGoogle_0.setVisible(true);lyr_MapaEstndarGoogle_1.setVisible(false);lyr_ImagenLotesRonda_2.setVisible(false);lyr_LotesIndividuales_3.setVisible(true);lyr_LmitePerimetraldelCoto_4.setVisible(false);lyr_Luminarias_5.setVisible(true);
var layersList = [lyr_MapaSatliteGoogle_0,lyr_MapaEstndarGoogle_1,lyr_ImagenLotesRonda_2,lyr_LotesIndividuales_3,lyr_LmitePerimetraldelCoto_4,lyr_Luminarias_5];
lyr_LotesIndividuales_3.set('fieldAliases', {'id': 'id', 'interior': 'interior', 'Prop': 'Prop', 'Cat_prop_N': 'Nombre de Propietario', 'Cat_prop_T': 'Cat_prop_T', 'Cat_prop_E': 'Cat_prop_E', 'Cat_prop_I': 'Cat_prop_I', 'Cat_prop_1': 'Cat_prop_1', });
lyr_LmitePerimetraldelCoto_4.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', });
lyr_Luminarias_5.set('fieldAliases', {'num_lum': 'num_lum', 'tip_foc': 'tip_foc', });
lyr_LotesIndividuales_3.set('fieldImages', {'id': 'TextEdit', 'interior': 'Range', 'Prop': 'TextEdit', 'Cat_prop_N': 'TextEdit', 'Cat_prop_T': 'TextEdit', 'Cat_prop_E': 'TextEdit', 'Cat_prop_I': 'TextEdit', 'Cat_prop_1': 'TextEdit', });
lyr_LmitePerimetraldelCoto_4.set('fieldImages', {'fid': 'TextEdit', 'Area': 'TextEdit', });
lyr_Luminarias_5.set('fieldImages', {'num_lum': 'Range', 'tip_foc': 'TextEdit', });
lyr_LotesIndividuales_3.set('fieldLabels', {'id': 'hidden field', 'interior': 'header label - visible with data', 'Prop': 'hidden field', 'Cat_prop_N': 'inline label - visible with data', 'Cat_prop_T': 'hidden field', 'Cat_prop_E': 'hidden field', 'Cat_prop_I': 'hidden field', 'Cat_prop_1': 'hidden field', });
lyr_LmitePerimetraldelCoto_4.set('fieldLabels', {'fid': 'hidden field', 'Area': 'hidden field', });
lyr_Luminarias_5.set('fieldLabels', {'num_lum': 'hidden field', 'tip_foc': 'hidden field', });
lyr_Luminarias_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});