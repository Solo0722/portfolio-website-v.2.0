import React from "react";
import styled from "styled-components";

interface IScreenContainerProps {
  children: JSX.Element;
  styles: React.CSSProperties | undefined;
}

const ScreenContainer = ({ children, styles }: IScreenContainerProps) => {
  return (
    <ScreenContainerWrapper style={styles}>{children}</ScreenContainerWrapper>
  );
};

const ScreenContainerWrapper = styled.section`
  padding: 6rem;
`;

export default ScreenContainer;
