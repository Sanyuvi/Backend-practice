import express from "express";

import { getAllStudents } from "../Controllers/students.js";
import { addStudent } from "../Controllers/students.js";
import {
  getStudentbyId,
  editStudentbyId,
  deleteStudentbyId,
} from "../Controllers/students.js";
//initializing router

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const students = await getAllStudents(req);
    if (students.length <= 0) {
      return res.status(404).send({ message: "No Data Available" });
    }

    res.status(200).send(students);
  } catch (error) {
    console.log(error);

    res.status(500).send({ message: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await getStudentbyId(id);
    if (!student) {
      return res.status(400).send({ message: "No content available" });
    }
    return res.status(200).send(student);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

router.post("/add", async (req, res) => {
  try {
    if (Object.keys(req.body).length <= 0) {
      return res.status(400).send({ message: "No content available" });
    }
    const newStudent = await addStudent(req.body);

    if (!newStudent.acknowledged) {
      return res.status(400).send({ message: "Cannot add data" });
    }
    res.status(201).send({ result: newStudent, data: req.body });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});
router.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || Object.keys(req.body).length <= 0) {
      return res.status(400).send({ message: "Not a valid request" });
    }
    const editedStudents = await editStudentbyId(id, req.body);
    res.status(201).send({ result: editedStudents, data: req.body });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "Not a valid request" });
    }
    const deletedStudents = await deleteStudentbyId(id);
    res
      .status(200)
      .send({ result: deletedStudents, success: "Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

export const studentRouter = router;
