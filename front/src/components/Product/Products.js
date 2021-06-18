import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Link,
  Select,
  Breadcrumb,
  BreadcrumbItem,
  Center,
} from "@chakra-ui/react";
import Section from "../Section";
import { H3, H4, H5 } from "../Heading";
import CategoryList from "./../Category/CategoryList";
import ProductList from "./ProductList";
import { ArrowDownIcon, ArrowUpIcon, FilterIcon } from "../../assets";

import http from "../../services/httpService";
import config from "../../config.json";
import Product from "./../../models/Product/Product";

const Products = () => {
  const [productsItems, setProductItems] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(null);
  const [sortItem, setSortItem] = useState();
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  const pageSize = 6;

  const getProductsCount = async () => {
    const url = getUrl("products/count");
    const { data: result } = await http.get(url);
    setPagesCount(Math.ceil(result.totalCount / pageSize));
  };

  const getProducts = async () => {
    const url = getUrl("products");
    const { data: result } = await http.get(url);
    const productList = result.map((item) => {
      return new Product(item);
    });
    setLoading(false);
    setProductItems(productList);
  };

  const getUrl = (routePrefix) => {
    let url = `${config.apiEndpoint}/${routePrefix}/?page=${page}`;
    if (categories) {
      url += `&categories=${categories}`;
    }
    if (price) {
      url += `&price=${price}`;
    }
    if (sortItem) {
      url += `&sortItem=${sortItem}`;
    }
    if (sortItem && sortOrder) {
      url += `&sortOrder=${sortOrder}`;
    }
    //generated url
    console.log(url);
    return url;
  };

  const toggleSortOrder = () => {
    const order = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(order);
  };

  useEffect(() => {
    getProducts(1);
    getProductsCount();
  }, []);

  useEffect(() => {
    getProducts(page, categories, price, sortItem, sortOrder);
    getProductsCount();
  }, [page, categories, price, sortItem, sortOrder]);

  if (loading) {
    return (
      <Center>
        <H3>...Loading</H3>
      </Center>
    );
  }

  return (
    <Section flexDirection="column">
      <Flex>
        <Flex flex="1">
          <Breadcrumb>
            <BreadcrumbItem>
              <H4>Photography</H4>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <H4 fontWeight={400} color="Gray">
                Premium Photos
              </H4>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        <Flex flex="1" justifyContent="flex-end">
          <Link
            d={["none", "flex"]}
            alignItems="center"
            onClick={toggleSortOrder}
          >
            <Box d="flex" flexDirection={["column", "column", "row"]} mr="20px">
              <Box d="flex" flexDirection="row">
                <ArrowUpIcon position="relative" left={["5px"]} />
                <ArrowDownIcon position="relative" right={["5px"]} />
              </Box>
              <H5 color="Gray" fontWeight={400}>
                Sort by
              </H5>
            </Box>
          </Link>
          <Link d={["none", "flex"]} alignItems="center">
            <Select
              placeholder="Sort item"
              onChange={(e) => setSortItem(e.target.value)}
            >
              <option value="0">Alphabetically</option>
              <option value="1">price</option>
            </Select>
          </Link>
          <Link d={["block", "none"]}>
            <FilterIcon />
          </Link>
        </Flex>
      </Flex>
      <Flex mt="20px">
        <CategoryList
          onCategoryFilter={(selected) => setCategories(selected)}
          onPriceFilter={(selected) => setPrice(selected)}
        />
        <ProductList
          products={productsItems}
          pagesCount={pagesCount}
          onPageSelect={(selected) => setPage(selected)}
        />
      </Flex>
    </Section>
  );
};

export default Products;
