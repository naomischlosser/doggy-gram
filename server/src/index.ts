import express, { Request, Response, Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 3000;

// body parser middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// home route that returns an object when fetches
app.get("/", (req: Request, res: Response): void => {
  res.json({
    greeting: "Welcome to DoggyGram!"
  });
});

app.listen(PORT, (): void => {
  console.log(`Server running here http://localhost:${PORT}`);
});
