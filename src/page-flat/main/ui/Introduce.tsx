import React from "react";
import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@/shared/lib/useMediaquery";
import { media } from "@/shared/styles/mixin";

const Layout = styled.section`
  background-color: #000;
  width: 100%;
  padding-top: 75px;
  padding-bottom: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const Desc = styled.p`
  max-width: 570px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  ${media.mobileM`
      font-size: 10px;
  `}
`;

const ImageDiv = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 150px;
`;

const DESC2 = styled.p`
  max-width: 700px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  margin-top: 0;
  margin-bottom: 0;
  font-family: Thunder, sans-serif;
  font-size: 150px;
  font-weight: 600;
  line-height: 80%;
  padding-top: 249px;
  ${media.mobileM`
     font-size: 100px;
  `}
`;
function Introduce() {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  return (
    <Layout>
      <Desc>
        Step into a world where websites tell stories. Xavier Vega&apos;s
        portfolio is a narrative of compelling digital journeys, each project
        carefully designed to convey a unique message
      </Desc>
      <ImageDiv>
        <Image
          src="https://cdn.prod.website-files.com/64c7878ea5e3e133429ab757/64e6096eb6292fb6b706b0b5_Frame%201000003297.svg"
          alt="Introduce"
          width={isSmallScreen ? 126 : 226}
          height={isSmallScreen ? 123 : 223}
        />
        <Image
          src="https://cdn.prod.website-files.com/64c7878ea5e3e133429ab757/64e6095fb5e49f8139526639_Frame%201000004076.svg"
          alt="Introduce"
          width={isSmallScreen ? 126 : 226}
          height={isSmallScreen ? 123 : 223}
        />
      </ImageDiv>
      <DESC2>Creativity and Innovation in Web Design</DESC2>
    </Layout>
  );
}

export default Introduce;
