import { Link } from "@chakra-ui/react";
import NotificationWrapper from "./NotificationWrapper";
import { reaction, Notification } from "../../../../types/notification";

type ReactionTypeProps = Omit<Notification, "type"> & {
  reaction: reaction;
};

const ReactionType = ({ id, createdAt, reaction, read }: ReactionTypeProps) => {
  return (
    <NotificationWrapper to={id} image={reaction.user.avatar}>
      <NotificationWrapper.Header
        read={read}
        userId={reaction.user.id}
        userName={reaction.user.name}
      >
        reacted to your recent post{" "}
        <Link href="/post/1" fontWeight={"bold"} color={"blue.custom"}>
          {reaction.post.description}
        </Link>
      </NotificationWrapper.Header>
      <NotificationWrapper.Date createdAt={createdAt} />
    </NotificationWrapper>
  );
};

export default ReactionType;
