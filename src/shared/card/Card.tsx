import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  will-change: transform;
  transform-style: preserve-3d;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  height: auto;
  max-width: 263px;
  background-color: #1e36ea;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  padding: 16px;

  &:hover {
    transform: translate3d(0%, -5%, 0) scale3d(1.05, 1.05, 1) rotateZ(5deg);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
`;



const CardContent = styled.div`
  margin-top: 10px;
  p {
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const CardHeading = styled.h4`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 900;
  line-height: 1;
  color: #f8f527;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
  z-index: 1;
  width: 100%;
  height: 100%;
  mix-blend-mode: overlay;
  display: block;
  position: absolute;
  top: -10px;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;

function Card() {
  return (
    <CardWrapper>
      <CardHeader>
        <span>WHO IS Syuzzang</span>
      </CardHeader>
      <CardContent>
        <p>
          Passionate Frontend Developer who always thinks from the user's
          perspective
        </p>

        <CardHeading>
          SYUZZANG <br></br>PORTFOLIO
        </CardHeading>
      </CardContent>
      <CardImage
        src="https://cdn.prod.website-files.com/64c7878ea5e3e133429ab757/64e48bfad107d5b9823f7775_aaa-1.png"
        alt="Syuzzang Portfolio"
      />
    </CardWrapper>
  );
}

export default Card;
