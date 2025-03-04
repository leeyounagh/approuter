import React from "react";
import styled from "styled-components";
import Card from "@/shared/card/Card";

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
`;
const Desc = styled.p`
  max-width: 570px;
  text-align:center;
`;
const Line =styled.div`
 width:80%;
 height:1px;
`
function Main() {
  return (
    <Banner>
      <CardWrapper>
        <Card />
      </CardWrapper>
      <P>PORTFOLIO</P>
      <Desc>
        This portfolio is a testament to Syuzzang's dedication to crafting
        exceptional digital experiences Where Each website is a result of
        countless hours of design finesse and meticulous development
      </Desc>
      <Line></Line>
    </Banner>
  );
}

export default Main;
