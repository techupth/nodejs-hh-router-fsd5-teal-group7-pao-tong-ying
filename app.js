import express from "express";
import bodyParser from "body-parser";

import assignmentsRouter from "./app/assignmentRouter.js";
import accountRouter from "./app/accountRouter.js";



const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/assignments", assignmentsRouter)

app.use("/accounts", accountRouter);

app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});


app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
