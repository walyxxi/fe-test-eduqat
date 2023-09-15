import { styled } from "styled-components";
import * as styles from "./styles";

const BaseIcon = styled.span`
  ${styles.iconbase};
  ${(props) => styles[props.size]};
`;

const StyledIcon = ({ color, size, ...rest }) => (
  <BaseIcon color={color} size={size} {...rest} />
);

export default StyledIcon;
