import { Router } from "express";
const accountRouter = Router();

accountRouter.get("/accounts", function (req, res) {
  res.send("View all accounts");
});

accountRouter.get("/accounts/:id", function (req, res) {
  res.send("View an account by id");
});

accountRouter.post("/accounts", function (req, res) {
  res.send("Create an account");
});

accountRouter.put("/accounts/:id", function (req, res) {
  res.send("Update an account by id");
});

accountRouter.delete("/accounts/:id", function (req, res) {
  res.send("Delete an account by id");
});
export default accountRouter
