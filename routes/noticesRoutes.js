import express from "express";
import { notices } from "../models/notices.model.js";

export const noticeRouter = express.Router();

noticeRouter.route("/").get((req, res) => {
  notices
    .find()
    .then((exes) => res.json(exes))
    .catch((err) => res.status(400).json("Error: " + err));
});

noticeRouter.route("/add").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const link = req.body.link;

  const newNotice = new notices({
    title,
    description,
    link,
  });

  newNotice
    .save()
    .then(() => res.json("Notice added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

noticeRouter.route("/:id").get((req, res) => {
  notices
    .findById(req.params.id)
    .then((exe) => res.json(exe))
    .catch((err) => res.status(400).json("Error :" + err));
});

noticeRouter.route("/update/:id").post((req, res) => {
  notices
    .findById(req.params.id)
    .then((exe) => {
      exe.title = req.body.title;
      exe.description = req.body.description;
      exe.link = req.body.link;

      exe
        .save()
        .then(() => res.json("Successfully updated"))
        .catch((err) => res.status(400).json("Err : " + err));
    })
    .catch((err) => res.status(400).json("Err : " + err));
});

noticeRouter.route("/:id").delete((req, res) => {
  notices
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Successfully deleted"))
    .catch((err) => res.status(400).json("Err : " + err));
});
