import styled from "styled-components";
import { useContext } from "react";
import { DisplayContext } from "../DisplayShortened";
import { QUERIES } from "../constants";

const Wrapper = styled.div`
  padding: 10px 26px;
  border-radius: 4px;
  background-color: ${(p) =>
    p.copied ? "var(--color-dark-violet)" : "var(--color-cyan)"};
  color: var(--color-white);
  font-size: ${14 / 16}rem;
  font-weight: var(--font-weight-bold);
  cursor: pointer;
  width: 100px;
  transition: all 0.3s ease-in-out;
  text-align: center;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

function CopyButton({ idx, url }) {
  const { currentCopy, setCurrentCopy } = useContext(DisplayContext);

  return (
    <Wrapper
      copied={currentCopy === idx}
      onClick={() => {
        navigator.clipboard.writeText(url);
        setCurrentCopy(idx);
      }}
    >
      {currentCopy === idx ? "Copied" : "Copy"}
    </Wrapper>
  );
}

export default CopyButton;
