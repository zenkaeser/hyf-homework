const fs = require("fs");
const filepath = require("path").resolve(__dirname, "..");

function getReservationsById(id) {
    const reservations = reservationsRouter();

    return reservations.filter(element => element.id == id);
}

function reservationsRouter() {
    const reservationsData = fs.readFileSync(`${filepath}/data/reservations.json`);

    return JSON.parse(reservationsData);
}

module.exports = (request, response) => response.send(reservationsRouter());
module.exports.reservationsRouter = reservationsRouter();
module.exports.getReservationsById = getReservationsById;