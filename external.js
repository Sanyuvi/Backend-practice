// // console.log("Hello");
// // const [, , name1, name2] = process.argv;
// // console.log(name1, name2);

// const fs = require("fs");
// const os = require("os");
// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(`Error Occurred:${err}`);
//   } else {
//     console.log(data);
//   }
// });

// const content = "Janani oru loosu Kamanatti";

// fs.writeFile("./newsample.txt", content, (err) => {
//   if (err) {
//     console.log(`Error Occurred:${err}`);
//   } else {
//     console.log("Files writted successfully");
//   }
// });

// const appendContent = `\nJanani oru loosu Kamanatti`;

// fs.writeFile("./newsample.txt", appendContent, (err) => {
//   if (err) {
//     console.log(`Error Occurred:${err}`);
//   } else {
//     console.log("Files writted successfully");
//   }
// });

// fs.unlink("./newsample.txt", (err) => {
//   if (err) {
//     console.log(`Error Occurred:${err}`);
//   } else {
//     console.log("Files writted successfully");
//   }
// });

// console.log(`Total OS memory${os.totalmem()}`);
// console.log(`Free memory ${os.freemem()}`);
// console.log(`Version of our OS ${os.version()}`);
// console.log(`CPUS : `, os.cpus());

// import express from "express";

// const app = express();

// const PORT = 8020;

// const carData = [
//   {
//     id: "1",
//     model: "sedan",
//     engine: "1liter",
//     transmission: "manual",
//     name: "virtus",
//     capacity: "5",
//     variant: "TSI",
//     isbooked: "true",
//   },
//   {
//     id: "2",
//     model: "SUV",
//     engine: "1liter",
//     transmission: "manual",
//     name: "Taigun",
//     capacity: "5",
//     variant: "TSI",
//     isbooked: "false",
//   },
//   {
//     id: "3",
//     model: "sedan",
//     engine: "1.5liter",
//     transmission: "Automatic",
//     name: "virtus",
//     capacity: "5",
//     variant: "GT",
//     isbooked: "false",
//   },
//   {
//     id: "4",
//     model: "SUV",
//     engine: "1.5liter",
//     transmission: "Automatic",
//     name: "Taigun",
//     capacity: "5",
//     variant: "GT",
//     isbooked: "true",
//   },
// ];

// app.get("/car/all", (req, res) => {
//   const { isbooked, model } = req.query;
//   let carInfo = carData;
//   if (isbooked) {
//     carInfo = carInfo.filter((car) => car.isbooked === isbooked);
//   }
//   if (model) {
//     carInfo = carInfo.filter((car) => car.model === model);
//   }

//   res.send(carInfo);
// });

// app.listen(PORT, () => console.log(`Server started in localhost:${PORT}`));
