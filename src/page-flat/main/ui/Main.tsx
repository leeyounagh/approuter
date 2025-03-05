import React, { useRef } from "react";
import styled from "styled-components";
import Card from "@/shared/card/Card";
import Btn from "@/shared/button/Btn";
import Project from "./Project";
import Introduce from "./Introduce";
import { media } from "@/shared/styles/mixin";
import useMediaQuery from "@/shared/lib/useMediaquery";

const Banner = styled.section`
  width: 100%;
  max-width: 1560px;
  margin-left: auto;
  margin-right: auto;
  padding: 75px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 200px;
`;

const P = styled.p`
  color: #000;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 350px;
  font-weight: 700;
  line-height: 80%;
  font-family: "Thunder", sans-serif;
  z-index: 0;
  ${media.tabletL`
     font-size: 250px;
    `}
  ${media.tabletS`
      font-size: 200px;
     `}
       ${media.mobileS`
      font-size: 100px;
     `}
`;

const CardWrapper = styled.div`
  position: absolute;
  top: 80px;
  right: 300px;
  transform: rotate(30deg);
  z-index: 1;
  width: 190px;
  height: 220px;
  transition: width 0.2s ease-out, height 0.2s ease-out, top 0.2s ease-out;
  ${media.tabletL`
  width: 180px;
  height: 140px;
  right: 100px;
    `}
  ${media.tabletS`
  width: 160px;
  height: 80px;
  right: 80px;
    `}
`;
const Desc = styled.p`
  max-width: 570px;
  text-align: center;
  margin-bottom: 40px;
  ${media.mobileS`
      font-size: 10px;
     `}
`;
const Line = styled.div`
  width: 80%;
  height: 1px;
  background-color: #000;
  margin-bottom: 40px;
  margin-top: 40px;
`;
function Main() {
  const projectRef = useRef<HTMLDivElement>(null);
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const handleScrollToProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Banner>
        {!isSmallScreen && (
          <CardWrapper>
            <Card />
          </CardWrapper>
        )}

        <P>PORTFOLIO</P>
        <Desc>
          This portfolio is a testament to Syuzzang&apos;s dedication to
          crafting exceptional digital experiences Where Each website is a
          result of countless hours of design finesse and meticulous development
        </Desc>
        <Btn
          text="Navigate"
          hoverText="Navigate"
          variant="secondary"
          onClick={handleScrollToProject}
        />
        <Line />
      </Banner>
      <div ref={projectRef}>
        <Project />
      </div>
      <Introduce></Introduce>
    </>
  );
}

export default Main;
