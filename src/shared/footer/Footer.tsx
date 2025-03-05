import React from "react";
import styled from "styled-components";
import { media } from "@/shared/styles/mixin";

const Layout = styled.footer`
  width: 100%;
  background-color: #000;
`;
const Ul = styled.ul`
  display: flex;
  color: white;
  padding-left: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
  display:flex;
  justify-content:center;
  ${media.tabletL`
        padding-left: 40px;
     `}
     ${media.mobileM`
      padding-left: 20px;
     `}
`;
const Li = styled.li`
${media.mobileM`
 font-size:10px;
`}
`;

function Footer() {
  return (
    <Layout>
      <Ul>
        <Li>©2025 PIONEER</Li> <Li>Privacy Policy</Li> <Li>Cookies Policy</Li>
        <Li>Terms of use</Li>
      </Ul>
    </Layout>
  );
}

export default Footer;
