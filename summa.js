import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
/*
app.get("/", async (req, res) => {
    try {
      console.log(req.body);
      const response = await axios.get(
        `https://official-joke-api.appspot.com/random_joke`
      );
      const result = response.data;
      console.log(result);
      res.render("summa.ejs", {
        data: result[Math.floor(Math.random() * result.length)],
      });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("summa.ejs", {
        error: "No activities that match your criteria.",
      });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
*/

app.get("/", async (req, res) => {
    try {
      const ini = "Click the button for RANDOM-JOKE !";
      /*console.log(req.body);
      const response = await axios.get(
        `https://official-joke-api.appspot.com/random_joke`
      );
      const result = response.data;
      console.log(result);*/
      res.render("summa.ejs", {
        ini:ini //result[Math.floor(Math.random() * result.length)],
      });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("summa.ejs", {
        error: "No activities that match your criteria.",
      });
    }
  });
  
app.post("/submit",async (req, res)=>{
  try {
    console.log(req.body);
    const response = await axios.get(
      `https://official-joke-api.appspot.com/random_joke`
    );
    const result = response.data;
    console.log(result);
    res.render("summa.ejs", {
      data: result //result[Math.floor(Math.random() * result.length)],
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("summa.ejs", {
      error: "No activities that match your criteria.",
    });
  }
});
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });