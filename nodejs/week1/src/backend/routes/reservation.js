const reservationsRouter = require('./reservations.js');


function reservationRouter() {
    let reservations = reservationsRouter.reservationsRouter;
    let item = reservations[Math.floor(Math.random()*reservations.length)];

    return item;
}

module.exports = (request, response) => {
    response.send(reservationRouter());
};
