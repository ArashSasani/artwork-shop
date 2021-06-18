import React, { useState } from "react";
import { Box, Stack, Link } from "@chakra-ui/react";
import { H4 } from "./Heading";
import range from "lodash.range";

const PagedList = ({ pagesCount, selectedPage = 1, onPageSelect }) => {
  const [page, setPage] = useState(selectedPage);
  const pages = range(1, pagesCount + 1);

  const raisePageSelect = (pageNum) => {
    setPage(pageNum);
    onPageSelect(pageNum);
  };

  return (
    <Stack direction={["row"]} spacing="24px">
      {pages.map((p) => {
        return (
          <Link key={p} onClick={() => raisePageSelect(p)}>
            <Box w="40px" h="40px">
              <H4 color={p === page ? "Black" : "Gray"}>{p}</H4>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
};

export default PagedList;
