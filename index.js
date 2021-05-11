const csv = require('csv-parser');
const fs = require('fs');
const axios = require('axios');
var data = [];
var promises=[];
var result = [];

main()

function main() {
  fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (row) => {
      data.push(row);
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
      makePromises();
    });
}

function makePromises() {
  for(var d=0; d<data.length; d++) {
    promises.push(fetchData(data[d].referentienummer, data[d].identifier))
  }

  Promise.all(promises).then(function(values) {
    // only find nl-links
    var output = "url;referentienummer;identifier\n"
    for(var v=0; v < values.length; v++) {
      if(values[v].links && values[v].links.nlwiki) {
        var url = values[v].links.nlwiki.url;
        output += `${url};${values[v].referentienummer};${values[v].identifier}\n`;
      }
    }
    fs.writeFile('output.csv', output, function (err, file) {
      if (err) throw err;
      console.log('Output saved!');
    });
  });
}

function fetchData(referentienummer, identifier) {
  return axios
    .get('https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=sitelinks/urls&ids='+identifier)
    .then(function(response) {
      let [first] = Object.keys(response.data.entities);
      let sitelinks = response.data.entities[first].sitelinks;
      return {
        identifier: identifier,
        referentienummer: referentienummer,
        links: sitelinks
      };
    })
    .catch(function(error) {
      return { success: false };
    });
}
