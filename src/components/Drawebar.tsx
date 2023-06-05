import React, { useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../utils/constants";
import { Button, Drawer } from "antd";
import { defaultTheme } from "../theme/appTheme";
import { navLinks } from "../utils/data";
import IonIcon from "./IonIcon";

const Drawebar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <MobileNavWrapper>
      <Button
        type="default"
        icon={<IonIcon iconName="menu-outline" />}
        className="social-media-btn animation-text"
        onClick={showDrawer}
      />
      <Drawer
        width={"100%"}
        placement="right"
        onClose={onClose}
        open={open}
        closable={false}
        bodyStyle={{ padding: 0, margin: 0 }}
      >
        <DrawerContent>
          <Button
            type="default"
            icon={<IonIcon iconName="close-outline" />}
            className="social-media-btn close-btn"
            onClick={onClose}
          />
          <ul>
            {navLinks.map((navLink) => (
              <li key={navLink.name}>
                <a href={navLink.url} onClick={onClose}>
                  <p>{navLink.name}</p>
                </a>
              </li>
            ))}
            <li>
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
        </DrawerContent>
      </Drawer>
    </MobileNavWrapper>
  );
};

const DrawerWrapper = styled.div``;

const MobileNavWrapper = styled.nav`
  display: none;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  .social-media-btn {
    box-shadow: none;
    color: rgba(230, 230, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      display: flex;
    }
  }
  ${MEDIA_QUERIES.MOBILE} {
    & {
      display: flex;
    }
    .close-btn {
      right: 1rem;
    }
  }
`;

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${defaultTheme.black};
  position: relative;

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  li {
    display: block;
    cursor: pointer;
    transition: all 0.3s ease-out 0s;
    font-size: 14px;
    padding: 1rem;
    margin: 0.5rem 0;
    text-align: center;
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

  .social-media-btn {
    box-shadow: none;
    color: rgba(230, 230, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 2rem;
  }

  ${MEDIA_QUERIES.MOBILE} {
    .close-btn {
      right: 1rem;
    }
  }
`;

export default Drawebar;
