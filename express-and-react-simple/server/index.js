console.log("app is loading");
// const express = require("express");
import express from "express"
const app = express();
import {addContact, addPurchase} from "./utils.js"
// used for json inside body 
app.use(express.json());

app.post("/contacts", (req, res)=> {
  addContact(req, res)
})

app.post("/purchases", (req, res)=> {
  addPurchase(req, res)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
