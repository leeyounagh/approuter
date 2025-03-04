"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "@/shared/assets/logo.svg";
import Btn from "@/shared/button/Btn"

const Layout = styled.header`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  margin-left: auto;
  margin-right: auto;
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

// const Btn = styled.button`
//   cursor: pointer;
//   color: black;
//   background-color: white;
//   font-weight: 600;
//   border-radius: 8.75px;
//   flex: 0 auto;
//   justify-content: center;
//   align-items: center;
//   padding: 16px 22px;
//   position: relative;
//   overflow: hidden;
//   height: 50px;
//   width: 120px;

//   span {
//     display: inline-block;
//     position: absolute;
//     left: 50%;
//     transform: translate3d(-50%, 0, 0);
//     transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
//     white-space: nowrap;
//   }

//   .default-text {
//     transform: translate3d(-50%, -50%, 0);
//     opacity: 1;
//   }

//   .hover-text {
//     transform: translate3d(-50%, 100%, 0);
//     opacity: 0;
//   }

//   &:hover .default-text {
//     transform: translate3d(-50%, -100%, 0);
//     opacity: 0;
//   }

//   &:hover .hover-text {
//     transform: translate3d(-50%, -50%, 0);
//     opacity: 1;
//   }
// `;
function Header() {
  return (
    <Layout>
      <Wrapper>
        <Image src={Logo.src} alt="logo" width={137} height={32} priority />
        <MenuList>
          <MenuItem>
            SOLUTIONS <UnderLine />
          </MenuItem>
          <MenuItem>
            ABOUT ME
            <UnderLine />
          </MenuItem>
        </MenuList>
      </Wrapper>
      <RightNav>
        <Btn text="CONTACT" hoverText="CONTACT">
          {/* <span className="default-text">CONTACT</span>
          <span className="hover-text">CONTACT</span> */}
        </Btn>
      </RightNav>
    </Layout>
  );
}

export default Header;
