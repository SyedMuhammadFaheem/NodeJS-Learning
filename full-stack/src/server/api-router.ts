import express from "express";
import data from "../data.json";
import cors from "cors";

const router = express.Router();
router.use(cors());
router.get("/contests", (req, res) => {
  res.send({contests: data});
});

export default router;
