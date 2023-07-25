import { client } from "../db.js";
import jwt from "jsonwebtoken";

export function addUser(userInfo) {
  return client.db("Students").collection("users").insertOne(userInfo);
}

export function getUser(email) {
  return client.db("Students").collection("users").findOne({ email: email });
}
export function generateToken(id) {
  return jwt.sign({ id }, process.env.SECRET_KEY);
}
