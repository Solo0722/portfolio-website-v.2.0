import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../theme/appTheme";

const MainNav = () => {
  return (
    <NavWrapper>
      <LogoWrapper>
        <p>oasolomon.</p>
      </LogoWrapper>
      <LinksWrapper>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Projects</p>
          </li>
          <li>
            <p>Blogs</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
      </LinksWrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 6rem;
  font-weight: 200;
  transition: all 0.5s ease-in-out;
  /* position: sticky; */
  /* top: -10px; */
  z-index: 99;
  background-color: ${defaultTheme.black};

  h3,
  p,
  li {
    font-family: "Zilla Slab";
    font-weight: 200;
    font-size: 14px;
  }
`;

const LogoWrapper = styled.div`
  p {
    font-weight: 400;
    /* font-weight: 200; */
    font-size: 14px;
    color: ${defaultTheme.primaryColor};
  }
`;
const LinksWrapper = styled.div`
  ul {
    list-style-type: none;
  }

  li {
    display: inline-block;
    cursor: pointer;
    transition: all 0.3s ease-out 0s;
    font-size: 14px;
    padding: 0.5rem 1rem;
    margin-left: 1.5rem;
  }
`;

export default MainNav;
