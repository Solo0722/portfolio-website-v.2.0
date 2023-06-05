import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../theme/appTheme";
import { servicesData } from "../utils/data";
import { MEDIA_QUERIES } from "../utils/constants";

const Services = () => {
  const increaseNumber = ({
    startValue,
    endValue,
  }: {
    startValue: string;
    endValue: string;
  }) => {
    let interval = 5000;
    const [startNumber, setStartNumber] = useState(parseInt(startValue));
    const incrementNumber = useCallback(() => {
      setStartNumber((number) => number + 1);
    }, []);
    const endNumber = parseInt(endValue);

    const duration = Math.floor(interval / endNumber);

    useEffect(() => {
      if (startNumber == endNumber) {
        return;
      }

      const counter = setInterval(() => {
        incrementNumber();
      }, duration);
      return () => clearInterval(counter);
    }, [incrementNumber, startNumber]);

    return startNumber;
  };

  return (
    <ServicesWrapper className="animation-section">
      {servicesData.map((data) => (
        <ServiceBox key={data.name} className="section-animation-text">
          <IconWrapper>{data.image}</IconWrapper>
          <p className="value-wrapper">
            {increaseNumber({
              startValue: data.startValue,
              endValue: data.endValue,
            })}
            {data?.endIcon}
          </p>
          <p className="name-wrapper">{data.name}</p>
        </ServiceBox>
      ))}
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.section`
  width: 100%;
  min-height: 240px;
  background-color: ${defaultTheme.accentColor};
  padding: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${MEDIA_QUERIES.TABLET} {
    & {
      padding: 6rem 2rem;
      flex-wrap: wrap;
    }
  }
  ${MEDIA_QUERIES.MOBILE} {
    & {
      padding: 6rem 1rem;
      flex-direction: column;
    }
  }
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

  ${MEDIA_QUERIES.TABLET} {
    & {
      width: 48%;
      height: 200px;
      margin: 0.5rem 0;
      text-align: center;
    }
  }
  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
      height: 200px;
      margin: 0.5rem 0;
      text-align: center;
    }
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
