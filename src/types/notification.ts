import { User } from "./user";

export type Post = {
  id: string;
  description: string;
  user: User;
  createdAt: string;
};

export type Group = {
  id: string;
  name: string;
  avatar: string;
};

export type Message = {
  id: string;
  message: string;
  user: User;
  group: Group;
  createdAt: string;
};

export type reaction = {
  type: "reaction";
  post: Post;
  user: User;
};

export type followed = {
  type: "followed";
  user: User;
};

export type GroupType = {
  type: "left-group" | "join-group";
  group: Group;
  user: User;
};

export type sendMessage = {
  type: "send-message";
  message: Message;
};

export type comment = {
  type: "comment";
  comment: {
    user: User;
    post: Post;
    description: string;
  };
};

export type Notification = {
  id: string;
  type:
    | "reaction"
    | "followed"
    | "join-group"
    | "left-group"
    | "send-message"
    | "comment";
  createdAt: string;
  read: boolean;
} & (reaction | followed | GroupType | sendMessage | comment);
