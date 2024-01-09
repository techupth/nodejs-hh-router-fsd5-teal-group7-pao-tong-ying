import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});

//import router
import assignmentRouter from "./apps/assignments.js";
import accountRouter from "./apps/accounts.js";

//assignmentRouter
app.use("/assignments", assignmentRouter);

//accountRouter
app.use("/accounts", accountRouter);


app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
