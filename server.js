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
  response.json(parks);
});

app.get("/parks/:id", (request, response) => {
  // authors/1
  const park = parks.find(
    (p) => parseInt(p.id) === parseInt(request.params.id)
  );
  // make sure park is available
  if (park) {
    response.status(200).json(park);
  } else {
    // error handling
    response.status(404).json({ error: "PARK ID provided is not available" });
  }
});

app.get("/visitors", (request, response) => {
  response.json(visitors);
});

app.get("/visitors/:id", (request, response) => {
  const visitorId = parseInt(request.params.id);
  const visitor = visitors.find((v) => v.id === visitorId);

  if (visitor) {
    const pastReservations = reservations.filter(
      (r) => r.visitorId === visitorId
    );
    const upcomingReservations = reservations.filter(
      (r) => r.visitorId === visitorId
    );

    const visitorInfo = {
      id: visitor.id,
      name: visitor.name,
      pastReservations,
      upcomingReservations,
    };

    response.status(200).json(visitorInfo);
  } else {
    response.status(404).json({ error: "Visitor not found" });
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
    response.status(404).json("Reservation ID is not available");
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
