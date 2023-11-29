import { Avatar, Flex, ListItem } from "@chakra-ui/react";
import NotificationData from "./NotificationData";
import { FC } from "react";
import { Notification } from "../../../../types/notification";

const NotificationItem: FC<Notification> = ({
  id,
  createdAt,
  type,
  ...props
}) => {
  return (
    <ListItem>
      <Flex gap={4} p={4} bg={"veryLightGrayishBlue"}>
        {/* {
            type === "send-message" ? {}
        } */}
        {/* <Avatar src={user?.avatar} size="md" /> */}
        <NotificationData />
      </Flex>
    </ListItem>
  );
};

export default NotificationItem;
