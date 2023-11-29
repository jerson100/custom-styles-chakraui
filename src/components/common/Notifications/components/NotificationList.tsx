import { List } from "@chakra-ui/react";
import NotificationItem from "./NotificationItem";
import { Group, Notification } from "../../../../types/notification";
import { User } from "../../../../types/user";

const current_user: User = {
  id: "1",
  name: "Jerson Omar",
  avatar: "https://bit.ly/dan-abramov",
};

const groups: Group[] = [
  {
    id: "1",
    name: "Chess Club",
    avatar: "https://bit.ly/dan-abramov",
  },
];

const users: User[] = [
  {
    //creame ussuarios con distintos nombres
    id: "1",
    name: "Mark Webber",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: "2",
    name: "Angela Gray",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: "3",
    name: "Jacob Thompson",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: "4",
    name: "Risky Hasanuddin",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: "5",
    name: "Kimberly Smith",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: "6",
    name: "Nathan Peterson",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: "7",
    name: "Anna Kim",
    avatar: "https://bit.ly/dan-abramov",
  },
];

const notifications: Notification[] = [
  {
    id: "1",
    createdAt: "2021-07-12T09:54:11.000Z",
    type: "reaction",
    user: users[0],
    post: {
      id: "1",
      description: "My first tourment today!",
      user: current_user,
      createdAt: "2021-07-12T09:54:11.000Z",
    },
    read: false,
  },
  {
    id: "2",
    createdAt: "2021-07-12T09:54:11.000Z",
    type: "followed",
    read: false,
    user: users[1],
  },
  {
    id: "3",
    createdAt: "2021-07-12T09:54:11.000Z",
    type: "join-group",
    group: groups[0],
    user: users[2],
    read: false,
  },
  {
    id: "4",
    createdAt: "2021-07-12T09:54:11.000Z",
    type: "send-message",
    message: {
      id: "1",
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
      user: users[3],
      group: groups[0],
      createdAt: "2021-07-12T09:54:11.000Z",
    },
    read: true,
  },
  {
    id: "5",
    createdAt: "2021-07-12T09:54:11.000Z",
    type: "comment",
    post: {
      id: "1",
      user: current_user,
      description: "My first tourment today!",
      createdAt: "2021-07-12T09:54:11.000Z",
    },
    user: users[4],
    read: true,
  },
  {
    id: "6",
    createdAt: "2021-07-12T09:54:11.000Z",
    type: "reaction",
    user: users[5],
    post: {
      id: "2",
      description: "5 end game strategies to increase your win rate",
      user: current_user,
      createdAt: "2021-07-12T09:54:11.000Z",
    },
    read: true,
  },
  {
    id: "7",
    createdAt: "2021-07-12T09:54:11.000Z",
    type: "left-group",
    group: groups[0],
    user: users[6],
    read: true,
  },
];

const NotificationList = () => {
  return (
    <List spacing={4}>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} {...notification} />
      ))}
    </List>
  );
};

export default NotificationList;
