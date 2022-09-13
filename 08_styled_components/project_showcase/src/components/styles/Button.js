import styled, { css } from "styled-components";

const buttonStyles = css`
  appearance: auto;
  padding: ${props => props.large ? "1rem 1.25rem" : "0.5rem 0.75rem"};
  font: inherit;
  ${props => props.large && css`font-size: 1.5rem;`}
  border: none;
  font-weight: 600;
  color: inherit;
  cursor: pointer;
  color: var(--primary);
  background-color: var(--background);
  border: 2px solid var(--primary);
  transition: background-color 0.2s;

  &:active, &:hover, &:focus {
    outline: none;
    color: var(--background);
    background-color: var(--primary);
    border: 2px solid var(--primary);
  }

  &:disabled {
    cursor: not-allowed;
    color: var(--dark-grey);
    background-color: var(--grey);
  }
`
const Button = styled.button`
  ${buttonStyles}
`

export { buttonStyles };

export default Button;