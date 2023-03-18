import styled, { keyframes, css } from "styled-components";
import Button from "../Button";
import { QUERIES } from "../constants";
import Hamburger from "../Hamburger";
import { useState, useRef } from "react";
import { hoverSupported } from "../hoverSupported";

export const Wrapper = styled.div`
  width: 100%;
  max-width: clamp(1109px, 9vw, 1250px);
  margin: 0 auto;
  position: relative;
  padding: 50px 0px;
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 50px 12px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 40px 24px;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  width: 121px;
  height: 33px;
`;

const Logo = styled.img`
  object-fit: cover;
  width: 100%;
`;

const LogoAndNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 46px;
`;

const NavWrapper = styled(LogoAndNavWrapper)`
  gap: 35px;
  margin-top: -4px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const NavEntry = styled.a`
  position: relative;
  text-decoration: none;
  font-size: ${15 / 16}rem;
  color: var(--color-gray-violet);
  font-weight: var(--font-weight-bold);
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    &:hover {
      color: var(--color-very-dark-violet);
    }

    &:after {
      content: "";
      position: absolute;
      right: 4px;
      bottom: -2px;
      width: 0px;
      height: 2px;
      background-color: var(--color-very-dark-violet);
      transition: width 0.3s ease-in-out;
    }

    &:hover:after {
      width: 100%;
    }
  `)}
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const slideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0%);
  }
  99% {
    opacity: 0;
    transform: translateY(-200%);
  }
  100% {
    visibility: hidden;
  }
`;

const inInjection = css`
  animation: 0.35s ${slideIn} ease-in-out forwards;
`;

const outInjection = css`
  animation: 0.35s ${slideOut} ease-in-out forwards;
`;

const MenuWrapper = styled.div`
  width: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  border-radius: 12px;
  background-color: var(--color-dark-violet);
  position: fixed;
  left: 24px;
  margin: 0 auto;
  top: 96px;
  z-index: 99;

  ${(p) => (p.open ? inInjection : !p.firstRender ? outInjection : "")}
  opacity: 0;
`;

const TopMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-gray-faded);
  gap: 10px;
  padding-bottom: 20px;
`;

const MenuEntry = styled.a`
  text-decoration: none;
  font-size: ${18 / 16}rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  padding: 10px;
`;

const BottomMenuWrapper = styled(TopMenuWrapper)`
  border-bottom: none;
  padding-top: 20px;
  gap: 16px;
  padding-bottom: 14px;
`;

function useFirstRender() {
  const ref = useRef(true);
  const firstRender = ref.current;
  ref.current = false;
  return firstRender;
}

function NavBar() {
  const render = useFirstRender();
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <LogoAndNavWrapper>
        <LogoContainer>
          <Logo src={"/frontendmentor_14/logo.svg"} alt={"logo image"} />
        </LogoContainer>

        <NavWrapper>
          <NavEntry href={"/"}>Features</NavEntry>
          <NavEntry href={"/"}>Pricing</NavEntry>
          <NavEntry href={"/"}>Resources</NavEntry>
        </NavWrapper>
      </LogoAndNavWrapper>

      <NavWrapper>
        <NavEntry href={"/"} style={{ marginTop: "0px" }}>
          Login
        </NavEntry>
        <Button>Sign Up</Button>
      </NavWrapper>

      <Hamburger
        open={open}
        onClick={() => {
          setOpen((o) => !o);
        }}
      />

      {open ? (
        <MenuWrapper open={open}>
          <TopMenuWrapper>
            <MenuEntry href={"/"}>Features</MenuEntry>
            <MenuEntry href={"/"}>Pricing</MenuEntry>
            <MenuEntry href={"/"}>Resources</MenuEntry>
          </TopMenuWrapper>

          <BottomMenuWrapper>
            <MenuEntry href={"/"}>Login</MenuEntry>
            <Button
              style={{
                width: "100%",
                textAlign: "center",
                fontSize: `${18 / 16}rem`,
              }}
            >
              Sign Up
            </Button>
          </BottomMenuWrapper>
        </MenuWrapper>
      ) : (
        ""
      )}

      {!open ? (
        <MenuWrapper open={open} firstRender={render}>
          <TopMenuWrapper>
            <MenuEntry href={"/"}>Features</MenuEntry>
            <MenuEntry href={"/"}>Pricing</MenuEntry>
            <MenuEntry href={"/"}>Resources</MenuEntry>
          </TopMenuWrapper>

          <BottomMenuWrapper>
            <MenuEntry href={"/"}>Login</MenuEntry>
            <Button
              style={{
                width: "100%",
                textAlign: "center",
                fontSize: `${18 / 16}rem`,
              }}
            >
              Sign Up
            </Button>
          </BottomMenuWrapper>
        </MenuWrapper>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default NavBar;
