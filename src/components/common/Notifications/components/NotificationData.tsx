import { Box, Heading } from "@chakra-ui/react";

const NotificationData = () => {
  return (
    <div>
      <Heading as={"h2"} size={"sm"}>
        <Box as="span" fontWeight={"800"}>
          Jerson Omar
        </Box>
        <Box as="span" ml={1} fontWeight={"400"}>
          reacted to your recent post My first tourment today!
        </Box>
      </Heading>
    </div>
  );
};

export default NotificationData;
