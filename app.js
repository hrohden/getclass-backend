import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();

// Middleware to parse the body of the request
app.use(express.json());

const moments = [
  {
    id: uuidv4(),
    title: "(🖥️) Trip to NYC",
    headline: "My trip to NY with my wife",
    description:
      "It was an amazing trip! Many places to take pictures and visit!",
    isFavorite: false,
  },
  {
    id: uuidv4(),
    title: "(🖥️) Trip to Europe",
    headline: "My trip to Europe with my wife in 2014",
    description:
      "This trip was when we were waiting for Lucas. Many pictures and great moments.",
    isFavorite: false,
  },
];

// GET method to get all the moments
app.get("/moments", (req, res) => {
  res.send(moments);
});

// POST method to create a new moment
app.post("/moments", (req, res) => {
  const moment = { ...req.body, id: uuidv4() }
  moments.push(moment);
  res.send(moment);
});

// PUT method to update a moment
app.put("/moments/:id", (req, res) => {
  const { id } = req.params;
  const index = moments.findIndex((moment) => moment.id === id);
  if (index > -1) {
    moments[index] = { ...req.body, id };
  }
  res.send(moments[index]);
});

// DELETE method to delete a moment
app.delete("/moments/:id", (req, res) => {
  const { id } = req.params;
  const index = moments.findIndex((moment) => moment.id === id);
  if (index > -1) {
    moments.splice(index, 1);
  }
  res.send(id);
});

// Listen to the port 3000
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
