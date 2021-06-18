import React, { useEffect, useState } from "react";
import { Flex, Image, SimpleGrid, Center } from "@chakra-ui/react";
import Section from "../Section";
import { Paragraph, Text } from "../Paragraph";
import { H3, H5 } from "../Heading";
import { GenericButton as Button } from "../Button";
import Product from "../../models/Product/Product";

import http from "../../services/httpService";
import config from "../../config.json";

const FeaturedProduct = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const getFeaturedProduct = async () => {
    const { data: result } = await http.get(
      `${config.apiEndpoint}/products/featured`
    );
    const featured = new Product(result);
    setProduct(featured);
    setLoading(false);
  };

  useEffect(() => {
    getFeaturedProduct();
  }, []);

  if (loading) {
    return (
      <Center>
        <H3>Loading...</H3>
      </Center>
    );
  }

  return (
    <Section hasborder={true} flexDirection="column">
      <Flex w="100%">
        <Flex flex="1">
          <H3>{product.name}</H3>
        </Flex>
        <Flex display={["none", "flex"]} flex="1" justifyContent="flex-end">
          <Button>Add to cart</Button>
        </Flex>
      </Flex>
      <Flex w="100%" mt="30px" flexDirection="column">
        {product.image && (
          <Image w="100%" src={product.image.src} alt={product.image.alt} />
        )}
        <Flex
          display={["block", "none"]}
          flex="1"
          mt="20px"
          justifyContent="center"
        >
          <Button width="100%" h="50px">
            Add to cart
          </Button>
        </Flex>
      </Flex>
      <Flex my="30px" flexDirection={["column", "column", "column", "row"]}>
        <Flex flex="1" flexDirection="column">
          <H5 mb="5px">About the {product.name}</H5>
          {product.category && (
            <H5 color="DarkGray" mt="5px" mb="5px">
              {product.category.name}
            </H5>
          )}
          {product.details && (
            <Paragraph mt="5px" mb="5px" color="DarkGray">
              {product.details.description}
            </Paragraph>
          )}
        </Flex>
        <Flex
          flex="1"
          flexDirection="column"
          w="100%"
          mt={["20px", "20px", "20px", "0"]}
        >
          {product.details && product.details.recommendations && (
            <Flex flexDirection="column" textAlign={["left", "right"]}>
              <H5 mb="5px">People also buy</H5>
              <Flex justifyContent={["space-between", "flex-end"]} mt="10px">
                <SimpleGrid columns={3} spacing={5}>
                  {product.details.recommendations.map((img, index) => {
                    return (
                      <Image
                        key={`${img.alt}_${index}`}
                        src={img.src}
                        alt={img.alt}
                      />
                    );
                  })}
                </SimpleGrid>
              </Flex>
            </Flex>
          )}
          <Flex flexDirection="column" textAlign={["left", "right"]}>
            <H5 mt="25px" mb="5px">
              Details
            </H5>
            <Text mt="5px" mb="5px" color="DarkGray">
              Price: {product.price}
            </Text>
            <Text mt="5px" mb="5px" color="DarkGray">
              Currency: {product.currency}
            </Text>
            {product.details && product.details.dimension && (
              <Text mt="5px" mb="5px" color="DarkGray">
                Dimension: {product.details.dimension.width} {"*"}
                {product.details.dimension.height}
              </Text>
            )}
            {product.details && (
              <Text mt="5px" mb="5px" color="DarkGray">
                Size: {product.details.size}
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
};

export default FeaturedProduct;
