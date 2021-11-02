import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ messsage: "hello dev" });
});

export default routes;