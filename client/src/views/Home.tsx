import * as React from "react";
import styled from "styled-components";

import Banner from "../components/Home/Banner";
import HomeTabs from "../components/Home/HomeTabs";
import PopularTags from "../components/Home/PopularTags";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const isAuthorizated = localStorage.getItem("auth");

  return (
    <>
      {!isAuthorizated && <Banner />}
      <div className="container">
        <div className="flex items-start justify-around">
          <HomeTabs />
          <PopularTags />
        </div>
      </div>
    </>
  );
};

export default Home;
