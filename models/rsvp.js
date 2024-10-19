import mongoose, { Schema } from "mongoose";

const rsvpSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    rsvp: Boolean,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Rsvp || mongoose.model("Rsvp", rsvpSchema);
