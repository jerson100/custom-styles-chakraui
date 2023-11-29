import { Notification, followed } from "../../../../types/notification";
import NotificationWrapper from "./NotificationWrapper";
import { Box, Link, Text } from "@chakra-ui/react";
import ReadCircle from "./ReadCircle";
import { formatDate } from "../../../../utils/date";

type FollowedTypeProps = Omit<Notification, "type"> & {
  followed: followed;
};

const FollowedType = ({ id, followed, read, createdAt }: FollowedTypeProps) => {
  return (
    <NotificationWrapper to={id} image={followed.user.avatar}>
      <Box>
        <Text as={"p"}>
          <Link
            href={`
            /profile/${followed.user.id}`}
            _hover={{ color: "blue.custom" }}
            fontWeight={"bold"}
            mr={1}
          >
            {followed.user.name}
          </Link>
          followed you
          <ReadCircle read={read} />
        </Text>
        <Text as="p" color="grayishBlue">
          {formatDate(createdAt)}
        </Text>
      </Box>
    </NotificationWrapper>
  );
};

export default FollowedType;
