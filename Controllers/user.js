import { client } from "../db.js";

export function addUser(userInfo) {
  return client.db("Students").collection("users").insertOne(userInfo);
}

export function getUser(email) {
  return client.db("Students").collection("users").findOne({ email: email });
}
