import styled from "styled-components";
import { Wrapper } from "../NavBar";
import Button from "../Button";
import { QUERIES } from "../constants";

const MyWrapper = styled(Wrapper)`
  justify-content: start;
  padding: 114px 0px;
  background-color: var(--color-white);

  @media ${QUERIES.tabletAndSmaller} {
    padding: 114px 12px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 0px;
    padding-bottom: 48px;
  }
`;

const IllustrationContainer = styled.div`
  width: 733px;
  height: 482px;
  position: absolute;
  right: -288px;
  top: 30px;

  @media ${QUERIES.phoneAndSmaller} {
    right: -80px;
    top: 0px;
    position: relative;
    width: 480px;
    height: 300px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 550px;

  @media ${QUERIES.tabletAndSmaller} {
    background-color: var(--color-white-faded);
    z-index: 3;
    padding: 12px;
    border-radius: 16px;
    margin-left: -12px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
    gap: 10px;
  }
`;

const Title = styled.h1`
  font-size: ${72 / 16}rem;
  line-height: ${80 / 16}rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-dark-blue);

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 54px;
    text-align: center;
    font-size: ${40 / 16}rem;
    line-height: ${44 / 16}rem;
  }
`;

const Desc = styled.span`
  font-size: ${22 / 16}rem;
  line-height: ${34 / 16}rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray);

  @media ${QUERIES.tabletAndSmaller} {
    color: var(--color-dark-violet);
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${18 / 16}rem;
    line-height: ${32 / 16}rem;
    color: var(--color-gray);
    font-weight: var(--font-weight-bold);
    text-align: center;
    margin-top: 4px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 24px;
`;

function TopSection() {
  return (
    <MyWrapper>
      <IllustrationContainer>
        <Image
          src={"/frontendmentor_14/illustration-working.svg"}
          alt={"illustration image"}
        />
      </IllustrationContainer>
      <TextWrapper>
        <Title>More than just shorter links</Title>
        <Desc>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </Desc>

        <ButtonContainer>
          <Button big={true}>Get Started</Button>
        </ButtonContainer>
      </TextWrapper>
    </MyWrapper>
  );
}

export default TopSection;
