import { Box, ListItem } from "@chakra-ui/react";
import { FC } from "react";
import {
  GroupType as groupType,
  Notification,
  comment,
  followed,
  reaction,
  sendMessage,
} from "../../../../types/notification";
import SendMessageType from "./SendMessageType";
import CommentType from "./CommentType";
import ReactionType from "./ReactionType";
import FollowedType from "./FollowedType";
import GroupType from "./GroupType";

const NotificationItem: FC<Notification> = ({
  id,
  createdAt,
  type,
  read,
  ...props
}) => {
  return (
    <ListItem>
      <Box
        _hover={{ bg: "veryLightGrayishBlue" }}
        bg={!read ? "veryLightGrayishBlue" : ""}
      >
        {type === "send-message" && (
          <SendMessageType
            id={id}
            createdAt={createdAt}
            sendMessage={props as sendMessage}
            read={read}
          />
        )}
        {type === "comment" && (
          <CommentType
            id={id}
            createdAt={createdAt}
            data={props as comment}
            read={read}
          />
        )}
        {type === "reaction" && (
          <ReactionType
            id={id}
            createdAt={createdAt}
            reaction={props as reaction}
            read={read}
          />
        )}
        {type === "followed" && (
          <FollowedType
            id={id}
            createdAt={createdAt}
            followed={props as followed}
            read={read}
          />
        )}
        {(type === "join-group" || type === "left-group") && (
          <GroupType
            id={id}
            createdAt={createdAt}
            groupType={{
              ...(props as groupType),
              type: type,
            }}
            read={read}
          />
        )}
      </Box>
    </ListItem>
  );
};

export default NotificationItem;
