# myGeoJSON

Description
===========
Create a GeoJSON map file from spatial data given in a CSV


Instructions
===========
1. Format a spreadsheet with data arranged by LSOA (e.g., using Excel)

Example format:

LSOA code	Value
W01000001	1,234
W01000002	584
W01000003	5854
W01000004	324
W01000005	86573

2. Save it as a CSV file (.CSV)

3. Open this app (presss the shortcut 'Lunach myGeoJSON')

4. Select your CSV file

5. Click merge and download

6. The app should try to give you a GeoJSON file to download (you might get a pop-up asking you to confirm)


About the output
================
The will search your CSV file for LSOAs also present in a GeoJSON file containing 2011 UK LSOAs, and will return to you a GeoJSON file with a featureCollection of LSOAs as features. Your values have been inserted as a new property named "values" (in feature.properties). This "values" property can later be used to color areas.

Baseline LSOA GeoJSON data: ONS Geography Portal LSOAs 2011 (src/ Lower_Layer_Super_Output_Area__December_2011__EW_BSC_V2)

Specification of a GeoJSON feature:
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}

Information on GeoJSON: https://geojson.org/ 