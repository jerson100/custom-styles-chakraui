import { Notification, comment } from "../../../../types/notification";
import { Box, Link, Text } from "@chakra-ui/react";
import NotificationWrapper from "./NotificationWrapper";
import ReadCircle from "./ReadCircle";
import { formatDate } from "../../../../utils/date";

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
      <Text as={"p"}>
        <Link
          href={`
            /profile/${comment.user.id}`}
          _hover={{ color: "blue.custom" }}
          fontWeight={"bold"}
          mr={1}
        >
          {comment.user.name}
        </Link>
        commented on your post
        <ReadCircle read={read} />
      </Text>
      <Text as="p" color="grayishBlue">
        {formatDate(createdAt)}
      </Text>
    </NotificationWrapper>
  );
};

export default CommentType;
