import express from "express";
import encontros from "./encontrosRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("API NodeJS Express & MongoDb"));

    app.use(express.json(), encontros);
};

export default routes;