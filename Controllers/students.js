import { client } from "../db.js";
import { ObjectId } from "bson";

export function getAllStudents(req) {
  return client

    .db("Students")

    .collection("Students")

    .find(req.query)

    .toArray();
}

export function getStudentbyId(id) {
  return client
    .db("Students")
    .collection("Students")
    .findOne({ _id: new ObjectId(id) });
}

export function addStudent(data) {
  return client

    .db("Students")

    .collection("Students")

    .insertOne(data);
}

export function editStudentbyId(id, data) {
  return client
    .db("Students")
    .collection("Students")
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: data });
}

export function deleteStudentbyId(id) {
  return client
    .db("Students")
    .collection("Students")
    .findOneAndDelete({ _id: new ObjectId(id) });
}
