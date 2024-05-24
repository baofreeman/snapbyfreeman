import mongoose, { Model, Types } from "mongoose";

export interface IChat {
  participants: Types.ObjectId[];
  messages: Types.ObjectId[];
}
export interface IChatDocument extends IChat {
  created: Date;
  updated: Date;
  save(): void;
}

const chatSchema = new mongoose.Schema<IChatDocument>(
  {
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  },
  {
    timestamps: true,
  }
);

const Chat: Model<IChatDocument> =
  mongoose.models?.Chat || mongoose.model("Chat", chatSchema);

export default Chat;
