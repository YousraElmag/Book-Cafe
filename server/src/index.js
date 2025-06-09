import dotenv from "dotenv";
import app from "./app.js";
import { logInfo, logError } from "./util/logging.js";
import testRouter from "./testRouter.js";
import express from "express";

dotenv.config();

const port = process.env.PORT || 5000;

if (port == null) {
  logError(new Error("Cannot find a PORT number, did you create a .env file?"));
}


app.listen(port, () => {
  logInfo(`Server started on port ${port}`);
});



// For Cypress testing
if (process.env.NODE_ENV !== "production") {
  app.use("https://book-cafe-yi78.onrender.com/api/test", testRouter);
}
