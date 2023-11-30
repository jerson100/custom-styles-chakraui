import { Notification, followed } from "../../../../types/notification";
import NotificationWrapper from "./NotificationWrapper";

type FollowedTypeProps = Omit<Notification, "type"> & {
  followed: followed;
};

const FollowedType = ({ id, followed, read, createdAt }: FollowedTypeProps) => {
  return (
    <NotificationWrapper to={id} image={followed.user.avatar}>
      <NotificationWrapper.Header
        read={read}
        userId={followed.user.id}
        userName={followed.user.name}
      >
        followed you
      </NotificationWrapper.Header>
      <NotificationWrapper.Date createdAt={createdAt} />
    </NotificationWrapper>
  );
};

export default FollowedType;
