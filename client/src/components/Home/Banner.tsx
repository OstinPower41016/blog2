import * as React from "react";
import styled from "styled-components";

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
  return (
    <BannerWrapper>
      <div className="container text-center p-8">
        <Title>conduit</Title>
        <SubTitle>A place to share your Angular knowledge.</SubTitle>
      </div>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  background: var(--green-color);
  box-shadow: inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%);
`;

const Title = styled.p`
  color: white;
  font-family: "Titillium Web";
  font-weight: 700;
  font-size: 3.5rem;
`;

const SubTitle = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
  color: white;
`;

export default Banner;
