import React from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "./../../components/Navbar";
import FeaturedProduct from "../../components/Product/FeaturedProduct";
import Products from "../../components/Product/Products";

const Home = () => {
  return (
    <Flex w={["90%", "70%"]} m="auto" flexDir="column">
      <Navbar />
      <FeaturedProduct />
      <Products />
    </Flex>
  );
};

export default Home;
