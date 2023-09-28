import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();

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

app.get("/moments", (req, res) => {
  res.send(moments);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
