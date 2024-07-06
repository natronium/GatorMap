const papaPromise = (importFile) => new Promise((resolve, reject) => {
    Papa.parse(importFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            resolve(results);
        },
        error: function(error) {
            reject(error);
        }
    });
})

const location_info = papaPromise("./data/Locations.csv");

export default await location_info;