import { Container, Flex } from "@chakra-ui/react";
import Notifications from "../../../components/common/Notifications";

const Home = () => {
  return (
    <Flex minH={"100vh"} bg={"veryLightGrayishBlue"} py={4} borderRadius={"md"}>
      <Container maxW={"xl"} backgroundColor={"white.custom"} py={4}>
        <Notifications />
      </Container>
    </Flex>
  );
};

export default Home;
