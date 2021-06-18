import React from "react";
import { Image } from "@chakra-ui/react";

import _Logo from "./logo.svg";
import Cart from "./cart.svg";
import ArrowUp from "./arrow-up.svg";
import ArrowDown from "./arrow-down.svg";
import Filter from "./filter.svg";

export const Logo = ({ ...props }) => (
  <Image src={_Logo} alt="logo" width={24} {...props} />
);

export const CartIcon = ({ ...props }) => (
  <Image src={Cart} alt="shopping cart" w={8} height={8} {...props} />
);

export const ArrowUpIcon = ({ ...props }) => (
  <Image src={ArrowUp} alt="" w={5} height={5} {...props} />
);

export const ArrowDownIcon = ({ ...props }) => (
  <Image src={ArrowDown} alt="" w={5} height={5} {...props} />
);

export const FilterIcon = ({ ...props }) => (
  <Image src={Filter} alt="" w={8} height={8} {...props} />
);
