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

const Rsvp = mongoose.models.Rsvp || mongoose.model("Rsvp", rsvpSchema);

export default Rsvp;
