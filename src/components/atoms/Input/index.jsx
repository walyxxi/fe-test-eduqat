import { styled } from "styled-components";
import * as styles from "./styles";

/* concat styles based on props */
const InputBase = styled.input`
  ${styles.inputbase};
  ${(props) => styles[props.size]};
`;

const Input = ({ size, autoFocus = false, ...rest }) => (
  <InputBase size={size} autoFocus={autoFocus} {...rest} />
);

export default Input;
