import { Box, Flex, Heading } from "@chakra-ui/react";
import NotificationHeader from "./components/NotificationHeader";
import NotificationList from "./components/NotificationList";

const Notifications = () => {
  return (
    <Flex gap={4} flexDir={"column"}>
      <NotificationHeader />
      <NotificationList />
    </Flex>
  );
};

export default Notifications;
