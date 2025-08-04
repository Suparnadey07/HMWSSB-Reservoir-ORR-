var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Reservoir_2 = new ol.format.GeoJSON();
var features_Reservoir_2 = format_Reservoir_2.readFeatures(json_Reservoir_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reservoir_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservoir_2.addFeatures(features_Reservoir_2);
var lyr_Reservoir_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reservoir_2, 
                style: style_Reservoir_2,
                popuplayertitle: 'Reservoir',
                interactive: true,
    title: 'Reservoir<br />\
    <img src="styles/legend/Reservoir_2_0.png" /> Less than 1 MLD<br />\
    <img src="styles/legend/Reservoir_2_1.png" /> 1 -5 MLD<br />\
    <img src="styles/legend/Reservoir_2_2.png" /> More than 5 MLD<br />' });
var format_Reservoir_sources_3 = new ol.format.GeoJSON();
var features_Reservoir_sources_3 = format_Reservoir_sources_3.readFeatures(json_Reservoir_sources_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reservoir_sources_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservoir_sources_3.addFeatures(features_Reservoir_sources_3);
var lyr_Reservoir_sources_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reservoir_sources_3, 
                style: style_Reservoir_sources_3,
                popuplayertitle: 'Reservoir_sources',
                interactive: true,
                title: '<img src="styles/legend/Reservoir_sources_3.png" /> Reservoir_sources'
            });
var format_SectionBoundary_4 = new ol.format.GeoJSON();
var features_SectionBoundary_4 = format_SectionBoundary_4.readFeatures(json_SectionBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SectionBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SectionBoundary_4.addFeatures(features_SectionBoundary_4);
var lyr_SectionBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SectionBoundary_4, 
                style: style_SectionBoundary_4,
                popuplayertitle: 'Section Boundary',
                interactive: true,
                title: '<img src="styles/legend/SectionBoundary_4.png" /> Section Boundary'
            });
var format_DivisionBoundary_5 = new ol.format.GeoJSON();
var features_DivisionBoundary_5 = format_DivisionBoundary_5.readFeatures(json_DivisionBoundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivisionBoundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivisionBoundary_5.addFeatures(features_DivisionBoundary_5);
var lyr_DivisionBoundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DivisionBoundary_5, 
                style: style_DivisionBoundary_5,
                popuplayertitle: 'Division Boundary',
                interactive: true,
                title: '<img src="styles/legend/DivisionBoundary_5.png" /> Division Boundary'
            });
var format_CIRCLEBOUNDARY_6 = new ol.format.GeoJSON();
var features_CIRCLEBOUNDARY_6 = format_CIRCLEBOUNDARY_6.readFeatures(json_CIRCLEBOUNDARY_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIRCLEBOUNDARY_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIRCLEBOUNDARY_6.addFeatures(features_CIRCLEBOUNDARY_6);
var lyr_CIRCLEBOUNDARY_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CIRCLEBOUNDARY_6, 
                style: style_CIRCLEBOUNDARY_6,
                popuplayertitle: 'CIRCLE BOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/CIRCLEBOUNDARY_6.png" /> CIRCLE BOUNDARY'
            });
var format_HUA_7 = new ol.format.GeoJSON();
var features_HUA_7 = format_HUA_7.readFeatures(json_HUA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HUA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HUA_7.addFeatures(features_HUA_7);
var lyr_HUA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HUA_7, 
                style: style_HUA_7,
                popuplayertitle: 'HUA',
                interactive: true,
                title: '<img src="styles/legend/HUA_7.png" /> HUA'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Reservoir_2.setVisible(true);lyr_Reservoir_sources_3.setVisible(true);lyr_SectionBoundary_4.setVisible(true);lyr_DivisionBoundary_5.setVisible(true);lyr_CIRCLEBOUNDARY_6.setVisible(true);lyr_HUA_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Reservoir_2,lyr_Reservoir_sources_3,lyr_SectionBoundary_4,lyr_DivisionBoundary_5,lyr_CIRCLEBOUNDARY_6,lyr_HUA_7];
