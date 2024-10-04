import mongoose from "mongoose";

const Schema = mongoose.Schema;

const notice = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const notices = mongoose.model("Notices", notice);
