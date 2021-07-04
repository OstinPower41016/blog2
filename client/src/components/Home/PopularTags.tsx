import * as React from "react";
import styled from "styled-components";

interface IPopularTagsProps {}

const PopularTags: React.FunctionComponent<IPopularTagsProps> = (props) => {
  return <PopularTagsItem>Popular Tags</PopularTagsItem>;
};

const PopularTagsItem = styled.div`
  padding: 5px 10px 10px;
  background: #f3f3f3;
  border-radius: 4px;
  flex: 0 0 20%;
  margin-top: 1.4rem;
`;

export default PopularTags;
