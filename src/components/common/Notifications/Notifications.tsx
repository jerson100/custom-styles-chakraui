import { useState, useMemo } from "react";
import { Flex } from "@chakra-ui/react";
import NotificationHeader from "./components/NotificationHeader";
import NotificationList from "./components/NotificationList";

import { Group, Notification } from "../../../types/notification";
import { User } from "../../../types/user";
import us2 from "../../../assets/images/avatar-angela-gray.webp";
import us7 from "../../../assets/images/avatar-anna-kim.webp";
import us3 from "../../../assets/images/avatar-jacob-thompson.webp";
import us5 from "../../../assets/images/avatar-kimberly-smith.webp";
import us1 from "../../../assets/images/avatar-mark-webber.webp";
import us6 from "../../../assets/images/avatar-nathan-peterson.webp";
import us4 from "../../../assets/images/avatar-rizky-hasanuddin.webp";

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
    avatar: us1,
  },
  {
    id: "2",
    name: "Angela Gray",
    avatar: us2,
  },
  {
    id: "3",
    name: "Jacob Thompson",
    avatar: us3,
  },
  {
    id: "4",
    name: "Risky Hasanuddin",
    avatar: us4,
  },
  {
    id: "5",
    name: "Kimberly Smith",
    avatar: us5,
  },
  {
    id: "6",
    name: "Nathan Peterson",
    avatar: us6,
  },
  {
    id: "7",
    name: "Anna Kim",
    avatar: us7,
  },
];

const _notifications: Notification[] = [
  {
    id: "1",
    //createdAt de ayer
    createdAt: "2023-11-11T09:54:11.000Z",
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
    createdAt: "2023-10-12T09:54:11.000Z",
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
    comment: {
      post: {
        id: "1",
        user: current_user,
        description: "My first tourment today!",
        createdAt: "2021-07-12T09:54:11.000Z",
      },
      user: users[4],
      description: "Good luck!",
    },
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

const Notifications = () => {
  const [notifications, setNotifications] = useState(_notifications);
  const handleMarkAll = () => {
    setNotifications((notifications) =>
      notifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };
  const numberOfUnRead = useMemo(() => {
    return notifications.filter(({ read }) => !read).length;
  }, [notifications]);
  return (
    <Flex gap={8} flexDir={"column"}>
      <NotificationHeader
        numberOfUnRead={numberOfUnRead}
        handleMarkAll={handleMarkAll}
      />
      <NotificationList notifications={notifications} />
    </Flex>
  );
};

export default Notifications;
