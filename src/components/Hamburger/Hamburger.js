import styled, { keyframes, css } from "styled-components";
import { QUERIES } from "../constants";

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const Line = styled.div`
  height: 4px;
  width: 24px;
  background-color: var(--color-gray);
  transition: all 0.3s ease-in-out;

  ${(p) =>
    p.open && p.first
      ? `
  transform: translateY(225%) rotate(130deg);
  `
      : ""}
  ${(p) =>
    p.open && p.mid
      ? `
  transform: translateY(-350px) rotate(90deg);
  `
      : ""}
  ${(p) =>
    p.open && p.last
      ? `
  transform: translateY(-225%) rotate(-130deg);
  `
      : ""}
`;

function Hamburger({ open, ...props }) {
  return (
    <Wrapper {...props}>
      <Line first={true} open={open} />
      <Line mid={true} open={open} />
      <Line last={true} open={open} />
    </Wrapper>
  );
}

export default Hamburger;
