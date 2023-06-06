"use strict";

const firebase = require("../db");
const firestore = firebase.firestore();
var md5 = require("md5");
const storage = require("../storage");
const bucket = storage.bucket();

const loginController = async (req, res, next) => {
  try {
    const username = req.params.username;
    const password = req.params.password;
    const account = await firestore
      .collection("Login")
      .where("Username", "==", username)
      .where("Password", "==", password);
    const data = await account.get();
    const AccountArray = [];
    if (data.empty) {
      res.status(404).send("ไม่พบข้อมูลใด");
    } else {
      data.forEach((doc) => {
        res.send({
          id: doc.id,
          username: doc.data().Username,
          type: doc.data().type,
        });
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  loginController,
};
