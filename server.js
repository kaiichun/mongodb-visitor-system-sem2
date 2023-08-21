const express = require("express");
const app = express();

let parks = [
  {
    id: 1,
    name: "Yellowstone National Park",
    facilities: ["campgrounds", "visitor-center", "trails"],
  },
  {
    id: 2,
    name: "Zion National Park",
    facilities: ["trails", "visitor-center"],
  },
];

let visitors = [
  { id: 1, name: "John Doe", pastReservations: [1], upcomingReservations: [2] },
  { id: 2, name: "Jane Smith", pastReservations: [], upcomingReservations: [] },
];

let reservations = [
  { id: 1, parkId: 1, visitorId: 1, date: "2023-09-01" },
  { id: 2, parkId: 2, visitorId: 1, date: "2023-10-01" },
];

// Your routing, authentication, and controller code goes here

app.get("/parks", (request, response) => {
  const { facilities } = request.query;
  let filteredParks = [...parks];

  if (facilities) {
    filteredParks = filteredParks.filter((p) => {
      return p.facilities.includes(facilities);
    });
  }

  response.json(filteredParks);
});

app.get("/parks/:id", (request, response) => {
  const park = parks.find(
    (p) => parseInt(p.id) === parseInt(request.params.id)
  );
  if (park) {
    response.status(200).json(park);
  } else {
    response.status(400).json({ error: "PARK ID provided is not available" });
  }
});

app.get("/visitors", (request, response) => {
  response.json(visitors);
});

app.get("/visitors/:id", (request, response) => {
  const visitor = visitors.find(
    (v) => parseInt(v.id) === parseInt(request.params.id)
  );

  if (visitor) {
    response.status(200).json({
      ...visitor,
      name: visitor.name,
      upcomingReservations: visitor.upcomingReservations.map(
        (reservation_id) => {
          const reservation = reservations.find((r) => r.id === reservation_id);
          if (reservation) {
            return reservation;
          }
        }
      ),
      pastReservations: visitor.pastReservations.map((reservation_id) => {
        const reservation = reservations.find((r) => r.id === reservation_id);
        if (reservation) {
          return reservation;
        }
      }),
    });
  } else {
    response.status(400).json({ error: "Visitor ID is unavailable" });
  }
});

app.get("/reservations", (request, response) => {
  response.json(reservations);
});

app.get("/reservations/:id", (request, response) => {
  const reservation = reservations.find(
    (p) => parseInt(p.id) === parseInt(request.params.id)
  );
  if (reservation) {
    response.status(200).json(reservation);
  } else {
    response.status(400).json("Reservation ID is not available");
  }
});

app.get("/", (request, response) => {
  response.send(
    '<a href="/parks"> Parks </a> <br/> <a href="/visitors"> Visitors </a> <br/> <a href="/reservations"> Reservation </a>'
  );
});

app.listen(8080, () => {
  console.log("Bookstore app is running on port 8080");
});
