"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "@/shared/assets/logo.svg";
import Btn from "@/shared/button/Btn";
import useMediaQuery from "../lib/useMediaquery";
import { media } from "@/shared/styles/mixin";

const Layout = styled.header`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  margin-left: auto;
  margin-right: auto;
  ${media.mobileS`
       padding: 20px 20px;
     `}
`;
const Wrapper = styled.nav`
  max-width: 1560px;
  display: flex;
  align-items: center;

  gap: 138.77px;
`;
const MenuList = styled.ul`
  display: flex;
  color: white;
  gap: 34.94px;
  font-weight: 600;
  cursor: pointer;
`;
const UnderLine = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: white;
  transition: width 0.3s ease-in-out;
  transform: translateX(-50%);
`;

const MenuItem = styled.li`
  position: relative;
  cursor: pointer;

  &:hover ${UnderLine} {
    width: 0;
  }
`;
const RightNav = styled.div``;

function Header() {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  return (
    <Layout>
      <Wrapper>
        <Image src={Logo.src} alt="logo" width={137} height={32} priority />
        {!isSmallScreen && (
          <MenuList>
            <MenuItem>
              SOLUTIONS <UnderLine />
            </MenuItem>
            <MenuItem>
              ABOUT ME
              <UnderLine />
            </MenuItem>
          </MenuList>
        )}
      </Wrapper>
      <RightNav>
        <Btn text="CONTACT" hoverText="CONTACT"></Btn>
      </RightNav>
    </Layout>
  );
}

export default Header;
