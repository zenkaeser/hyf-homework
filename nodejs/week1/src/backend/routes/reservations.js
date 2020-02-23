const fs = require("fs");
const filepath = require("path").resolve(__dirname, "..");

function reservationsRouter() {
    const reservationsData = fs.readFileSync(`${filepath}/data/reservations.json`);

    return JSON.parse(reservationsData);
}

module.exports = (request, response) => response.send(reservationsRouter());
module.exports.reservationsRouter = reservationsRouter();