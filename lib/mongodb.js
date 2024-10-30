import { MONGODB_URI } from "@/_customGlobals";
import mongoose from "mongoose";

global.mongoose = {
  conn: null,
  promise: null,
};

const connectMongoDB = async () => {
  if (global.mongoose && global.mongoose.conn) {
    console.log("connected from previous");
    return global.mongoose.conn;
  }

  try {
    const promise = mongoose.connect(MONGODB_URI, { autoIndex: true });

    global.mongoose = {
      conn: await promise,
      promise,
    };
    console.log("newly connected");
    return await promise;
  } catch (e) {
    console.log(e);
  }
};

export default connectMongoDB;
