import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import ReadCircle from "./ReadCircle";
import { formatDate } from "../../../../utils/date";

interface NotificationWrapperProps {
  image: string;
  children: React.ReactNode;
  to?: string;
}

const NotificationWrapper = ({
  to,
  image,
  children,
}: NotificationWrapperProps) => {
  return (
    <Flex
      gap={4}
      p={4}
      cursor={to ? "pointer" : "default"}
      onClick={() => {
        if (to) window.location.href = to;
      }}
    >
      <Avatar src={image} size="md" />
      <Box>{children}</Box>
    </Flex>
  );
};

const NotificationDate = ({ createdAt }: { createdAt: string }) => {
  return (
    <Text
      as="p"
      fontSize={{
        base: "sm",
        lg: "md",
      }}
      color="grayishBlue"
    >
      {formatDate(createdAt)}
    </Text>
  );
};

interface HeaderProps {
  read: boolean;
  userId: string;
  userName: string;
  children: React.ReactNode;
}

const Header = ({ read, userId, userName, children }: HeaderProps) => {
  return (
    <Text
      as={"p"}
      fontSize={{
        base: "15px",
        lg: "md",
      }}
    >
      <Link
        href={`
        /profile/${userId}`}
        _hover={{ color: "blue.custom" }}
        as="a"
        mr={1}
        fontWeight={"bold"}
      >
        {userName}
      </Link>
      {children}
      <ReadCircle read={read} />
    </Text>
  );
};

interface HeaderDescriptionProps {
  children: React.ReactNode | string | React.ReactNode[];
}

const HeaderDescription = ({ children }: HeaderDescriptionProps) => {
  if (typeof children === "string") {
    return (
      <Text as="span" color="grayishBlue" ml={1}>
        {children}
      </Text>
    );
  }
  return <>{children}</>;
};

NotificationWrapper.Header = Header;
NotificationWrapper.HeaderDescription = HeaderDescription;
NotificationWrapper.Date = NotificationDate;

export default NotificationWrapper;
