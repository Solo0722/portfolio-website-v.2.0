import React from "react";
import styled from "styled-components";
import TitleBar from "../components/TitleBar";

const Blogs = () => {
  return (
    <BlogsWrapper>
      <TitleBar title="Blogs I have written" number={2} />
    </BlogsWrapper>
  );
};

const BlogsWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  padding: 6rem;
`;

export default Blogs;
