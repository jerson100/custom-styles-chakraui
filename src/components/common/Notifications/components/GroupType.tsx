import { useMemo } from "react";
import { Link } from "@chakra-ui/react";
import NotificationWrapper from "./NotificationWrapper";
import {
  GroupType as grouptype,
  Notification,
} from "../../../../types/notification";

type GroupTypeProps = Omit<Notification, "type"> & {
  groupType: grouptype;
};

const GroupType = ({ id, read, createdAt, groupType }: GroupTypeProps) => {
  const description = useMemo(() => {
    return groupType.type === "join-group" ? "has joined your" : "left the";
  }, [groupType.type]);
  return (
    <NotificationWrapper to={id} image={groupType.user.avatar}>
      <NotificationWrapper.Header
        read={read}
        userId={groupType.user.id}
        userName={groupType.user.name}
      >
        {description} group{" "}
        <Link
          fontWeight={"bold"}
          href={`/group/${groupType.group.id}`}
          color={"blue.custom"}
        >
          {groupType.group.name}
        </Link>
      </NotificationWrapper.Header>
      <NotificationWrapper.Date createdAt={createdAt} />
    </NotificationWrapper>
  );
};

export default GroupType;