lyr_Reservoir_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name of Reservoir', 'Capacity': 'Capacity(MLD)', 'LWL': 'LWL', 'MWL': 'MWL', 'un_id': 'un_id', 'Type': 'Type of Reservoir', 'Remarks': 'Remarks', });
lyr_Reservoir_sources_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Year': 'Year of Construction', 'Total_Cap': 'Total Capacity in TMC', 'FTL': 'Storage Capacity at FTL in TMC', 'NormalDrawls': 'Normal Drawls in MGD', 'NormalDrawl_1': 'Normal Drawls in MLD', 'PresentDrawl': 'Present Drawls in MGD', 'PresentDrawl_1': 'Present Drawls in MLD', 'Alloct_Hyd': 'Allocated to Hyderabad', 'FRL': 'Full Reservoir Level', });
lyr_SectionBoundary_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'circle_no': 'Circle No', 'division_n': 'Division name', 'sub_divisi': 'Sub-Division', 'section_co': 'Section', 'remarks': 'remarks', 'globalid': 'globalid', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'divisionna': 'divisionna', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'd_remarks': 'd_remarks', 'Area': 'Area(Sq.km)', 'Sect_Name_': 'Section Name', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DivisionBoundary_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'All_Division_Boundary_HMWSSB_circle_no': 'Circle No', 'All_Division_Boundary_HMWSSB_division_n': 'Division No', 'All_Division_Boundary_HMWSSB_divisionna': 'Division Name', 'All_Division_Boundary_HMWSSB_remarks': 'remarks', 'All_Division_Boundary_HMWSSB_globalid': 'globalid', 'All_Division_Boundary_HMWSSB_created_us': 'created_us', 'All_Division_Boundary_HMWSSB_created_da': 'created_da', 'All_Division_Boundary_HMWSSB_last_edite': 'last_edite', 'All_Division_Boundary_HMWSSB_last_edi_1': 'last_edi_1', 'All_Division_Boundary_HMWSSB_st_area_sh': 'st_area_sh', 'All_Division_Boundary_HMWSSB_st_length_': 'st_length_', 'All_Division_Boundary_HMWSSB_Div_Name': 'Div_Name', 'All_Division_Boundary_HMWSSB_Div_Name2': 'Div_Name2', 'All_Division_Boundary_HMWSSB_area': 'Area(Sq.km)', 'All_Division_Boundary_HMWSSB_Remarks_1': 'Remarks_1', 'All_Division_Boundary_HMWSSB_Remarks_2': 'Remarks_2', 'All_Division_Boundary_HMWSSB_Div': 'Div', 'All_Division_Boundary_HMWSSB_Range': 'Range', 'FORANALYSIS_csv_Div_Number': 'Div Number', 'FORANALYSIS_csv_ID': 'ID', 'FORANALYSIS_csv_Deficit': 'Deficit', 'FORANALYSIS_csv_Demand': 'Demand', 'FORANALYSIS_csv_Supply': 'Supply', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_CIRCLEBOUNDARY_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'circle_no': 'Circle No', 'remarks': 'remarks', 'created_us': 'created_us', 'Area': 'Area (Sq.Km)', 'Division_No': 'Total No of Divisions', 'Section_No': 'Total no of Sections', 'Docket_No': 'Total no of Dockets', 'Reservoir_No': 'Total no of Reservoirs', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_HUA_7.set('fieldAliases', {'OBJECTID_12': 'OBJECTID_12', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Perimeter': 'Perimeter', 'Area': 'Area(Sq.km)', 'Population': 'Population(2011)', 'Ulb_No': 'No of ULBs', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Reservoir_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Capacity': 'TextEdit', 'LWL': 'TextEdit', 'MWL': 'TextEdit', 'un_id': 'TextEdit', 'Type': 'TextEdit', 'Remarks': 'TextEdit', });
lyr_Reservoir_sources_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Year': 'TextEdit', 'Total_Cap': 'TextEdit', 'FTL': 'TextEdit', 'NormalDrawls': 'TextEdit', 'NormalDrawl_1': 'TextEdit', 'PresentDrawl': 'TextEdit', 'PresentDrawl_1': 'TextEdit', 'Alloct_Hyd': 'TextEdit', 'FRL': 'TextEdit', });
lyr_SectionBoundary_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'circle_no': 'TextEdit', 'division_n': 'TextEdit', 'sub_divisi': 'TextEdit', 'section_co': 'TextEdit', 'remarks': 'TextEdit', 'globalid': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'divisionna': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'd_remarks': 'TextEdit', 'Area': 'TextEdit', 'Sect_Name_': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DivisionBoundary_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'All_Division_Boundary_HMWSSB_circle_no': 'TextEdit', 'All_Division_Boundary_HMWSSB_division_n': 'TextEdit', 'All_Division_Boundary_HMWSSB_divisionna': 'TextEdit', 'All_Division_Boundary_HMWSSB_remarks': 'TextEdit', 'All_Division_Boundary_HMWSSB_globalid': 'TextEdit', 'All_Division_Boundary_HMWSSB_created_us': 'TextEdit', 'All_Division_Boundary_HMWSSB_created_da': 'DateTime', 'All_Division_Boundary_HMWSSB_last_edite': 'TextEdit', 'All_Division_Boundary_HMWSSB_last_edi_1': 'DateTime', 'All_Division_Boundary_HMWSSB_st_area_sh': 'TextEdit', 'All_Division_Boundary_HMWSSB_st_length_': 'TextEdit', 'All_Division_Boundary_HMWSSB_Div_Name': 'TextEdit', 'All_Division_Boundary_HMWSSB_Div_Name2': 'TextEdit', 'All_Division_Boundary_HMWSSB_area': 'TextEdit', 'All_Division_Boundary_HMWSSB_Remarks_1': 'TextEdit', 'All_Division_Boundary_HMWSSB_Remarks_2': 'TextEdit', 'All_Division_Boundary_HMWSSB_Div': 'Range', 'All_Division_Boundary_HMWSSB_Range': 'TextEdit', 'FORANALYSIS_csv_Div_Number': 'TextEdit', 'FORANALYSIS_csv_ID': 'Range', 'FORANALYSIS_csv_Deficit': 'TextEdit', 'FORANALYSIS_csv_Demand': 'TextEdit', 'FORANALYSIS_csv_Supply': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CIRCLEBOUNDARY_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'circle_no': 'TextEdit', 'remarks': 'TextEdit', 'created_us': 'TextEdit', 'Area': 'TextEdit', 'Division_No': 'TextEdit', 'Section_No': 'TextEdit', 'Docket_No': 'TextEdit', 'Reservoir_No': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HUA_7.set('fieldImages', {'OBJECTID_12': 'TextEdit', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'Name': 'TextEdit', 'Perimeter': 'TextEdit', 'Area': 'TextEdit', 'Population': 'Range', 'Ulb_No': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Reservoir_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Capacity': 'inline label - visible with data', 'LWL': 'inline label - visible with data', 'MWL': 'inline label - visible with data', 'un_id': 'hidden field', 'Type': 'inline label - visible with data', 'Remarks': 'inline label - visible with data', });
lyr_Reservoir_sources_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Year': 'inline label - visible with data', 'Total_Cap': 'inline label - visible with data', 'FTL': 'inline label - visible with data', 'NormalDrawls': 'inline label - visible with data', 'NormalDrawl_1': 'inline label - visible with data', 'PresentDrawl': 'inline label - visible with data', 'PresentDrawl_1': 'inline label - visible with data', 'Alloct_Hyd': 'inline label - visible with data', 'FRL': 'inline label - visible with data', });
lyr_SectionBoundary_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'circle_no': 'inline label - visible with data', 'division_n': 'inline label - visible with data', 'sub_divisi': 'inline label - visible with data', 'section_co': 'inline label - visible with data', 'remarks': 'hidden field', 'globalid': 'hidden field', 'created_us': 'hidden field', 'created_da': 'hidden field', 'last_edite': 'hidden field', 'last_edi_1': 'hidden field', 'divisionna': 'hidden field', 'st_area_sh': 'hidden field', 'st_length_': 'hidden field', 'd_remarks': 'hidden field', 'Area': 'inline label - visible with data', 'Sect_Name_': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_DivisionBoundary_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'All_Division_Boundary_HMWSSB_circle_no': 'inline label - visible with data', 'All_Division_Boundary_HMWSSB_division_n': 'inline label - visible with data', 'All_Division_Boundary_HMWSSB_divisionna': 'inline label - visible with data', 'All_Division_Boundary_HMWSSB_remarks': 'hidden field', 'All_Division_Boundary_HMWSSB_globalid': 'hidden field', 'All_Division_Boundary_HMWSSB_created_us': 'hidden field', 'All_Division_Boundary_HMWSSB_created_da': 'hidden field', 'All_Division_Boundary_HMWSSB_last_edite': 'hidden field', 'All_Division_Boundary_HMWSSB_last_edi_1': 'hidden field', 'All_Division_Boundary_HMWSSB_st_area_sh': 'hidden field', 'All_Division_Boundary_HMWSSB_st_length_': 'hidden field', 'All_Division_Boundary_HMWSSB_Div_Name': 'hidden field', 'All_Division_Boundary_HMWSSB_Div_Name2': 'hidden field', 'All_Division_Boundary_HMWSSB_area': 'inline label - visible with data', 'All_Division_Boundary_HMWSSB_Remarks_1': 'hidden field', 'All_Division_Boundary_HMWSSB_Remarks_2': 'hidden field', 'All_Division_Boundary_HMWSSB_Div': 'hidden field', 'All_Division_Boundary_HMWSSB_Range': 'hidden field', 'FORANALYSIS_csv_Div_Number': 'hidden field', 'FORANALYSIS_csv_ID': 'hidden field', 'FORANALYSIS_csv_Deficit': 'hidden field', 'FORANALYSIS_csv_Demand': 'hidden field', 'FORANALYSIS_csv_Supply': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_CIRCLEBOUNDARY_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'circle_no': 'inline label - visible with data', 'remarks': 'hidden field', 'created_us': 'hidden field', 'Area': 'inline label - visible with data', 'Division_No': 'inline label - visible with data', 'Section_No': 'inline label - visible with data', 'Docket_No': 'inline label - visible with data', 'Reservoir_No': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_HUA_7.set('fieldLabels', {'OBJECTID_12': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Perimeter': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Ulb_No': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_HUA_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});