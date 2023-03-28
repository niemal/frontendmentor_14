import styled from "styled-components";
import Button from "../Button";
import { isMobile } from "react-device-detect";
import { QUERIES } from "../constants";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 56px;
  position: relative;
  background-color: var(--color-dark-violet);
  height: max-content;
  overflow: hidden;

  @media ${QUERIES.phoneAndSmaller} {
    padding-bottom: 84px;
  }
`;

const BackgroundImageContainer = styled.div`
  width: 1440px;
  height: 250px;
  position: absolute;
  top: 0;

  @media ${QUERIES.phoneAndSmaller} {
    width: 375px;
    height: 300px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Text = styled.h1`
  color: var(--color-white);
  font-size: ${40 / 16}rem;
  font-weight: var(--font-weight-bold);
  z-index: 2;

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
    font-size: ${24 / 16}rem;
    width: 100%;
    margin-top: 42px;
  }
`;

function FooterFiller() {
  return (
    <Wrapper>
      <BackgroundImageContainer>
        <Image
          src={
            isMobile
              ? "/frontendmentor_14/bg-boost-mobile.svg"
              : "/frontendmentor_14/bg-boost-desktop.svg"
          }
          alt={"boost image background"}
        />
      </BackgroundImageContainer>

      <Text>Boost your links today</Text>
      <Button
        big={true}
        style={{
          borderRadius: "32px",
          fontSize: `${20 / 16}rem`,
          padding: "14px 40px",
          zIndex: 2,
        }}
        whiteOutline={true}
      >
        Get Started
      </Button>
    </Wrapper>
  );
}

export default FooterFiller;
