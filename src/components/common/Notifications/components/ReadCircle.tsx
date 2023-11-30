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
          as={"span"}
          bg={"red.custom"}
          w={{
            base: 2,
            lg: 2.5,
          }}
          h={{
            base: 2,
            lg: 2.5,
          }}
        ></Box>
      )}
    </>
  );
};

export default ReadCircle;
