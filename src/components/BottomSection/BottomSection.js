import styled, { keyframes, css } from "styled-components";
import { Wrapper } from "../NavBar";
import URLShorten from "../URLShorten";
import DisplayShortened from "../DisplayShortened";
import { QUERIES } from "../constants";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useContext } from "react";
import { MainContext } from "../MainBody";

const MyWrapper = styled.div`
  width: 100%;
  background-color: var(--color-gray-faded);
  margin-top: 100px;
  position: relative;
  padding-bottom: 72px;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 24px;
    padding-bottom: 40px;
  }
`;

const Container = styled(Wrapper)`
  padding-top: 54px;
  padding-bottom: 100px;
  justify-content: center;

  @media ${QUERIES.phoneAndSmaller} {
    padding-top: 14px;
    padding-bottom: 86px;
  }

  ${(p) => (p.length > 0 ? `margin-top: -${p.length * 36}px;` : "")}

  @media ${QUERIES.phoneAndSmaller} {
    ${(p) => (p.length > 0 ? `margin-top: -${p.length * 128}px;` : "")}
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 24px;
  }
`;

const Title = styled.h1`
  font-size: ${38 / 16}rem;
  line-height: ${28 / 16}rem;
  color: var(--color-very-dark-blue);
  font-weight: var(--font-weight-bold);

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
    font-size: ${28 / 16}rem;
  }
`;

const Desc = styled.span`
  font-size: ${18 / 16}rem;
  line-height: ${28 / 16}rem;
  color: var(--color-gray-violet);
  max-width: 520px;
  text-align: center;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const CardsWrapper = styled(Wrapper)`
  padding-top: 0px;
  display: flex;
  gap: 24px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    max-width: 500px;
    align-items: center;
    gap: 60px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 90px;
  }
`;

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideLeftAnim = (n) => css`
  animation: ${slideInFromLeft} 0.5s ease-in forwards;
  animation-delay: ${(n - 1) * 1}s;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  padding-bottom: 40px;
  border-radius: 8px;
  background-color: var(--color-white);
  height: max-content;
  position: relative;

  ${(p) => (p.number === 2 ? `margin-top: 40px;` : "")}
  ${(p) => (p.number === 3 ? `margin-top: 86px;` : "")}

  @media ${QUERIES.tabletAndSmaller} {
    margin-top: 0px;
  }

  ${(p) => (p.isVisible ? slideLeftAnim(p.number) : "")}
  opacity: 0;

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  padding: 0px;
  background-color: var(--color-dark-violet);
  position: relative;
  display: grid;
  place-content: center;
  border-radius: 50%;
  width: 88px;
  height: 88px;
  margin-top: -72px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const CardTitle = styled.h2`
  font-size: ${24 / 16}rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-very-dark-violet);
  margin-top: 16px;
`;

const CardDesc = styled.span`
  font-size: ${15 / 16}rem;
  line-height: ${24 / 16}rem;
  color: var(--color-gray-violet);
  max-width: 285px;

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
  }
`;

const fadeInWidth = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: 32px;
    opacity: 1;
  }
`;

const fadeInWidthAnim = css`
  animation: ${fadeInWidth} 1s ease-in 1s forwards;
`;

const ConnectorLeft = styled.div`
  position: absolute;
  width: 32px;
  height: 8px;
  background-color: var(--color-cyan);
  left: -32px;
  top: 112px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }

  ${(p) => (p.isVisible ? fadeInWidthAnim : "")}
  opacity: 0;
`;

const ConnectorRight = styled(ConnectorLeft)`
  left: auto;
  right: -32px;
  ${(p) => (p.isVisible ? fadeInWidthAnim : "")}
`;

const fadeInHeight = (height) => keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: ${height}px;
    opacity: 1;
  }
`;

const fadeInHeightAnim = (height) => css`
  animation: ${fadeInHeight(height)} 1s ease-in 1s forwards;
`;

const TabletConnectorTop = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
    position: absolute;
    height: 60px;
    width: 8px;
    top: -60px;
    left: 160px;
    background-color: var(--color-cyan);

    ${(p) => (p.isVisible ? fadeInHeightAnim(60) : "")}
    opacity: 0;
  }

  @media ${QUERIES.phoneAndSmaller} {
    ${(p) => (p.isVisible ? fadeInHeightAnim(90) : "")}
    top: -90px;
  }
`;

const TabletConnectorBottom = styled(TabletConnectorTop)`
  @media ${QUERIES.tabletAndSmaller} {
    top: auto;
    bottom: -60px;
    animation-delay: 2s;
  }

  @media ${QUERIES.phoneAndSmaller} {
    bottom: -90px;
  }
`;

function BottomSection() {
  const { shortenedURLs } = useContext(MainContext);

  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <MyWrapper>
      <URLShorten />
      <DisplayShortened />

      <Container length={shortenedURLs.length}>
        <ContentWrapper>
          <TextWrapper>
            <Title>Advanced Statistics</Title>
            <Desc>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </Desc>
          </TextWrapper>
        </ContentWrapper>
      </Container>
      <CardsWrapper ref={ref}>
        <Card isVisible={isVisible}>
          <ImageContainer>
            <Image
              src={"/frontendmentor_14/icon-brand-recognition.svg"}
              alt={"brand recognition image"}
            />
          </ImageContainer>
          <CardTitle>Brand Recognition</CardTitle>
          <CardDesc>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </CardDesc>
        </Card>

        <Card number={2} isVisible={isVisible}>
          <ConnectorLeft isVisible={isVisible} />
          <ConnectorRight isVisible={isVisible} />
          <TabletConnectorTop isVisible={isVisible} />
          <TabletConnectorBottom isVisible={isVisible} />
          <ImageContainer>
            <Image
              src={"/frontendmentor_14/icon-detailed-records.svg"}
              alt={"detailed records image"}
            />
          </ImageContainer>
          <CardTitle>Detailed Records</CardTitle>
          <CardDesc>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </CardDesc>
        </Card>

        <Card number={3} isVisible={isVisible}>
          <ImageContainer>
            <Image
              src={"/frontendmentor_14/icon-fully-customizable.svg"}
              alt={"fully customizable image"}
            />
          </ImageContainer>
          <CardTitle>Fully Customizable</CardTitle>
          <CardDesc>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </CardDesc>
        </Card>
      </CardsWrapper>
    </MyWrapper>
  );
}

export default BottomSection;
