import { List } from "@chakra-ui/react";
import NotificationItem from "./NotificationItem";
import { Notification } from "../../../../types/notification";

interface NotificationsListProps {
  notifications: Notification[];
}

const NotificationList = ({ notifications }: NotificationsListProps) => {
  return (
    <List spacing={4}>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} {...notification} />
      ))}
    </List>
  );
};

export default NotificationList;
