const reservationsRouter = require("./reservations.js");

function reservationRouter() {
    const reservations = reservationsRouter.reservationsRouter;

    return reservations[Math.floor (Math.random() * reservations.length) ];
}

module.exports = (request, response) => response.send(reservationRouter());
