import React from "react";
import styled from "styled-components";
import useScrollVisible from "../hooks/useScrollVisible";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Arrow = styled(IoIosArrowDropupCircle)`
  position: fixed;
  right: 10px;
  bottom: 10px;
  font-size: 70px;
  transition: opacity 0.4s;
  opacity: ${(props) => (props.visible ? 0.6 : 0)};
  :hover {
    opacity: ${(props) => (props.visible ? 1 : 0)};
  }
  path {
    cursor: pointer;
  }
`;

const TopArrow = () => {
  const scrollVisible = useScrollVisible();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <Arrow onClick={() => scrollTop() } visible={scrollVisible} />;
};
export default TopArrow;
