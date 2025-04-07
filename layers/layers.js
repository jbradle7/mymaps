var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_target_parcels_near_transit_web_1 = new ol.format.GeoJSON();
var features_target_parcels_near_transit_web_1 = format_target_parcels_near_transit_web_1.readFeatures(json_target_parcels_near_transit_web_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_target_parcels_near_transit_web_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_target_parcels_near_transit_web_1.addFeatures(features_target_parcels_near_transit_web_1);
var lyr_target_parcels_near_transit_web_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_target_parcels_near_transit_web_1, 
                style: style_target_parcels_near_transit_web_1,
                popuplayertitle: 'target_parcels_near_transit_web',
                interactive: true,
                title: '<img src="styles/legend/target_parcels_near_transit_web_1.png" /> target_parcels_near_transit_web'
            });
var format_neighborhood_boundaries_web_2 = new ol.format.GeoJSON();
var features_neighborhood_boundaries_web_2 = format_neighborhood_boundaries_web_2.readFeatures(json_neighborhood_boundaries_web_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_neighborhood_boundaries_web_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_neighborhood_boundaries_web_2.addFeatures(features_neighborhood_boundaries_web_2);
var lyr_neighborhood_boundaries_web_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_neighborhood_boundaries_web_2, 
                style: style_neighborhood_boundaries_web_2,
                popuplayertitle: 'neighborhood_boundaries_web',
                interactive: true,
                title: '<img src="styles/legend/neighborhood_boundaries_web_2.png" /> neighborhood_boundaries_web'
            });
var format_bus_and_rail_web_3 = new ol.format.GeoJSON();
var features_bus_and_rail_web_3 = format_bus_and_rail_web_3.readFeatures(json_bus_and_rail_web_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bus_and_rail_web_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bus_and_rail_web_3.addFeatures(features_bus_and_rail_web_3);
var lyr_bus_and_rail_web_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bus_and_rail_web_3, 
                style: style_bus_and_rail_web_3,
                popuplayertitle: 'bus_and_rail_web',
                interactive: true,
                title: '<img src="styles/legend/bus_and_rail_web_3.png" /> bus_and_rail_web'
            });

