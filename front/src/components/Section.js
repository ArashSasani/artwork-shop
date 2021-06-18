import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Colors } from "../styles/colors";

const Section = styled(Flex)`
    display: flex;
    flex: ${(props) => props.flex}
    width: 100%;
    margin-top:20px;
    margin-bottom:20px;
    padding-bottom: 20px;
    justify-content='center';
    border-bottom: ${(props) =>
      props.hasborder && `2px solid ${Colors.Sample.LightGray}`};
`;

Section.defaultProps = {
  flex: 1,
  hasborder: false,
};

export default Section;
