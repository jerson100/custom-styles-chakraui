import { Box, Link, Text } from "@chakra-ui/react";
import NotificationWrapper from "./NotificationWrapper";
import { reaction, Notification } from "../../../../types/notification";
import ReadCircle from "./ReadCircle";
import { formatDate } from "../../../../utils/date";

type ReactionTypeProps = Omit<Notification, "type"> & {
  reaction: reaction;
};

const ReactionType = ({ id, createdAt, reaction, read }: ReactionTypeProps) => {
  return (
    <NotificationWrapper to={id} image={reaction.user.avatar}>
      <Text as={"p"}>
        <Link
          href={`
            /profile/${reaction.user.id}`}
          _hover={{ color: "blue.custom" }}
          fontWeight={"bold"}
          mr={1}
        >
          {reaction.user.name}
        </Link>
        reaction on your post{" "}
        <Link href="/post/1" fontWeight={"bold"} color={"blue.custom"}>
          {reaction.post.description}
        </Link>
        <ReadCircle read={read} />
      </Text>
      <Text as="p" color="grayishBlue">
        {formatDate(createdAt)}
      </Text>
    </NotificationWrapper>
  );
};

export default ReactionType;
