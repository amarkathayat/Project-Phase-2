const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;


app.use(cors());       
app.use(express.json());   


const newsletterSubscribers = [];
const interests = [];


app.get("/", (req, res) => {
  res.send("API is running");
});


app.post("/api/newsletter", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  newsletterSubscribers.push({
    email,
    subscribedAt: new Date().toISOString(),
  });

  console.log("New newsletter signup:", email);

  res.json({ message: "Subscribed successfully" });
});


app.post("/api/get-involved", (req, res) => {
  const { name, email, area, message } = req.body;

  if (!name || !email || !area) {
    return res.status(400).json({ message: "Name, email and area are required" });
  }

  interests.push({
    name,
    email,
    area,
    message: message || "",
    submittedAt: new Date().toISOString(),
  });

  console.log("New interest submission:", name, email, area);

  res.json({ message: "Interest recorded successfully" });
});


app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});
