import styled from "styled-components";
import NavBar from "../NavBar";
import TopSection from "../TopSection";
import BottomSection from "../BottomSection";
import FooterFiller from "../FooterFiller";
import Footer from "../Footer";
import { createContext, useState } from "react";

const Wrapper = styled.main`
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const MainContext = createContext();

function MainBody() {
  const [shortenedURLs, setShortenedURLs] = useState([]);

  return (
    <Wrapper role={"main"}>
      <NavBar />
      <TopSection />

      <MainContext.Provider value={{ shortenedURLs, setShortenedURLs }}>
        <BottomSection />
      </MainContext.Provider>
      <FooterFiller />
      <Footer />
    </Wrapper>
  );
}

export default MainBody;
