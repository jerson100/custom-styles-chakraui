import { ReactNode } from "react";
import { Box, Heading } from "@chakra-ui/react";

interface NotificationDataProps {
  name: string;
  children: ReactNode;
}

const NotificationData = ({ name, children }: NotificationDataProps) => {
  return (
    <div>
      <Heading as={"h2"} size={"sm"}>
        <Box as="span" fontWeight={"800"}>
          {name}
        </Box>
        {children}
      </Heading>
    </div>
  );
};

export default NotificationData;
