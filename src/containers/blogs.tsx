import React from "react";
import styled from "styled-components";
import TitleBar from "../components/TitleBar";
import { defaultTheme } from "../theme/appTheme";

const Blogs = () => {
  return (
    <BlogsWrapper>
      <TitleBar title="Blogs I have written" />
    </BlogsWrapper>
  );
};

const BlogsWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  padding: 6rem;
  background-color: ${defaultTheme.accentColor};
`;

export default Blogs;
