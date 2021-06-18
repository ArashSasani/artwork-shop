import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Stack,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { H5 } from "../Heading";
import { Colors } from "./../../styles/colors";

import http from "../../services/httpService";
import config from "../../config.json";
import Category from "./../../models/Category/Category";

const CategoryList = ({ onCategoryFilter, onPriceFilter }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const { data: result } = await http.get(`${config.apiEndpoint}/categories`);
    const categoryList = result.map((item) => {
      return new Category(item);
    });
    setCategories(categoryList);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Flex display={{ base: "none", md: "block" }} flex={0.5}>
      <Flex flexDirection="column">
        <H5 mb="20px">Category</H5>
        <CheckboxGroup
          colorScheme="blackAlpha"
          defaultValue={[]}
          onChange={(state) => onCategoryFilter(state)}
        >
          <VStack spacing={4} direction="column" hasborder={true}>
            {categories.map((item) => {
              return (
                <Checkbox key={item.id} value={item.name}>
                  {item.name}
                </Checkbox>
              );
            })}
          </VStack>
        </CheckboxGroup>
        <Box>
          <H5 mb="20px">Price Range</H5>
          <RadioGroup
            colorScheme="blackAlpha"
            defaultValue="4"
            onChange={(state) => onPriceFilter(state)}
          >
            <Stack direction="row">
              <VStack spacing={4} direction="column">
                <Radio value="0">Lower than 20$</Radio>
                <Radio value="1">20$ - 100$</Radio>
                <Radio value="2">100$ - 200$</Radio>
                <Radio value="3">More than 200$</Radio>
                <Radio value="4">All</Radio>
              </VStack>
            </Stack>
          </RadioGroup>
        </Box>
      </Flex>
    </Flex>
  );
};

const VStack = styled(Stack)`
  border-bottom: ${(props) =>
    props.hasborder && `2px solid ${Colors.Sample.LightGray}`};
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  padding-bottom: 20px;
`;
VStack.defaultProps = {
  hasborder: false,
};

export default CategoryList;
