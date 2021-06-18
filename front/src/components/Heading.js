import styled from "@emotion/styled";
import { Colors } from "../styles/colors";

export const H2 = styled.h2`
  font-size: 34px;
  font-weight: ${(props) => props.fontWeight};
  line-height: 37px;
  color: ${(props) => Colors.Sample[props.color]};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  text-align: ${(props) => props.textAlign};
`;

H2.defaultProps = {
  fontWeight: 700,
};

export const H3 = styled.h3`
  font-size: 32px;
  font-weight: ${(props) => props.fontWeight};
  line-height: 35px;
  color: ${(props) => Colors.Sample[props.color]};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  text-align: ${(props) => props.textAlign};
`;

H3.defaultProps = {
  fontWeight: 700,
};

export const H4 = styled.h4`
  font-size: 30px;
  font-weight: ${(props) => props.fontWeight};
  line-height: 33px;
  color: ${(props) => Colors.Sample[props.color]};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  text-align: ${(props) => props.textAlign};
`;

H4.defaultProps = {
  fontWeight: 700,
};

export const H5 = styled.h5`
  font-size: 22px;
  font-weight: ${(props) => props.fontWeight};
  line-height: 24px;
  color: ${(props) => Colors.Sample[props.color]};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  text-align: ${(props) => props.textAlign};
`;

H5.defaultProps = {
  fontWeight: 700,
};

export const H6 = styled.h6`
  font-size: 20px;
  font-weight: ${(props) => props.fontWeight};
  line-height: 22px;
  color: ${(props) => Colors.Sample[props.color]};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  text-align: ${(props) => props.textAlign};
`;

H6.defaultProps = {
  fontWeight: 700,
};
