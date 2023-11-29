import { Avatar, Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

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
    <>
      {to ? (
        <Link
          display={"block"}
          href={to}
          p={4}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Flex gap={4}>
            <Avatar src={image} size="md" />
            <Box>{children}</Box>
          </Flex>
        </Link>
      ) : (
        <Flex gap={4} p={4}>
          <Avatar src={image} size="md" />
          <Box>{children}</Box>
        </Flex>
      )}
    </>
  );
};

export default NotificationWrapper;
