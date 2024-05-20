import express from "express";
import bodyParser from "body-parser";
import lazadaRoutes from "./routes/lazadaRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", lazadaRoutes);

app.get("/", (req, res) => {
  res.send("Lazada is OK. Status: 200!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
