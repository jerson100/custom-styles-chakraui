import { Notification, comment } from "../../../../types/notification";
import NotificationWrapper from "./NotificationWrapper";

type CommentTypeProps = Omit<Notification, "type"> & {
  data: comment;
};

const CommentType = ({
  id,
  data: { comment },
  createdAt,
  read,
}: CommentTypeProps) => {
  return (
    <NotificationWrapper to={id} image={comment.user.avatar}>
      <NotificationWrapper.Header
        read={read}
        userId={comment.user.id}
        userName={comment.user.name}
      >
        commented on your post
      </NotificationWrapper.Header>
      <NotificationWrapper.Date createdAt={createdAt} />
    </NotificationWrapper>
  );
};

export default CommentType;
