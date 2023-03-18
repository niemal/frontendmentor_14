import styled, { keyframes } from "styled-components";
import { Wrapper } from "../URLShorten";
import { MainContext } from "../MainBody";
import { useContext, createContext, useState } from "react";
import CopyButton from "../CopyButton";
import { QUERIES } from "../constants";

const MyWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0px;
  background-color: transparent;
  border-radius: 0px;
  padding-top: ${(p) => p.length * 46}px;
  padding-bottom: 0px;

  @media ${QUERIES.phoneAndSmaller} {
    padding-top: ${(p) => p.length * 134}px;
  }
`;

const appear = keyframes`
  0% {
    opacity: 0;
    transform: perspective(400px) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1) perspective(400px);
  }
`;

const ShortenedWrapper = styled.div`
  background-color: var(--color-white);
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  border-radius: 8px;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    align-items: start;
    padding: 16px 0px;
  }

  animation: ${appear} 0.45s ease-in-out forwards;
`;

const OriginalLink = styled.span`
  color: var(--color-dark-violet);
  font-weight: var(--font-weight-bold);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
    width: 100%;
    padding: 0px 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-gray);
  }
`;

const SideWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-right: -8px;

  @media ${QUERIES.phoneAndSmaller} {
    margin-right: 0px;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    padding-bottom: 0px;
    width: 100%;
    align-items: start;
  }
`;

const LinkWrapper = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: var(--font-weight-bold);
  color: var(--color-cyan);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

export const DisplayContext = createContext();

function DisplayShortened() {
  const { shortenedURLs } = useContext(MainContext);
  const [currentCopy, setCurrentCopy] = useState(-1);

  return (
    <MyWrapper length={shortenedURLs.length}>
      <DisplayContext.Provider value={{ currentCopy, setCurrentCopy }}>
        {shortenedURLs.map((item, idx) => (
          <ShortenedWrapper key={`shortened-display-${idx}`}>
            <OriginalLink>{item.origin}</OriginalLink>
            <SideWrapper>
              <LinkWrapper
                href={item.shortened}
                target="_blank"
                rel="noreferrer"
              >
                {item.shortened}
              </LinkWrapper>
              <CopyButton url={item.shortened} idx={idx} />
            </SideWrapper>
          </ShortenedWrapper>
        ))}
      </DisplayContext.Provider>
    </MyWrapper>
  );
}

export default DisplayShortened;
