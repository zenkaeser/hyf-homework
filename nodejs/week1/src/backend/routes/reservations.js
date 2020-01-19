const fs = require('fs');
const filepath = require('path').resolve(__dirname, '..');


function reservationsRouter() {

    let reservationsData = fs.readFileSync(`${filepath}/data/reservations.json`);
    let reservations = JSON.parse(reservationsData);
    
    return reservations;
}

module.exports = (request, response) => {
    response.send(reservationsRouter());
};
module.exports.reservationsRouter = reservationsRouter();