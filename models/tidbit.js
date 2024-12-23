import mongoose, { Schema } from "mongoose";

const tidbitSchema = new Schema(
  {
    question: String,
    answer: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Tidbit || mongoose.model("Tidbit", tidbitSchema);
