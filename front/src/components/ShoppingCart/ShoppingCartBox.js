import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { H6, H4 } from "../Heading";
import { GenericButton as Button } from "./../Button";

const ShoppingCartBox = (props) => {
  return (
    <Flex flexDirection="column" border="1px solid black" bg="white" {...props}>
      <Flex borderBottom="1px solid black">
        <Flex flexDirection="column" flex="1" p="20px">
          <H6>Samurai King Resting</H6>
          <H4 mt="10px" color="DarkGray">
            $1000.00
          </H4>
        </Flex>
        <Flex flex="1" p="20px">
          <Image
            w="100%"
            src="https://picsum.photos/100/60"
            alt="featured product"
          />
        </Flex>
      </Flex>
      <Flex justifyContent="center">
        <Button variant="outline" w="100%" m="10px">
          Clear
        </Button>
      </Flex>
    </Flex>
  );
};

export default ShoppingCartBox;
