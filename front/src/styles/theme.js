import { extendTheme } from "@chakra-ui/react";
import { Colors } from "./colors";
import { Typo } from "./typography";

export default extendTheme({
  fonts: {
    ...Typo,
  },
  Colors: {
    ...Colors,
  },
});
