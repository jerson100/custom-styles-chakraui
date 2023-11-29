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
      <Text as={"p"}>
        <Link
          href={`
            /profile/${sendMessage.message.user.id}`}
          _hover={{ color: "blue.custom" }}
          as="span"
          mr={1}
          fontWeight={"bold"}
        >
          {sendMessage.message.user.name}
        </Link>
        send you private message
        <ReadCircle read={read} />
      </Text>
      <Text as="p" color="grayishBlue" mb={1}>
        {formatDate(createdAt)}
      </Text>
      <Box
        border={"solid"}
        p={4}
        borderRadius={"lg"}
        borderWidth={1}
        //   _hover={{
        //     bg: "veryLightGrayishBlue1",
        //   }}
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
