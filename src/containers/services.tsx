import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../theme/appTheme";
import { servicesData } from "../utils/data";

const Services = () => {
  return (
    <ServicesWrapper>
      {servicesData.map((data) => (
        <ServiceBox key={data.name}>
          <IconWrapper>{data.image}</IconWrapper>
          <p className="value-wrapper">{data.value}</p>
          <p className="name-wrapper">{data.name}</p>
        </ServiceBox>
      ))}
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.section`
  width: 100%;
  height: 240px;
  background-color: ${defaultTheme.accentColor};
  padding: 0 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ServiceBox = styled.div`
  width: 23%;
  height: 160px;
  border: 1px dashed ${defaultTheme.primaryColor};
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  & .value-wrapper {
    font-weight: bold;
    display: block;
    font-size: 24px;
  }

  & .name-wrapper {
    text-transform: capitalize;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -10px;
  left: 20px;
  background-color: ${defaultTheme.primaryColor};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export default Services;
