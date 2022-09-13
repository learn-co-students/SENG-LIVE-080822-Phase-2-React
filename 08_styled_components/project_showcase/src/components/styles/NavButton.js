import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { buttonStyles } from './Button';

const NavButton = styled(NavLink)`
  ${buttonStyles}
`

export default NavButton;