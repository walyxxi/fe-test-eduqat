import { styled } from "styled-components";
import * as styles from "./styles";

/* concat styles based on props */
const SelectBase = styled.select`
  ${styles.selectbase};
  ${(props) => styles[props.size]};
`;

const Select = ({ size, ...rest }) => <SelectBase size={size} {...rest} />;

export default Select;
