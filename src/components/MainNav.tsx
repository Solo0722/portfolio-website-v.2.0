import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../theme/appTheme";
import { Button } from "antd";

const MainNav = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavHeight = () => {
    if (window.scrollY >= 75) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeNavHeight();
    window.addEventListener("scroll", changeNavHeight);
  }, []);

  return (
    <NavWrapper style={{ height: navbar ? "60px" : "80px" }}>
      <LogoWrapper>
        <p>oasolomon.</p>
      </LogoWrapper>
      <LinksWrapper className="highlightTextIn">
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
          <li>
            <Button
              type="primary"
              style={{ fontSize: 12 }}
              className="css-button-sliding-to-left--black"
            >
              Download CV
            </Button>
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
  position: sticky;
  top: 0px;
  z-index: 99;
  background-color: ${defaultTheme.black};
  transition: all 0.5s ease-in-out, padding 0.5s ease-in-out;
  h3,
  p {
    /* font-family: "Zilla Slab"; */
    font-weight: 400;
    font-size: 12px;
  }
`;

const LogoWrapper = styled.div`
  p {
    font-weight: 400;
    /* font-weight: 200; */
    /* font-size: 14px; */
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

  .css-button-sliding-to-left--black {
    min-width: 100px;
    height: 40px;
    color: ${defaultTheme.white};
    padding: 5px 10px;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    z-index: 0;
    background: transparent;
    overflow: hidden;
    border: 2px solid ${defaultTheme.primaryColor};
  }
  .css-button-sliding-to-left--black:hover {
    color: #fff;
  }
  .css-button-sliding-to-left--black:hover:after {
    width: 100%;
  }
  .css-button-sliding-to-left--black:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: ${defaultTheme.primaryColor};
  }
`;

export default MainNav;
