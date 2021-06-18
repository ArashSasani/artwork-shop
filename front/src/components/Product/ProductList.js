import React from "react";
import { Flex, Box, Image, SimpleGrid, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { H2, H4, H5, H6 } from "../Heading";
import { Colors } from "../../styles/colors";
import PagedList from "../PagedList";

const ProductBox = (props) => {
  let { bestseller, category, name, price, currency } = props.product;

  return (
    <HoverFlex flexDirection="column">
      <Box pos="relative">
        <Image
          w="100%"
          src="https://picsum.photos/150/200"
          alt="featured product"
        />
        {bestseller && (
          <Flex
            h="40px"
            pos="absolute"
            top="0"
            bg="white"
            padding="10px"
            justifyContent="center"
            alignItems="center"
          >
            <H6 fontWeight={400}>Best seller</H6>
          </Flex>
        )}
        <Flex
          display="none"
          w="100%"
          h="40px"
          pos="absolute"
          bottom="0"
          justifyContent="center"
          alignItems="center"
          background={Colors.Sample.Black}
        >
          <Link>
            <H5 color="White" fontWeight={500}>
              Add to cart
            </H5>
          </Link>
        </Flex>
      </Box>
      {category && (
        <H5 color="DarkGray" mt="10px">
          {category.name}
        </H5>
      )}
      <H2 mt="5px">{name}</H2>
      <H4 color="DarkGray" mt="5px">
        {currency} {price}
      </H4>
    </HoverFlex>
  );
};

const ProductList = ({ products, pagesCount, onPageSelect }) => {
  return (
    <Flex flex={2} flexDirection="column" justifyContent="center">
      <Box m={[0, "10px"]} width="100%">
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10} width="100%">
          {products.map((item) => {
            return <ProductBox key={item.id} product={item} />;
          })}
        </SimpleGrid>
      </Box>
      <Flex justifyContent="center" alignItems="center" mt="40px">
        <PagedList pagesCount={pagesCount} onPageSelect={onPageSelect} />
      </Flex>
    </Flex>
  );
};

const HoverFlex = styled(Flex)`
  &:hover {
    & > div > img + div {
      display: flex;
    }
    & > div > img + div + div {
      display: flex;
    }
  }
`;

export default ProductList;
