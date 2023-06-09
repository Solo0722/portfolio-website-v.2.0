import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TitleBar from "../components/TitleBar";
import { defaultTheme } from "../theme/appTheme";
import { MEDIA_QUERIES } from "../utils/constants";
import { blogs } from "../utils/data";

const Blogs = () => {

  return (
    <BlogsWrapper id="blogs">
      <TitleBar title="Blogs I have written" />
      <BlogBody>
        
        {blogs.map((blog,index) => (
          <BlogBox key={index}>
            <div className="image-wrapper">
              {/* <img src={blog?.imageUrl} alt="project-img" loading="lazy" /> */}
            </div>
            <div className="content-wrapper">
              <h3>Hello World</h3>
              <small>APRIL 29, 2022</small>
              <div className="divider" />
              <p>hello world</p>
            </div>
          </BlogBox>
        ))}
      </BlogBody>
    </BlogsWrapper>
  );
};

const BlogsWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 6rem;
  background-color: ${defaultTheme.accentColor};

  ${MEDIA_QUERIES.TABLET} {
    & {
      padding: 6rem 2rem;
    }
  }
  ${MEDIA_QUERIES.MOBILE} {
    & {
      padding: 6rem 1rem;
    }
  }
`;

const BlogBody = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const BlogBox = styled.div`
  width: 24%;
  min-height: 340px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p,
  small,
  h3 {
    margin: 0.5rem 0;
    line-height: 1.6rem;
  }

  h3 {
    font-size: 18px;
  }

  small {
    font-size: 10px;
  }

  .image-wrapper {
    height: 200px;
    width: 100%;
  }
  .content-wrapper {
    height: 150px;
    width: 100%;
  }

  .divider {
    height: 2px;
    background-color: ${defaultTheme.primaryColor};
    width: 40%;
    margin: 0.2rem 0;
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      width: 33%;
    }
  }
  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }
  }
`;
export default Blogs;
