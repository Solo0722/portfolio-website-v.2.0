import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../theme/appTheme";
import { Button } from "antd";
import { MEDIA_QUERIES } from "../utils/constants";
import Drawebar from "./Drawebar";
import { navLinks } from "../utils/data";

const MainNav = () => {
  const [navbar, setNavbar] = useState(true);

  let scroll_position = 30;
  let scroll_direction;

  const changeNavVisibility = () => {
    scroll_direction =
      document.body.getBoundingClientRect().top > scroll_position
        ? "up"
        : "down";
    scroll_position = document.body.getBoundingClientRect().top;

    if (scroll_direction === "up") {
      // If you are scrolling up, then add active menu class
      setNavbar(true);
    } else {
      // If you Scrolling down, remove the active menu class
      setNavbar(false);
    }
  };

  useEffect(() => {
    setNavbar(true);
    window.addEventListener("scroll", changeNavVisibility);
  }, []);

  return (
    <NavWrapper
      className={navbar ? "active__menu" : ""}
    >
      <LogoWrapper>
        <p className="animation-text">oasolomon.</p>
      </LogoWrapper>
      <LinksWrapper>
        <ul>
          {navLinks.map((lk) => (
            <li key={lk.url} className="animation-text">
              <a href={lk.url}>
                <p>{lk.name}</p>
              </a>
            </li>
          ))}
          <li className="animation-text">
            <a
              href={
                "https://ik.imagekit.io/5kwcgtj3iv/images/UpdatedResume.pdf?updatedAt=1685780715527"
              }
              download={true}
              target="_blank"
            >
              <Button
                type="primary"
                style={{ fontSize: 12 }}
                className="css-button-sliding-to-left--black"
              >
                Download CV
              </Button>
            </a>
          </li>
        </ul>
      </LinksWrapper>
      <Drawebar/>
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
  z-index: 99;
  background-color: ${defaultTheme.black};

  position: sticky;
  top: -10%;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.3s ease-in;

  &.active__menu {
    top: 0%;
    opacity: 1;
    visibility: visible;
    pointer-events: visible;
  }

  h3,
  p {
    /* font-family: "Zilla Slab"; */
    font-weight: 400;
    font-size: 12px;
  }

  ${MEDIA_QUERIES.TABLET} {
    padding: 0 2rem;
  }
  ${MEDIA_QUERIES.MOBILE} {
    padding: 0 1rem;
    height: 60px;
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

  a {
    text-decoration: none;
    color: #fff;
  }

  li {
    display: inline-block;
    cursor: pointer;
    transition: all 0.3s ease-out 0s;
    font-size: 14px;
    padding: 0.5rem 1rem;
    margin-left: 1.5rem;
  }

  li a:hover {
    color: rgba(230, 230, 255, 0.5);
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

  ${MEDIA_QUERIES.TABLET} {
    display: none;
  }
  ${MEDIA_QUERIES.MOBILE} {
    display: none;
  }
`;

export default MainNav;
