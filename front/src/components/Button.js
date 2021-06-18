import { Button as _Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Colors } from "../styles/colors";

export const GenericButton = styled(_Button)`
  font-size: 23px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0.07em;
  padding: 0 30px;
  border: 1px solid ${Colors.Sample.Black};
  border-radius: 0;
  color: ${(props) =>
    props.variant === "outline" ? Colors.Sample.Black : Colors.Sample.White};
  background: ${(props) =>
    props.variant === "outline" ? Colors.Sample.White : Colors.Sample.Black};

  &:focus {
    outline: 0;
    box-shadow: none;
  }
  &:hover,
  &:active {
    background: ${(props) =>
      props.variant === "outline" ? Colors.Sample.Black : Colors.Sample.White};
    color: ${(props) =>
      props.variant === "outline" ? Colors.Sample.White : Colors.Sample.Black};
  }
`;

export default GenericButton;
