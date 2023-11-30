import { Box, Link, Text } from "@chakra-ui/react";
import NotificationWrapper from "./NotificationWrapper";
import { sendMessage, Notification } from "../../../../types/notification";
import ReadCircle from "./ReadCircle";
import { formatDate } from "../../../../utils/date";

type SendMessageTypeProps = Omit<Notification, "type"> & {
  sendMessage: sendMessage;
};

const SendMessageType = ({
  createdAt,
  read,
  id,
  sendMessage,
}: SendMessageTypeProps) => {
  return (
    <NotificationWrapper to={id} image={sendMessage.message.user.avatar}>
      <NotificationWrapper.Header
        read={read}
        userId={sendMessage.message.user.id}
        userName={sendMessage.message.user.name}
      >
        send you private message
      </NotificationWrapper.Header>
      <NotificationWrapper.Date createdAt={createdAt} />
      <Box
        border={"solid"}
        p={4}
        borderRadius={"lg"}
        borderWidth={1}
        mt={3}
        borderColor={"lightGrayishBlue1"}
      >
        <Text fontSize={{ base: "sm", lg: "md" }}>
          {sendMessage.message.message}
        </Text>
      </Box>
    </NotificationWrapper>
  );
};

export default SendMessageType;
