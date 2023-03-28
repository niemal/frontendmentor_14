import styled from "styled-components";
import Button from "../Button";
import { QUERIES } from "../constants";
import { isMobile } from "react-device-detect";
import { useState, useRef, useContext } from "react";
import { MainContext } from "../MainBody";

export const Wrapper = styled.div`
  width: 1100px;
  max-width: clamp(1109px, 9vw, 1250px);
  margin-left: auto;
  margin-right: auto;
  background-color: var(--color-dark-violet);
  padding: 54px;
  transform: translateY(-50%);
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  @media ${QUERIES.tabletAndSmaller} {
    width: 90%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 26px;
    width: calc(100% - 48px);
  }
`;

const BackgroundImageContainer = styled.div`
  width: 1110px;
  height: 168px;
  position: absolute;
  left: 0px;
  top: 0px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 237px;
    height: 128px;
    left: auto;
    right: 0px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 24px;
  min-width: 100%;
  z-index: 99;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    gap: 16px;

    ${(p) => (p.error ? "gap: 32px;" : "")}
  }
`;

const Input = styled.input`
  width: 78%;
  outline: none;
  border: 2px solid
    ${(p) => (p.error ? "var(--color-bright-red)" : "transparent")};
  border-radius: 12px;
  background-color: var(--color-white);
  padding: 8px 32px;
  color: ${(p) =>
    p.error ? "var(--color-bright-red)" : "var(--color-very-dark-violet)"};
  font-size: ${22 / 16}rem;
  transition: all 0.35s ease-in-out;

  &:placeholder {
    color: ${(p) =>
      p.error ? "var(--color-bright-red)" : "var(--color-gray)"};
  }
  z-index: 2;

  @media ${QUERIES.tabletAndSmaller} {
    width: 60%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
    padding: 10px 16px;
    font-size: ${18 / 16}rem;
    border-radius: 6px;
  }
`;

const ButtonContainer = styled.div`
  & > div {
    @media ${QUERIES.phoneAndSmaller} {
      width: 100%;
      text-align: center;
      padding: 10px;
      border-radius: 6px;
    }
  }
`;

const GeneralWrapper = styled.div`
  position: relative;
  z-index: 15;
`;

const ErrorMessage = styled.div`
  font-size: ${14 / 16};
  font-style: italic;
  font-weight: var(--font-weight-medium);

  position: absolute;
  left: 0;
  bottom: -32px;
  color: var(--color-bright-red);

  @media ${QUERIES.tabletAndSmaller} {
    left: 24px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${12 / 16}rem;
    bottom: 56px;
  }
`;

function URLShorten() {
  const inputRef = useRef(null);
  const { shortenedURLs, setShortenedURLs } = useContext(MainContext);
  const [errorMessage, setErrorMessage] = useState("");

  const shortenURL = async () => {
    setErrorMessage("");
    if (!inputRef?.current || inputRef.current.value?.length === 0) {
      setErrorMessage("Please add a link");
      return;
    }

    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(
          inputRef.current.value
        )}`
      );
      const data = await response.json();

      if (data.ok) {
        const tmp = [...shortenedURLs];
        tmp.push({
          origin: inputRef.current.value,
          shortened: data.result.full_short_link,
        });
        setShortenedURLs(tmp);
        setErrorMessage("");
      } else {
        setErrorMessage("An error occurred while shortening the URL.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while shortening the URL.");
    }
  };

  return (
    <Wrapper style={{ zIndex: 20 }}>
      <BackgroundImageContainer>
        <Image
          src={
            isMobile
              ? "/frontendmentor_14/bg-shorten-mobile.svg"
              : "/frontendmentor_14/bg-shorten-desktop.svg"
          }
          alt={"shorten url background image"}
        />
      </BackgroundImageContainer>

      <GeneralWrapper>
        <InputWrapper error={errorMessage?.length > 0}>
          <Input
            ref={inputRef}
            error={errorMessage?.length > 0}
            placeholder={"Shorten a link here..."}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                shortenURL();
              }
            }}
          />
          <ButtonContainer error={errorMessage?.length > 0}>
            <Button
              big={true}
              flat={true}
              onClick={() => {
                shortenURL();
              }}
              whiteOutline={true}
            >
              Shorten It!
            </Button>
          </ButtonContainer>
        </InputWrapper>

        {errorMessage?.length > 0 ? (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        ) : (
          ""
        )}
      </GeneralWrapper>
    </Wrapper>
  );
}

export default URLShorten;
