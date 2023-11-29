import { useMemo } from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import NotificationWrapper from "./NotificationWrapper";
import {
  GroupType as grouptype,
  Notification,
} from "../../../../types/notification";
import ReadCircle from "./ReadCircle";
import { formatDate } from "../../../../utils/date";

type GroupTypeProps = Omit<Notification, "type"> & {
  groupType: grouptype;
};

const GroupType = ({ id, read, createdAt, groupType }: GroupTypeProps) => {
  const description = useMemo(() => {
    return groupType.type === "join-group" ? "has joined your" : "left the";
  }, [groupType.type]);
  return (
    <NotificationWrapper to={id} image={groupType.user.avatar}>
      <Box>
        <Text as={"p"}>
          <Link
            href={`
            /profile/${groupType.user.id}`}
            _hover={{ color: "blue.custom" }}
            fontWeight={"bold"}
            mr={1}
          >
            {groupType.user.name}
          </Link>
          {description} group{" "}
          <Link
            fontWeight={"bold"}
            href={`/group/${groupType.group.id}`}
            color={"blue.custom"}
          >
            {groupType.group.name}
          </Link>
          <ReadCircle read={read} />
        </Text>
        <Text as="p" color="grayishBlue">
          {formatDate(createdAt)}
        </Text>
      </Box>
    </NotificationWrapper>
  );
};

export default GroupType;
