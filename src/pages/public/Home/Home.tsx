import { Container, Flex } from "@chakra-ui/react";
import Notifications from "../../../components/common/Notifications";

const Home = () => {
  return (
    <Flex
      minH={"100vh"}
      bg={"veryLightGrayishBlue"}
      py={{
        lg: 8,
      }}
      borderRadius={"md"}
      alignItems={"center"}
    >
      <Container
        p={{ base: 4, lg: 8 }}
        maxW={"3xl"}
        backgroundColor={"white.custom"}
      >
        <Notifications />
      </Container>
    </Flex>
  );
};

export default Home;
