import styled, { keyframes, css } from "styled-components";
import { hoverSupported } from "../hoverSupported";
import ClickableWrapper from "../ClickableWrapper";

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(10);
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  padding: ${(p) => (p.big ? "16px 48px" : "10px 26px")};
  border-radius: ${(p) => (p.flat ? "12px" : "24px")};
  background-color: var(--color-cyan);
  color: var(--color-white);
  font-size: ${14 / 16}rem;
  ${(p) => (p.big ? `font-size: ${18 / 16}rem;` : "")}
  font-weight: var(--font-weight-bold);
  cursor: pointer;
  width: max-content;
  transition: all 0.1s ease-in-out;
  opacity: 1;

  position: relative;
  overflow: hidden;
  user-select: none;

  &:focus {
    outline: 3px solid
      ${(p) =>
        p.whiteOutline ? "var(--color-white)" : "var(--color-very-dark-blue)"};
    outline-offset: 3px;
  }

  &:active {
    transform: scale(0.85);
  }

  &:active::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.3);
    animation: ${ripple} 1s linear infinite;
  }

  ${hoverSupported(css`
    &:hover:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.3);
      animation: ${ripple} 3s linear infinite;
      border-radius: 24px;
    }
  `)}
`;

function Button({ big, flat, children, ...props }) {
  return (
    <ClickableWrapper>
      <Wrapper big={big} flat={flat} {...props}>
        {children}
      </Wrapper>
    </ClickableWrapper>
  );
}

export default Button;
