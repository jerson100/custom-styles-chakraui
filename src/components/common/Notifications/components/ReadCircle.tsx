import { Box } from "@chakra-ui/react";

interface ReadCircleProps {
  read: boolean;
}

const ReadCircle = ({ read }: ReadCircleProps) => {
  return (
    <>
      {!read && (
        <Box
          display={"inline-flex"}
          borderRadius={"900"}
          ml={1.5}
          bg={"red.custom"}
          w={2.5}
          h={2.5}
        ></Box>
      )}
    </>
  );
};

export default ReadCircle;
