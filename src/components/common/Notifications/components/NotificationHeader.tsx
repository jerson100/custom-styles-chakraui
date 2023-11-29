import { Flex, Heading, Text } from "@chakra-ui/react";

interface NotificationHeaderProps {
  handleMarkAll: () => void;
  numberOfUnRead: number;
}

const NotificationHeader = ({
  handleMarkAll,
  numberOfUnRead,
}: NotificationHeaderProps) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      <Flex gap={3} alignItems={"center"}>
        <Heading fontSize="heading1" as={"h1"}>
          Notifications
        </Heading>
        <Flex
          bg={"blue.custom"}
          py={0.5}
          px={3.5}
          color={"white.custom"}
          //   fontSize={
          //     "clamp(1rem, 0.9711538461538461rem + 0.1282051282051282vw, 1.125rem);"
          //   }
          borderRadius={"lg"}
          alignItems={"center"}
          fontWeight={"bold"}
        >
          {numberOfUnRead}
        </Flex>
      </Flex>
      <Text
        // fontSize={"heading1"}
        fontSize={{
          base: "sm",
          lg: "md",
        }}
        color={"darkGrayishBlue"}
        cursor={"pointer"}
        onClick={handleMarkAll}
        _hover={{
          color: "blue.custom",
          //   fontWeight: "bold",
        }}
      >
        Mark all as read
      </Text>
    </Flex>
  );
};

export default NotificationHeader;
