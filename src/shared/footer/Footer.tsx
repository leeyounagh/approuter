import React from "react";
import styled from "styled-components";

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
`;
const Li = styled.li``;

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
