import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { Logo, CartIcon } from "../assets";
import Section from "./Section";
import ShoppingCartBox from "./ShoppingCart/ShoppingCartBox";

const Navbar = () => {
  return (
    <Section hasborder={true}>
      <Flex flex="1">
        <Logo />
      </Flex>
      <Flex flex="1" justifyContent="flex-end">
        <Link>
          <CartIcon />
        </Link>
        <ShoppingCartBox
          position="absolute"
          top={["2%", "4%"]}
          zIndex={10}
          display="none"
        />
      </Flex>
    </Section>
  );
};

export default Navbar;
