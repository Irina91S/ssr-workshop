import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

// create express app
const app = express();

// set public folder as express static assets
app.use(express.static("public"));

// listen to root request
app.get("*", (req, res) => {
  const store = createStore();
  // dispatch fetch users action creator
  // ask the route/routes  what data do they need
  res.send(renderer(req, store));
});

// start server
app.listen(5505, () => {
  console.info("SSR server is listening on port 5505");
});
