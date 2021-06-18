import styled from "@emotion/styled";
import { Colors } from "../styles/colors";

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  color: ${(props) => Colors.Sample[props.color]};};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 17px;
  color: ${(props) => Colors.Sample[props.color]};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  text-align: ${(props) => props.textAlign};
`;
