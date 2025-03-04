import React from "react";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  hoverText?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

const StyledButton = styled.button<{ variant: string; size: string }>`
  cursor: pointer;
  font-weight: 600;
  border-radius: 8.75px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s;
  
  ${({ size }) => {
    switch (size) {
      case "small":
        return "padding: 8px 14px; height: 36px; width: 90px; font-size: 14px;";
      case "large":
        return "padding: 18px 24px; height: 56px; width: 140px; font-size: 18px;";
      default:
        return "padding: 16px 22px; height: 50px; width: 120px; font-size: 16px;";
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return "background-color: white; color: black; border: none;";
      case "secondary":
        return "background-color:black; color: white; border: none;";
      case "outline":
        return "background-color: transparent; color: #007bff; border: 2px solid #007bff;";
      default:
        return "background-color: white; color: black; border: 1px solid black;";
    }
  }}

  span {
    display: inline-block;
    position: absolute;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    white-space: nowrap;
  }

  .default-text {
    transform: translate3d(-50%, 0%, 0);
    opacity: 1;
  }

  .hover-text {
    transform: translate3d(-50%, 100%, 0);
    opacity: 0;
  }

  &:hover .default-text {
    transform: translate3d(-50%, -100%, 0);
    opacity: 0;
  }

  &:hover .hover-text {
    transform: translate3d(-50%, 0%, 0);
    opacity: 1;
  }
`;

const Button: React.FC<ButtonProps> = ({ text, hoverText, variant = "primary", size = "medium", onClick }) => {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick}>
      <span className="default-text">{text}</span>
      {hoverText && <span className="hover-text">{hoverText}</span>}
    </StyledButton>
  );
};

export default Button;