lyr_OSMStandard_0.setVisible(true);lyr_target_parcels_near_transit_web_1.setVisible(true);lyr_neighborhood_boundaries_web_2.setVisible(true);lyr_bus_and_rail_web_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_target_parcels_near_transit_web_1,lyr_neighborhood_boundaries_web_2,lyr_bus_and_rail_web_3];
lyr_target_parcels_near_transit_web_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'RECSUB': 'RECSUB', 'BASEREG': 'BASEREG', 'MAPREG': 'MAPREG', 'PARCEL': 'PARCEL', 'RECMAP': 'RECMAP', 'STCOD': 'STCOD', 'HOUSE': 'HOUSE', 'SUF': 'SUF', 'UNIT': 'UNIT', 'STEX': 'STEX', 'STDIR': 'STDIR', 'STNAM': 'STNAM', 'STDESSUF': 'STDESSUF', 'ELEV_FLAG': 'ELEV_FLAG', 'TOPELEV': 'TOPELEV', 'BOTELEV': 'BOTELEV', 'CONDOFLAG': 'CONDOFLAG', 'MATCHFLAG': 'MATCHFLAG', 'INACTDATE': 'INACTDATE', 'ORIG_DATE': 'ORIG_DATE', 'STATUS': 'STATUS', 'GEOID': 'GEOID', 'STDES': 'STDES', 'ADDR_SOURCE': 'ADDR_SOURCE', 'ADDR_STD': 'ADDR_STD', 'COMMENTS': 'COMMENTS', 'PIN': 'PIN', 'FRAC': 'FRAC', 'UNIT_TYPE': 'UNIT_TYPE', 'STEX_FRAC': 'STEX_FRAC', 'STEX_SUF': 'STEX_SUF', 'SEPARATED_RIGHTS': 'SEPARATED_RIGHTS', 'MUNIMENT_TYPE': 'MUNIMENT_TYPE', 'MUNIMENT_ID': 'MUNIMENT_ID', 'DOR_REVIEW': 'DOR_REVIEW', 'OPA_REVIEW': 'OPA_REVIEW', 'PWD_REVIEW': 'PWD_REVIEW', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', 'area_sqft': 'area_sqft', });
lyr_neighborhood_boundaries_web_2.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'LISTNAME': 'LISTNAME', 'MAPNAME': 'MAPNAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_bus_and_rail_web_3.set('fieldAliases', {'fid': 'fid', 'stop_id': 'stop_id', 'stop_code': 'stop_code', 'stop_name': 'stop_name', 'stop_desc': 'stop_desc', 'stop_lat': 'stop_lat', 'stop_lon': 'stop_lon', 'zone_id': 'zone_id', 'stop_url': 'stop_url', 'location_type': 'location_type', 'parent_station': 'parent_station', 'stop_timezone': 'stop_timezone', 'wheelchair_boarding': 'wheelchair_boarding', 'layer': 'layer', 'path': 'path', });
lyr_target_parcels_near_transit_web_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'RECSUB': 'TextEdit', 'BASEREG': 'TextEdit', 'MAPREG': 'TextEdit', 'PARCEL': 'TextEdit', 'RECMAP': 'TextEdit', 'STCOD': 'Range', 'HOUSE': 'Range', 'SUF': 'TextEdit', 'UNIT': 'TextEdit', 'STEX': 'Range', 'STDIR': 'TextEdit', 'STNAM': 'TextEdit', 'STDESSUF': 'TextEdit', 'ELEV_FLAG': 'Range', 'TOPELEV': 'TextEdit', 'BOTELEV': 'TextEdit', 'CONDOFLAG': 'Range', 'MATCHFLAG': 'Range', 'INACTDATE': 'DateTime', 'ORIG_DATE': 'DateTime', 'STATUS': 'Range', 'GEOID': 'TextEdit', 'STDES': 'TextEdit', 'ADDR_SOURCE': 'TextEdit', 'ADDR_STD': 'TextEdit', 'COMMENTS': 'TextEdit', 'PIN': 'Range', 'FRAC': 'TextEdit', 'UNIT_TYPE': 'TextEdit', 'STEX_FRAC': 'TextEdit', 'STEX_SUF': 'TextEdit', 'SEPARATED_RIGHTS': 'TextEdit', 'MUNIMENT_TYPE': 'TextEdit', 'MUNIMENT_ID': 'TextEdit', 'DOR_REVIEW': 'TextEdit', 'OPA_REVIEW': 'TextEdit', 'PWD_REVIEW': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', 'area_sqft': 'TextEdit', });
lyr_neighborhood_boundaries_web_2.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'LISTNAME': 'TextEdit', 'MAPNAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_bus_and_rail_web_3.set('fieldImages', {'fid': '', 'stop_id': '', 'stop_code': '', 'stop_name': '', 'stop_desc': '', 'stop_lat': '', 'stop_lon': '', 'zone_id': '', 'stop_url': '', 'location_type': '', 'parent_station': '', 'stop_timezone': '', 'wheelchair_boarding': '', 'layer': '', 'path': '', });
lyr_target_parcels_near_transit_web_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'RECSUB': 'no label', 'BASEREG': 'no label', 'MAPREG': 'no label', 'PARCEL': 'no label', 'RECMAP': 'no label', 'STCOD': 'no label', 'HOUSE': 'no label', 'SUF': 'no label', 'UNIT': 'no label', 'STEX': 'no label', 'STDIR': 'no label', 'STNAM': 'no label', 'STDESSUF': 'no label', 'ELEV_FLAG': 'no label', 'TOPELEV': 'no label', 'BOTELEV': 'no label', 'CONDOFLAG': 'no label', 'MATCHFLAG': 'no label', 'INACTDATE': 'no label', 'ORIG_DATE': 'no label', 'STATUS': 'no label', 'GEOID': 'no label', 'STDES': 'no label', 'ADDR_SOURCE': 'no label', 'ADDR_STD': 'no label', 'COMMENTS': 'no label', 'PIN': 'no label', 'FRAC': 'no label', 'UNIT_TYPE': 'no label', 'STEX_FRAC': 'no label', 'STEX_SUF': 'no label', 'SEPARATED_RIGHTS': 'no label', 'MUNIMENT_TYPE': 'no label', 'MUNIMENT_ID': 'no label', 'DOR_REVIEW': 'no label', 'OPA_REVIEW': 'no label', 'PWD_REVIEW': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', 'area_sqft': 'no label', });
lyr_neighborhood_boundaries_web_2.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'LISTNAME': 'no label', 'MAPNAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_bus_and_rail_web_3.set('fieldLabels', {'fid': 'no label', 'stop_id': 'no label', 'stop_code': 'no label', 'stop_name': 'no label', 'stop_desc': 'no label', 'stop_lat': 'no label', 'stop_lon': 'no label', 'zone_id': 'no label', 'stop_url': 'no label', 'location_type': 'no label', 'parent_station': 'no label', 'stop_timezone': 'no label', 'wheelchair_boarding': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_bus_and_rail_web_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});