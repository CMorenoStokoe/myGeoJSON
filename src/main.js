// Event handler for merge button
$('#submit-btn').click(
    mergeFiles
);

// Remove loading screen when loaded
window.onload=loaded;
function loaded(){
    $('#loading-screen').hide();
};

// Function to merge csv with geojson
function mergeFiles(){
    console.log('Marging files');

    var fileReader = new FileReader();
        fileReader.onload = function (e) { 
        console.log('Loaded file')
        
        // Parse CSV
        var data = Papa.parse(fileReader.result)['data'];

        var mergedFile = {
            "type":"FeatureCollection",
            "name": "myGeoJSON_la_merged_dataset",
            "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
            "features": []
        };

        for(const row of data){
            var la = row[0];
            var value = row[1];
            
            for(const feature of boundaries["features"]){
                if(feature["properties"]["lad11cd"] === la){
                    feature["properties"]["value"] = Number(value);
                    mergedFile["features"].push(feature);
                }
            }
        }
        
        document.getElementById('output').innerHTML = `Data merged for ${mergedFile["features"].length} LSOAs`
        
        // Download file
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(mergedFile));
        var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem.setAttribute("href",     dataStr     );
        dlAnchorElem.setAttribute("download", "my_map_data.GeoJSON");
        dlAnchorElem.click();
    }

    // Get most recent file uploaded and invoke above function
    fileReader.readAsText(document.getElementById('file-csv').files[0]);
}