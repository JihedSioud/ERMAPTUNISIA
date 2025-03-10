ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32632").setExtent([169809.431323, 3524567.223618, 925676.108916, 4136495.181948]);
var wms_layers = [];

var format_Gouvernorat_0 = new ol.format.GeoJSON();
var features_Gouvernorat_0 = format_Gouvernorat_0.readFeatures(json_Gouvernorat_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Gouvernorat_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gouvernorat_0.addFeatures(features_Gouvernorat_0);
var lyr_Gouvernorat_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gouvernorat_0, 
                style: style_Gouvernorat_0,
                popuplayertitle: 'Gouvernorat',
                interactive: false,
                title: '<img src="styles/legend/Gouvernorat_0.png" /> Gouvernorat'
            });
var format_vNaturalPolygons_water_1 = new ol.format.GeoJSON();
var features_vNaturalPolygons_water_1 = format_vNaturalPolygons_water_1.readFeatures(json_vNaturalPolygons_water_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_vNaturalPolygons_water_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vNaturalPolygons_water_1.addFeatures(features_vNaturalPolygons_water_1);
var lyr_vNaturalPolygons_water_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vNaturalPolygons_water_1, 
                style: style_vNaturalPolygons_water_1,
                popuplayertitle: 'vNaturalPolygons_water',
                interactive: false,
                title: '<img src="styles/legend/vNaturalPolygons_water_1.png" /> vNaturalPolygons_water'
            });
var format_vWaterLines_rivers_2 = new ol.format.GeoJSON();
var features_vWaterLines_rivers_2 = format_vWaterLines_rivers_2.readFeatures(json_vWaterLines_rivers_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_vWaterLines_rivers_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vWaterLines_rivers_2.addFeatures(features_vWaterLines_rivers_2);
var lyr_vWaterLines_rivers_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vWaterLines_rivers_2, 
                style: style_vWaterLines_rivers_2,
                popuplayertitle: 'vWaterLines_rivers',
                interactive: false,
                title: '<img src="styles/legend/vWaterLines_rivers_2.png" /> vWaterLines_rivers'
            });
var format_structure_urgenceMap_3 = new ol.format.GeoJSON();
var features_structure_urgenceMap_3 = format_structure_urgenceMap_3.readFeatures(json_structure_urgenceMap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_structure_urgenceMap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_structure_urgenceMap_3.addFeatures(features_structure_urgenceMap_3);
var lyr_structure_urgenceMap_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_structure_urgenceMap_3, 
                style: style_structure_urgenceMap_3,
                popuplayertitle: 'structure_urgence (Map)',
                interactive: true,
                title: 'structure_urgence (Map)'
            });

lyr_Gouvernorat_0.setVisible(true);lyr_vNaturalPolygons_water_1.setVisible(true);lyr_vWaterLines_rivers_2.setVisible(true);lyr_structure_urgenceMap_3.setVisible(true);
var layersList = [lyr_Gouvernorat_0,lyr_vNaturalPolygons_water_1,lyr_vWaterLines_rivers_2,lyr_structure_urgenceMap_3];
lyr_Gouvernorat_0.set('fieldAliases', {'ADM2_EN': 'GOV', 'SAMU_zone': 'Zone Samu', });
lyr_vNaturalPolygons_water_1.set('fieldAliases', {'osm_id': 'osm_id', 'osm_wy_': 'osm_wy_', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admn_lv': 'admn_lv', 'barrier': 'barrier', 'boundry': 'boundry', 'buildng': 'buildng', 'craft': 'craft', 'geolgcl': 'geolgcl', 'historc': 'historc', 'land_ar': 'land_ar', 'landuse': 'landuse', 'leisure': 'leisure', 'man_mad': 'man_mad', 'militry': 'militry', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'othr_tg': 'othr_tg', });
lyr_vWaterLines_rivers_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_structure_urgenceMap_3.set('fieldAliases', {'code G': 'code G', 'Libelle_go': 'GOV', 'id_deleg': 'id_deleg', 'libelle_de': 'DEL', 'Type_struc': 'TYPE', 'id_struct': 'id_struct', 'Exist_sce_': 'Exist_sce_', 'exist_SMUR': 'exist_SMUR', 'libelle_st': 'STRUCT', 'lat': 'lat', 'long': 'long', 'fut_SMUR24': 'fut_SMUR24', 'fut_SMUR25': 'fut_SMUR25', 'SAMU_zone': 'ZONE SAMU', 'jihed_ID': 'jihed_ID', 'Emergency evaluation_LITE_09-03-2025_Gouvernorat': 'Emergency evaluation_LITE_09-03-2025_Gouvernorat', 'Emergency evaluation_LITE_09-03-2025_Type': 'Emergency evaluation_LITE_09-03-2025_Type', 'Emergency evaluation_LITE_09-03-2025_Nombre de malades en attente de transfert pour hospitalisation': 'Malades en attente de transfer', 'Emergency evaluation_LITE_09-03-2025_Durée Moyenne de Séjour( en heures)': 'Séjour Moyen', 'Emergency evaluation_LITE_09-03-2025_L’accessibilité au service d\'urgences est directe par la voie publique': 'Accessible par voie publique', 'Emergency evaluation_LITE_09-03-2025_La zone d\'accueil et de tri': 'Zone Acceuil / Tri', 'Emergency evaluation_LITE_09-03-2025_La zone d\'examen et de soins': 'Zone Exam/Soins', 'Emergency evaluation_LITE_09-03-2025_La zone de déchoquage': 'Zone Déchoquage', 'Emergency evaluation_LITE_09-03-2025_La zone d\'hospitalisation de courte durée/ surveillance': 'Zone Hosp/Surv', 'Emergency evaluation_LITE_09-03-2025_Nombre de box d’examen (à spécifier dans l’observation) (Obseravation)': 'Nbr Box EXAM', 'Emergency evaluation_LITE_09-03-2025_Nombre de box de soins (à spécifier dans l’observation) (Obseravation)': 'Nbr Box SOINS', 'Emergency evaluation_LITE_09-03-2025_Nombre de box de déchoquage (à spécifier dans l’observation) (Obseravation)': 'Nbr Box DECHOQUAGE', 'Emergency evaluation_LITE_09-03-2025_Nombre de lits de déchoquage (à spécifier dans l’observation) (Obseravation)': 'Nbr Lits DECHOQUAGE', 'Emergency evaluation_LITE_09-03-2025_Nombre de lits d\'hospitalisation de courte durée/ surveillance (à spécifier dans l’observation) (Obseravation)': 'Nbr Box Hosp/Surv', 'Emergency evaluation_LITE_09-03-2025_Nombre de source d’oxygène (à spécifier dans l’observation) (Obseravation)': 'Nbr Sources Oxygene', 'Emergency evaluation_LITE_09-03-2025_Agent de sécurité(Total)': 'Agents Sécurité', 'Emergency evaluation_LITE_09-03-2025_Le dossier médical informatisé est utilisé': 'DMI', 'Emergency evaluation_LITE_09-03-2025_Le retour des résultats des explorations (imagerie ou biologie) est informatisé.': 'Imagerie et/ou Biologie INFORMATISEE', });
lyr_Gouvernorat_0.set('fieldImages', {'ADM2_EN': 'TextEdit', 'SAMU_zone': 'TextEdit', });
lyr_vNaturalPolygons_water_1.set('fieldImages', {'osm_id': 'TextEdit', 'osm_wy_': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'aeroway': 'TextEdit', 'amenity': 'TextEdit', 'admn_lv': 'TextEdit', 'barrier': 'TextEdit', 'boundry': 'TextEdit', 'buildng': 'TextEdit', 'craft': 'TextEdit', 'geolgcl': 'TextEdit', 'historc': 'TextEdit', 'land_ar': 'TextEdit', 'landuse': 'TextEdit', 'leisure': 'TextEdit', 'man_mad': 'TextEdit', 'militry': 'TextEdit', 'natural': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'shop': 'TextEdit', 'sport': 'TextEdit', 'tourism': 'TextEdit', 'othr_tg': 'TextEdit', });
lyr_vWaterLines_rivers_2.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'z_order': 'Range', 'other_tags': 'TextEdit', });
lyr_structure_urgenceMap_3.set('fieldImages', {'code G': 'Hidden', 'Libelle_go': 'TextEdit', 'id_deleg': 'Hidden', 'libelle_de': 'TextEdit', 'Type_struc': 'TextEdit', 'id_struct': 'Hidden', 'Exist_sce_': 'Hidden', 'exist_SMUR': 'Hidden', 'libelle_st': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', 'fut_SMUR24': 'Hidden', 'fut_SMUR25': 'Hidden', 'SAMU_zone': 'TextEdit', 'jihed_ID': 'UniqueValues', 'Emergency evaluation_LITE_09-03-2025_Gouvernorat': 'Hidden', 'Emergency evaluation_LITE_09-03-2025_Type': 'Hidden', 'Emergency evaluation_LITE_09-03-2025_Nombre de malades en attente de transfert pour hospitalisation': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_Durée Moyenne de Séjour( en heures)': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_L’accessibilité au service d\'urgences est directe par la voie publique': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_La zone d\'accueil et de tri': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_La zone d\'examen et de soins': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_La zone de déchoquage': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_La zone d\'hospitalisation de courte durée/ surveillance': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_Nombre de box d’examen (à spécifier dans l’observation) (Obseravation)': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_Nombre de box de soins (à spécifier dans l’observation) (Obseravation)': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_Nombre de box de déchoquage (à spécifier dans l’observation) (Obseravation)': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_Nombre de lits de déchoquage (à spécifier dans l’observation) (Obseravation)': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_Nombre de lits d\'hospitalisation de courte durée/ surveillance (à spécifier dans l’observation) (Obseravation)': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_Nombre de source d’oxygène (à spécifier dans l’observation) (Obseravation)': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_Agent de sécurité(Total)': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_Le dossier médical informatisé est utilisé': 'TextEdit', 'Emergency evaluation_LITE_09-03-2025_Le retour des résultats des explorations (imagerie ou biologie) est informatisé.': 'TextEdit', });
lyr_Gouvernorat_0.set('fieldLabels', {'ADM2_EN': 'inline label - visible with data', 'SAMU_zone': 'inline label - visible with data', });
lyr_vNaturalPolygons_water_1.set('fieldLabels', {'osm_id': 'no label', 'osm_wy_': 'no label', 'name': 'no label', 'type': 'no label', 'aeroway': 'no label', 'amenity': 'no label', 'admn_lv': 'no label', 'barrier': 'no label', 'boundry': 'no label', 'buildng': 'no label', 'craft': 'no label', 'geolgcl': 'no label', 'historc': 'no label', 'land_ar': 'no label', 'landuse': 'no label', 'leisure': 'no label', 'man_mad': 'no label', 'militry': 'no label', 'natural': 'no label', 'office': 'no label', 'place': 'no label', 'shop': 'no label', 'sport': 'no label', 'tourism': 'no label', 'othr_tg': 'no label', });
lyr_vWaterLines_rivers_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_structure_urgenceMap_3.set('fieldLabels', {'Libelle_go': 'inline label - always visible', 'libelle_de': 'inline label - always visible', 'Type_struc': 'inline label - always visible', 'libelle_st': 'inline label - always visible', 'SAMU_zone': 'inline label - always visible', 'jihed_ID': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_Nombre de malades en attente de transfert pour hospitalisation': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_Durée Moyenne de Séjour( en heures)': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_L’accessibilité au service d\'urgences est directe par la voie publique': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_La zone d\'accueil et de tri': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_La zone d\'examen et de soins': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_La zone de déchoquage': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_La zone d\'hospitalisation de courte durée/ surveillance': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_Nombre de box d’examen (à spécifier dans l’observation) (Obseravation)': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_Nombre de box de soins (à spécifier dans l’observation) (Obseravation)': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_Nombre de box de déchoquage (à spécifier dans l’observation) (Obseravation)': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_Nombre de lits de déchoquage (à spécifier dans l’observation) (Obseravation)': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_Nombre de lits d\'hospitalisation de courte durée/ surveillance (à spécifier dans l’observation) (Obseravation)': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_Nombre de source d’oxygène (à spécifier dans l’observation) (Obseravation)': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_Agent de sécurité(Total)': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_Le dossier médical informatisé est utilisé': 'inline label - always visible', 'Emergency evaluation_LITE_09-03-2025_Le retour des résultats des explorations (imagerie ou biologie) est informatisé.': 'inline label - always visible', });
lyr_structure_urgenceMap_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});