import React from "react";
import styled, { keyframes } from "styled-components";
import { media } from "@/shared/styles/mixin";


const Layout = styled.section`
  background-color: #000;
  width: 100%;
  padding-top: 75px;
  padding-bottom: 75px;
  border-bottom: 1px solid lightgray;
`;

const scrollText = keyframes`
   0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
`;

const InfiniteText = styled.p`
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  font-size: 240px;
  font-weight: 700;
  font-family: "Thunder", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 31px 0;
  cursor: pointer;
  overflow: hidden;
  height: 300px;
  ${media.tabletL`
     font-size: 180px;
    `}

  ${media.mobileS`
     font-size: 100px;
      height: 200px;
    `}


  &:hover {
    color: transparent;
    transform: translate3d(0%, 0%, 0px);
    opacity: 1;
    background-color: #1e36ea;
  }

  &::before {
    content: "SPECTACULAR MINIMALIST SPECTACULAR MINIMALIST SPECTACULAR MINIMALIST SPECTACULAR MINIMALIST SPECTACULAR MINIMALIST SPECTACULAR MINIMALIST";
    position: absolute;
    white-space: nowrap;
    color: #fff;
    font-size: 240px;
    top: 60%;
    left: 50%;
    transform: translateY(-50%);
    opacity: 0;
    animation: ${scrollText} 10s linear infinite;
    ${media.tabletL`
     font-size: 180px;
    `}
    
  ${media.mobileS`
     font-size: 100px;
    `}
  }

  &:hover::before {
    opacity: 1;
    left: 0;
  }
`;

function Project() {
  return (
    <Layout>
      <InfiniteText>Syuzzang</InfiniteText>
      <InfiniteText>Passionate</InfiniteText>
      <InfiniteText>Enjoy</InfiniteText>
    </Layout>
  );
}

export default Project;
