if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const port = 2001;

app.use(express.static("public"));

//get the dinosaur names.
app.get("/dinoname", async (req, res) => {
  try {
    const response = await fetch(
      "https://dinoipsum.com/api/?format=json&words=2&paragraphs=1"
    );
    const dinoData = await response.json();
    console.log(dinoData);
    res.json(dinoData);
  } catch (err) {
    console.log(err);
  }
});

//get the dinosaur images.
app.get("/dinoimages", async (req, res) => {
  try {
    const response = await fetch(
      "https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=10",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.API_KEY,
          "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
        },
      }
    );
    const dinoImages = await response.json();
    res.json(dinoImages);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
